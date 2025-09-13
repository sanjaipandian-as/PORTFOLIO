import { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,
        formData
      )
      if (res.status === 200) {
        setStatus('Message sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      setStatus('Failed to send message.')
    }
  }

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your name" value={formData.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Your email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
      <p>{status}</p>
    </section>
  )
}

export default Contact
