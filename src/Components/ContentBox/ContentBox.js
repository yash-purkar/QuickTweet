import React from 'react'
import './ContentBox.css'
import { CgProfile } from 'react-icons/cg'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Search } from '../Search/Search'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import { SinglePost } from '../SinglePost/SinglePost'
import { AddPost } from '../AddPost/AddPost'
import { Profile } from '../../Features/Profile/Profile'

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
