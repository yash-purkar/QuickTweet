import React from 'react'
import './Navbar.css'
import brand_logo from '../../assets/brand-logo.png'
import { MdLightMode, MdOutlineDarkMode, MdOutlineExplore } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { UseAuth } from '../../Contexts/AuthContext'
import { UseData } from '../../Contexts/DataContext'
import { warning } from '../../Services/ToastsServices'
export const Navbar = () => {
  const { setIsLoggedIn } = UseAuth();
  const { isDarkMode, setIsDarkMode } = UseData();

  const handleLogOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("socialToken")
    localStorage.removeItem("socialUser")
    warning("Logged Out")
  }

  const handleModeClick = (mode) => {
    setIsDarkMode(prev => !prev);
    localStorage.setItem("QUICK_TWEET_THEME", mode)
  }

  const getActiveStyle = ({ isActive }) => {
    if (isActive && isDarkMode) {
      return {
        backgroundColor: isActive && "#1e293b",
        borderRadius: isActive && "0.5rem",
      }
    }
    else return {
      backgroundColor: isActive && "#fff",
      borderRadius: isActive && "0.5rem",
    }
  }


  return (
    <nav className={`navigation flex justify-between ${isDarkMode && "bg-dark"}`}>
      <div className='flex align-center nav-header-box justify-center '>
        <NavLink to="/" className="nav-brand-logo decoration-none"><img src={brand_logo} alt="logo" className='brand-logo' /></NavLink>
        <NavLink to="/" className="nav-brand-header decoration-none"><h1 className='nav-brand text-center letter-spacing-1'>QuickTweet</h1></NavLink>
      </div>
      <div className={`icon-box flex justify-between align-center ${isDarkMode && "bg-dark"}`}>
        <NavLink to="/" className={`tab-style-lg icon-li letter-spacing-1 ${isDarkMode && "dark-hover-effect"}`} style={getActiveStyle} ><AiFillHome className='icon ' /> <span className={`icon-page-name ${isDarkMode && "color-white"}`}>HOME</span> </NavLink>

        <NavLink to="/explore" className={`icon-li tab-style-lg letter-spacing-1 ${isDarkMode && "dark-hover-effect"}`} style={getActiveStyle} ><MdOutlineExplore className='icon' /><span className={`icon-page-name ${isDarkMode && "color-white"}`}>EXPLORE</span></NavLink>

        <NavLink to="/bookmark" className={`icon-li tab-style-lg letter-spacing-1 ${isDarkMode && "dark-hover-effect"}`} style={getActiveStyle} ><BsFillBookmarkFill className='icon bookmark-icon' /><span className={`icon-page-name ${isDarkMode && "color-white"}`} >BOOKMARK</span></NavLink>

        {
          isDarkMode ? <button onClick={() => handleModeClick("LIGHT")} className={`icon-li theme-btn tab-style-lg letter-spacing-1 ${isDarkMode && "dark-hover-effect"}`}><MdLightMode className='icon' /><span className={`dark-light-text icon-page-name ${isDarkMode && "color-white"}`}>LIGHT MODE</span></button>
            :
            <button onClick={() => handleModeClick("DARK")} className={`icon-li tab-style-lg theme-btn letter-spacing-1 ${isDarkMode && "dark-hover-effect"} `}><MdOutlineDarkMode className='icon' /><span className={`dark-light-text icon-page-name ${isDarkMode && "color-white"}`}>DARK MODE</span></button>
        }

        <NavLink to={`/profile`} className={`icon-li tab-style-lg letter-spacing-1 ${isDarkMode && "dark-hover-effect"}`} style={getActiveStyle} ><CgProfile className='icon' /><span className={`icon-page-name ${isDarkMode && "color-white"}`}>PROFILE</span></NavLink>

        <button onClick={handleLogOut} className={`icon-li tab-style-lg letter-spacing-1 logout-btn cursor-pointer ${isDarkMode && "dark-hover-effect"}`}><BiLogOut className='icon' /><span className={`logout-text icon-page-name ${isDarkMode && "color-white"}`}>LOGOUT</span></button>
      </div>
    </nav>
  )
}
