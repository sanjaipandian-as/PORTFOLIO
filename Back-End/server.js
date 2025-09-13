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

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
})

const Contact = mongoose.model('Contact', contactSchema)

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." })
  }
  const newContact = new Contact({ name, email, message })
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
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  }
  await transporter.sendMail(mailOptions)
  res.status(200).json({ message: 'Message saved and email sent!' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
