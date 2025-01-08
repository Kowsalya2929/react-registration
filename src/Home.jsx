import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-center text-2xl mt-5'>
      <p>Welcome our Website</p>
      <Link to='/signup'>
      <button className='border-2 border-black p-2 text-xl px-4 bg-black text-white m-10'>Sign Up</button>
      </Link>
    </div>
  )
}

export default Home