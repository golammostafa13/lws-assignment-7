import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const {transactions} = useSelector(state => state.transaction)
  return (
    <div className="header">
        <h1>Expense Tracker </h1>
        <Link to="/"><button className='btn'>Home Page</button></Link>
        { transactions.length > 5 && <Link to="/transactions"> <button className="btn">View All</button> </Link>}
    </div>
  )
}
