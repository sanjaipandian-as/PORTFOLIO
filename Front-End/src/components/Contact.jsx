import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Separateblock from "../assets/separatorBlack1.png"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

const handleSubmit = (e) => {
  e.preventDefault();

  console.log("Sending email with data:", formData);

  emailjs.send(
    'service_88ree7s',
    'template_xelowss',
    {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message
    },
    'G4ArSoFy0rE0g6llo'
  ).then((response) => {
    if (response.status === 200) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  }, (error) => {
    console.error("EmailJS error:", error);
    setStatus('Failed to send message.');
  });
}


  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center mb-8">
        <div className="inline-block border-2 border-black px-6 py-2">
          <h2 className="text-xl font-bold tracking-widest">CONTACT</h2>
        </div>
        <p className="text-sm text-gray-600 mt-4 max-w-xl mx-auto">
          If you have any questions, projects, or just want to say hi, feel free to reach out! I’m always open to discussing new opportunities and collaborations.
        </p>
        <img src={Separateblock} alt="Section separator" className="mx-auto mt-20 w-48" />
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        <div className="relative">
          <input
            name="name"
            type="text"
            placeholder="Enter your name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-b-2 border-black bg-transparent py-2 pl-2 pr-2 focus:outline-none"
          />
          <div className="absolute left-0 top-0 h-full w-1 bg-black"></div>
        </div>

        <div className="relative">
          <input
            name="email"
            type="email"
            placeholder="Enter your email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-b-2 border-black bg-transparent py-2 pl-2 pr-2 focus:outline-none"
          />
          <div className="absolute left-0 top-0 h-full w-1 bg-black"></div>
        </div>

        <div className="relative">
          <input
            name="phone"
            type="text"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b-2 border-black bg-transparent py-2 pl-2 pr-2 focus:outline-none"
          />
          <div className="absolute left-0 top-0 h-full w-1 bg-black"></div>
        </div>

        <div className="relative">
          <textarea
            name="message"
            placeholder="Your message*"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border-b-2 border-black bg-transparent py-2 pl-4 pr-2 focus:outline-none resize-none box-border"
          ></textarea>
          <div className="absolute left-0 top-0 h-full w-1 bg-black"></div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="relative px-6 py-3 text-sm font-semibold text-black border-0 bg-transparent cursor-pointer after:absolute after:right-0 after:top-1/2 after:h-6 after:w-1 after:bg-black before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:bg-black transform after:-translate-y-1/2 before:-translate-y-1/2"
          >
            SUBMIT
          </button>
        </div>
        {status && <p className="text-center text-gray-600">{status}</p>}
      </form>
    </section>
  )
}

export default Contact
