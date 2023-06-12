import React from 'react'
import './Navbar.css'
import brand_logo from '../../assets/brand-logo.png'
import { MdOutlineDarkMode, MdOutlineExplore } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { UseAuth } from '../../Contexts/AuthContext'
export const Navbar = () => {
  const { setIsLoggedIn } = UseAuth()
  return (
    <nav className='navigation flex justify-between'>
      <div className='flex align-center nav-header-box justify-center '>
        <img src={brand_logo} alt="logo" className='brand-logo' />
        <h1 className='nav-brand text-center letter-spacing-1'>QuickTweet</h1>
      </div>
      <div className='icon-box flex justify-between align-center'>
        <NavLink to="/" className="tab-style-lg icon-li letter-spacing-1"><AiFillHome className='icon ' /> <span className='icon-page-name'>HOME</span> </NavLink>
        <NavLink to="/explore" className="icon-li tab-style-lg letter-spacing-1"><MdOutlineExplore className='icon' /><span className='icon-page-name'>EXPLORE</span></NavLink>
        <NavLink to="/bookmark" className="icon-li tab-style-lg letter-spacing-1"><BsFillBookmarkFill className='icon bookmark-icon' /><span className='icon-page-name '>BOOKMARK</span></NavLink>
        <NavLink to="/a" className="icon-li tab-style-lg letter-spacing-1"><MdOutlineDarkMode className='icon' /><span className='icon-page-name'>DARK MODE</span></NavLink>
        <NavLink to="/profile" className="icon-li tab-style-lg letter-spacing-1 "><CgProfile className='icon' /><span className='icon-page-name'>PROFILE</span></NavLink>
        <button onClick={() => setIsLoggedIn(false)} className="icon-li tab-style-lg letter-spacing-1 logout-btn cursor-pointer"><BiLogOut className='icon' /><span className='icon-page-name'>LOGOUT</span></button>
      </div>
    </nav>
  )
}
