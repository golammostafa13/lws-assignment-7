import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="header">
        <h1>Expense Tracker </h1>
        <Link to="/"><button className='btn'>Home Page</button></Link>
    </div>
  )
}
