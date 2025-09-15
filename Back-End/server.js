const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Updated schema to include phone
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,  // Added phone field
  message: String,
  date: { type: Date, default: Date.now }
})

app.use(cors({
  origin: "https://sanjaipandian-portfolio.netlify.app", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const Contact = mongoose.model('Contact', contactSchema)

app.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." })
  }

  const newContact = new Contact({ name, email, phone, message })  // Save phone
  await newContact.save()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New contact from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nMessage: ${message}`  // Include phone in email
  }

  await transporter.sendMail(mailOptions)

  res.status(200).json({ message: 'Message saved and email sent!' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
