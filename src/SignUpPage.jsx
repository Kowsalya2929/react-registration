import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

//input
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignUpPage = () => {
  const [formData,setFormData] = useState({
      name: "",
      email: "",
      password: "",
      CPassword: "",
    });

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const [error,setError] = useState('')

  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()

    //basic validation
    if(!formData.name || !formData.email || !formData.password || !formData.CPassword){
      setError('All fields are required?')
      return;
    }

    if(formData.password !== formData.CPassword){
      setError('Passwords do not match. Please verify?')
      return;
    }

    if(!/\S+@\S+\.\S+/.test(formData.email)){
      setError('Please enter valid email?')
      return;
    }
    
    setError('')
    setLoading(true)
    setFormData({
      name: "",
      email: "",
      password: "",
      CPassword: "",
    })
    navigate('/');
    console.log(formData)
  }

  return (
    <div className='container mx-auto'>
      <h2 className='text-center font-serif text-2xl mt-10'>SIGNUP</h2>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center my-10'>
        {error && <p className='text-red-400 mb-5'>{error}</p>}
        <label htmlFor="n" className='flex flex-row gap-3'>
        <FaUser size={40} />
          <input 
            type="text"
            id='n' 
            name='name' 
            value={formData.name} 
            onChange={handleChange}
            className='border-2 border-black p-2 text-xl'
            placeholder='Enter Username'
          />
        </label><br />
        <label htmlFor="em" className='flex flex-row gap-3'>
        <MdEmail size={40} />
          <input 
            type="email" 
            id='em' 
            name='email' 
            value={formData.email} 
            onChange={handleChange}
            className='border-2 border-black p-2 text-xl'
            placeholder='Enter Email'
          />
        </label><br />
        <label htmlFor="p" className='flex flex-row gap-3'>
        <RiLockPasswordFill size={40} />
          <input 
            type="password" 
            id='p' 
            name='password' 
            value={formData.password} 
            onChange={handleChange}
            className='border-2 border-black p-2 text-xl'
            placeholder='Password'
          />
        </label><br />
        <label htmlFor="cp" className='flex flex-row gap-3'>
        <RiLockPasswordFill size={40} />
          <input 
            type="password" 
            id='cp' 
            name='CPassword' 
            value={formData.CPassword} 
            onChange={handleChange} 
            className='border-2 border-black p-2 text-xl'
            placeholder='Correct Password' 
          />
        </label><br />
        <button 
        type='submit' 
        className='border-2 border-black p-2 text-xl px-4 bg-black text-white mt-5'
        disabled={loading}
        >
          {loading ? 'Signing Up':'Sign Up'}</button>
      </form>
      <p className='text-center mb-5'>Already have an account?</p>
      <div className='flex justify-center'>
      <Link to='/login'><button className='border-2 border-black p-2 text-xl px-4 bg-black text-white'>Sign In</button></Link>
      </div>
    </div>
  )
}

export default SignUpPage