import React, { useState } from 'react'
const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const endpoint = 'https://dt25xgepxfjs6jhdsxkgiz7dnu0pbktv.lambda-url.us-east-1.on.aws/' // Add this later
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = { email, message, subject }
    const fetchPromise = fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data)
    });
    fetchPromise
      .then(response => response.json())
      .then(data => {
        console.log(data); // handle response, catch errors
    })
  }
  return (
    <div>
      <form action={endpoint} onSubmit={handleSubmit} method="POST"
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
        <textarea placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
export default ContactForm