import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div style={{padding:20}}>
      <h1>MERN Capstone — Home</h1>
      <p>Welcome! This is the frontend for your capstone.</p>
      <Link to="/login">Login</Link>
    </div>
  )
}
