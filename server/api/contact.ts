export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  const body = await readBody(event)
  const { name, email, subject, message } = body

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: '必須項目が入力されていません'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: '正しいメールアドレスを入力してください'
    })
  }

  // SendGrid APIを直接呼び出す（Cloudflare Pages対応）
  const config = useRuntimeConfig()
  const sendgridApiKey = config.sendgridApiKey as string
  const sendgridFrom = config.sendgridFrom as string
  
  if (!sendgridApiKey || !sendgridFrom) {
    throw createError({
      statusCode: 500,
      statusMessage: 'メール送信の設定が正しくありません'
    })
  }

  try {
    // SendGrid APIを直接呼び出す
    const emailData = {
      personalizations: [
        {
          to: [{ email: 'myuhomo769@fuwamofu.com' }],
          subject: `【お問い合わせ】${subject || "無題"}`
        }
      ],
      from: {
        email: sendgridFrom,
        name: '深谷爬虫類館'
      },
      reply_to: {
        email: email,
        name: name
      },
      content: [
        {
          type: 'text/plain',
          value: `
お問い合わせがありました。

【お名前】
${name}

【メールアドレス】
${email}

【件名】
${subject || "（なし）"}

【お問い合わせ内容】
${message}

--------------------
深谷爬虫類館 お問い合わせフォームより
          `.trim()
        },
        {
          type: 'text/html',
          value: `
<h2>お問い合わせがありました</h2>
<p><strong>お名前：</strong>${name}</p>
<p><strong>メールアドレス：</strong><a href="mailto:${email}">${email}</a></p>
<p><strong>件名：</strong>${subject || "（なし）"}</p>
<p><strong>お問い合わせ内容：</strong></p>
<p style="white-space: pre-wrap;">${message}</p>
<hr>
<p style="font-size: 12px; color: #666;">深谷爬虫類館お問い合わせフォームより送信されました。</p>
          `.trim()
        }
      ]
    }

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${sendgridApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    })

    if (!response.ok) {
      const errorText = await response.text()
      let errorData = {}
      try {
        errorData = JSON.parse(errorText)
      } catch {
        errorData = { message: errorText }
      }
      console.error('SendGrid API エラー:', response.status, errorData)
      throw createError({
        statusCode: response.status,
        statusMessage: `メール送信に失敗しました: ${response.status}`
      })
    }
  } catch (error) {
    console.error('メール送信エラー:', error)
    if (error && typeof error === 'object' && 'statusCode' in error) {
      throw error
    }
    throw createError({
      statusCode: 500,
      statusMessage: 'メール送信に失敗しました'
    })
  }

  return {
    success: true,
    message: 'お問い合わせを受け付けました'
  }
})

