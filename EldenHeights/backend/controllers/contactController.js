import nodemailer from 'nodemailer';

export const sendContactMessage = async (req, res) => {
  const { name, email, message, role } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'placeholder@example.com',
        pass: process.env.SMTP_PASS || 'password'
      }
    });

    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: process.env.SCHOOL_INBOX || 'info@eldenheights.edu',
      subject: `New ${role} enquiry via Elden Heights website`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Role:</strong> ${role}</p><p>${message}</p>`
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('sendContactMessage error', error);
    res.status(500).json({ message: 'Unable to send contact message', error: error.message });
  }
};
