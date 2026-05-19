import { Router } from 'express'
import nodemailer from 'nodemailer'

export const contactRouter = Router()

contactRouter.post('/', async (req, res) => {
  const { name, email, message } = req.body as {
    name?: string
    email?: string
    message?: string
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO } = process.env

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.log('Contact form (dev log):', { name, email, message })
    return res.json({ success: true, mode: 'logged' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: false,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    await transporter.sendMail({
      from: `"Portfolio" <${SMTP_USER}>`,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>${name}</strong> &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br>')}</p>`,
    })

    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to send message.' })
  }
})
