const nodemailer = require('nodemailer')
const notifMentorRouter = require('express').Router()

// const [email, setemail] = useState(initialState)
const email = 'dbeodya0408@gmail.com'

notifMentorRouter.post('/notif_mentor', async (req, res) => {
  const contentHTML =
  `<h1>User Information</h1>
    <ul>
        <li>Username: David </li>
        <li>User Email: prueba@gmail.com</li>
        <li>Phone: 2345</li>
    </ul>
    <p>Prueba de Correo</p>`

  const transporter = nodemailer.createTransport({
    host: 'info@educamas.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'info@educamas.com.co',
      pass: 'Educamas2021'
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const info = await transporter.sendMail({
    from: '"Confirmacion de Mentoria" <info@educamas.com.co>',
    to: email,
    subject: 'Asignación de Mentoria',
    html: contentHTML
  })

  console.log('Messages sent', info.messageId)

  res.redirect('Email sent successfully')
})

module.exports = notifMentorRouter
