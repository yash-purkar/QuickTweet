import React from 'react'
import './Login.css'
export const Login = () => {
  return (
    <div className='login-main-container flex '>

      <div className='login-header flex align-center direction-column'>
        <h1 className='login-header-text letter-spacing-1'>QuickTweet</h1>
        <p className='login-quote letter-spacing-1 text-center'>QuickTweet helps you connect and share with the people in your life.</p>
      </div>

      <div className='login-form-container flex direction-column'>
        <div className='flex direction-column'>
          <input type="text" className='login-user-name letter-spacing-1' placeholder='UserName' />
          <input type="password" className='login-password letter-spacing-1' placeholder='Password' />
        </div>
        {/* <div> */}
        <button className='login-btn letter-spacing-1 font-bold cursor-pointer'>Log In</button>
        <button className='login-as-guest cursor-pointer'>Login As a Guest</button>

        {/* </div> */}
        <p className='for-border'></p>

        <button className='create-new-account letter-spacing-1 font-bold cursor-pointer'>Create new account</button>
      </div>

    </div>
  )
}
