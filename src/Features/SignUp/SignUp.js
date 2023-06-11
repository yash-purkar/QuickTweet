import React from 'react'
import './SignUp.css'
import { NavLink } from 'react-router-dom'
export const SignUp = () => {
  return (
    <div className='login-main-container flex '>

      <div className='login-header flex align-center direction-column'>
        <h1 className='login-header-text letter-spacing-1'>QuickTweet</h1>
        <p className='login-quote letter-spacing-1 text-center'>QuickTweet helps you connect and share with the people in your life.</p>
      </div>

      <div className='login-form-container flex direction-column'>
        <h2 className='sign-in-heading text-center letter-spacing-1'>Sign Up</h2>
        <div className='flex justify-between fname-lname-box letter-spacing-1'>
          <input type="text" className='fname letter-spacing-1' placeholder='Name' />
          <input type="text" className='lname letter-spacing-1' placeholder='Surname' />
        </div>

        <div className='flex direction-column'>
          <input type="text" className='login-user-name letter-spacing-1' placeholder='Email' />
          <input type="password" className='login-password letter-spacing-1' placeholder='Password' />
        </div>
        {/* <div> */}
        <button className='login-btn letter-spacing-1 font-bold cursor-pointer create-acc'>Create Account</button>

        {/* </div> */}

        <p className='for-border'></p>
        <p className=' already-have-acc letter-spacing-1 text-center'>Already Have An Account?<NavLink to="/login" className="login-link font-bold"> Log In</NavLink></p>
      </div>




    </div>
  )
}
