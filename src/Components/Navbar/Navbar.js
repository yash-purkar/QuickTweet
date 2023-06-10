import React from 'react'
import './Navbar.css'
import brand_logo from '../../assets/brand-logo.png'
import { MdOutlineDarkMode, MdOutlineExplore } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
export const Navbar = () => {
  return (
    <nav className='navigation flex justify-between'>
      <div className='flex align-center nav-header-box justify-center '>
        <img src={brand_logo} alt="logo" className='brand-logo' />
        <h1 className='nav-brand text-center letter-spacing-1'>QuickTweet</h1>
      </div>
      <div className='icon-box flex justify-between align-center'>
        <NavLink to="/" className="tab-style-lg icon-li letter-spacing-1"><AiFillHome className='icon ' /> <span className='icon-page-name'>HOME</span> </NavLink>
        <NavLink className="icon-li tab-style-lg letter-spacing-1"><MdOutlineExplore className='icon' /><span className='icon-page-name'>EXPLORE</span></NavLink>
        <NavLink className="icon-li tab-style-lg letter-spacing-1"><BsFillBookmarkFill className='icon bookmark-icon' /><span className='icon-page-name '>BOOKMARK</span></NavLink>
        <NavLink className="icon-li tab-style-lg letter-spacing-1"><MdOutlineDarkMode className='icon' /><span className='icon-page-name'>DARK MODE</span></NavLink>
        <NavLink to="/profile" className="icon-li tab-style-lg letter-spacing-1 "><CgProfile className='icon' /><span className='icon-page-name'>PROFILE</span></NavLink>
        <NavLink className="icon-li tab-style-lg letter-spacing-1 "><BiLogOut className='icon' /><span className='icon-page-name'>LOGOUT</span></NavLink>

      </div>
    </nav>
  )
}
