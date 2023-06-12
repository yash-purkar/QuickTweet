import React from 'react'
import './Login.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LoginUser } from '../../Services/AuthServices'
import { UseAuth } from '../../Contexts/AuthContext'

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: ""
  });

  const location = useLocation();
  const navigate = useNavigate();

  const { setIsLoggedIn } = UseAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value })
  }


  const { username, password } = loginDetails;


  const handleLoginClick = () => {
    const prevLocation = location?.state?.from?.pathname;
    // console.log(prevLocation)
    if (username && password) {
      LoginUser({ username, password }, setIsLoggedIn, prevLocation, navigate);
    }
  }

  const handleGuestLogin = () => {
    let prevLocation;
    const creds = { username: "yashpurkar_02", password: "yash1234" }
    setLoginDetails({ ...creds })
    LoginUser(creds, setIsLoggedIn, prevLocation, navigate)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className='login-main-container flex '>

      <div className='login-header flex align-center direction-column'>
        <h1 className='login-header-text letter-spacing-1'>QuickTweet</h1>
        <p className='login-quote letter-spacing-1 text-center'>QuickTweet helps you connect and share with the people in your life.</p>
      </div>

      <div className='login-form-container flex direction-column'>
        <h2 className='sign-in-heading letter-spacing-1 text-center'>Sign In</h2>
        <div className='flex direction-column'>

          <input type="text" className='login-user-name letter-spacing-1' placeholder='Email' name='username' onChange={handleChange} value={username} required />

          <input type="password" className='login-password letter-spacing-1' placeholder='Password' name='password' onChange={handleChange} value={password} required />

        </div>
        {/* <div> */}
        <button onClick={handleLoginClick} className='login-btn letter-spacing-1 font-bold cursor-pointer'>Log In</button>

        <button onClick={handleGuestLogin} className='login-as-guest cursor-pointer'>Login As a Guest</button>

        {/* </div> */}
        <p className='for-border'></p>

        <NavLink to="/signUp" className="create-new-account"> <button className=' letter-spacing-1 font-bold cursor-pointer create-new-acc-btn'>Create new account</button></NavLink>
      </div>

    </form>
  )
}
