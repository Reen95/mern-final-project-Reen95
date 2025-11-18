import React, { useState } from 'react'
import axios from 'axios'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post((import.meta.env.VITE_API_URL || '') + '/api/auth/login', { email, password })
      setMsg('Logged in — token length: ' + (res.data.token || '').length)
    } catch (err) {
      setMsg(err.response?.data?.message || 'Error')
    }
  }

  return (
    <div style={{padding:20}}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} /> <br />
        <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /> <br />
        <button>Login</button>
      </form>
      <p>{msg}</p>
    </div>
  )
}
