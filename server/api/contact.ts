import { Resend } from 'resend'

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

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: `"深谷爬虫類館" <${process.env.RESEND_FROM}>`,
      to: 'myuhomo769@fuwamofu.com',
      replyTo: email, // ← 修正ポイント!!
      subject: `【お問い合わせ】${subject || "無題"}`,
      text: `
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
      `.trim(),
      html: `
<h2>お問い合わせがありました</h2>
<p><strong>お名前：</strong>${name}</p>
<p><strong>メールアドレス：</strong><a href="mailto:${email}">${email}</a></p>
<p><strong>件名：</strong>${subject || "（なし）"}</p>
<p><strong>お問い合わせ内容：</strong></p>
<p style="white-space: pre-wrap;">${message}</p>
<hr>
<p style="font-size: 12px; color: #666;">深谷爬虫類館お問い合わせフォームより送信されました。</p>
      `.trim()
    })
  } catch (error) {
    console.error('メール送信エラー:', error)
  }

  return {
    success: true,
    message: 'お問い合わせを受け付けました'
  }
})
