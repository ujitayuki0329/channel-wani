import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  // POSTリクエストのみ許可
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  const body = await readBody(event)
  const { name, email, subject, message } = body

  // バリデーション
  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: '必須項目が入力されていません'
    })
  }

  // メールアドレスの形式チェック
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: '正しいメールアドレスを入力してください'
    })
  }

  // メール送信設定
  // 環境変数から設定を取得（本番環境では環境変数で設定）
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  // メール送信（環境変数が設定されていない場合はスキップ）
  if (process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      await transporter.sendMail({
        from: `"深谷爬虫類館" <${process.env.SMTP_USER}>`,
        to: 'myuhomo769@fuwamofu.com',
        replyTo: email,
        subject: `【お問い合わせ】${subject}`,
        text: `
お問い合わせがありました。

【お名前】
${name}

【メールアドレス】
${email}

【件名】
${subject}

【お問い合わせ内容】
${message}

---
このメールは深谷爬虫類館のお問い合わせフォームから送信されました。
        `.trim(),
        html: `
<h2>お問い合わせがありました</h2>
<p><strong>お名前：</strong>${name}</p>
<p><strong>メールアドレス：</strong><a href="mailto:${email}">${email}</a></p>
<p><strong>件名：</strong>${subject}</p>
<p><strong>お問い合わせ内容：</strong></p>
<p style="white-space: pre-wrap;">${message}</p>
<hr>
<p style="color: #666; font-size: 12px;">このメールは深谷爬虫類館のお問い合わせフォームから送信されました。</p>
        `.trim()
      })
    } catch (error) {
      console.error('メール送信エラー:', error)
      // エラーが発生しても成功レスポンスを返す（ログに記録）
    }
  } else {
    // 開発環境ではコンソールに出力
    console.log('=== お問い合わせフォーム ===')
    console.log('お名前:', name)
    console.log('メールアドレス:', email)
    console.log('件名:', subject)
    console.log('お問い合わせ内容:', message)
    console.log('送信先: myuhomo769@fuwamofu.com')
  }

  return {
    success: true,
    message: 'お問い合わせを受け付けました'
  }
})

