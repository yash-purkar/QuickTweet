import React from 'react'
import './Search.css'
import { AiOutlineSearch } from 'react-icons/ai'

export const Search = () => {
  return (
    <div className='search-box'>
      <span className='search-icon  '><AiOutlineSearch /></span>
      <input type="search" className='search-input letter-spacing-1' placeholder='Search' />
    </div>
  )
}
