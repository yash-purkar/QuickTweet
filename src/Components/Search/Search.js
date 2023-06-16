import React from 'react'
import './Search.css'
import { AiOutlineSearch } from 'react-icons/ai'
import { UseData } from '../../Contexts/DataContext'

export const Search = () => {
  const { searchedUserValue, setSearchedUserValue } = UseData();
  return (
    <div className='flex  search-main-box justify-center'>
      <div className='search-box search-md'>
        <span className='search-icon  '><AiOutlineSearch /></span>
        <input type="search" onChange={(e) => setSearchedUserValue(e.target.value)} value={searchedUserValue} className='search-input letter-spacing-1' placeholder='Search' />
      </div>
    </div>
  )
}
