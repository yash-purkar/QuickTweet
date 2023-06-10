import React from 'react'
import './ContentBox.css'
import { Search } from '../Search/Search'

export const ContentBox = ({ children }) => {
  return (
    <div className='content-box-container'>
      <div className='hide-on-md'>
        <Search />
      </div>

      {children}


    </div>
  )
}
