import React from 'react'
import './Navbar.css'
import brand_logo from '../../assets/brand-logo.png'
import { MdOutlineDarkMode, MdOutlineExplore } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='navigation flex justify-between'>
      <div className='flex align-center'>
        <img src={brand_logo} alt="logo" className='brand-logo' />
        <h1 className='nav-brand text-center letter-spacing-1'>QuickTweet</h1>
      </div>
      <div className='icon-box flex justify-between align-center'>
        <NavLink><AiFillHome className='icon' /></NavLink>
        <NavLink><MdOutlineExplore className='icon' /></NavLink>
        <NavLink><MdOutlineDarkMode className='icon' /></NavLink>
        <NavLink><CgProfile className='icon' /></NavLink>
      </div>
    </nav>
  )
}
