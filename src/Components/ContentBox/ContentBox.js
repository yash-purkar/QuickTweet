import React from 'react'
import './ContentBox.css'
import { CgProfile } from 'react-icons/cg'
import { AiFillPlusCircle } from 'react-icons/ai'
import { Search } from '../Search/Search'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import { SinglePost } from '../SinglePost/SinglePost'

export const ContentBox = () => {
  return (
    <div className='content-box-container'>
      <div className='hide-on-md'>
        <Search />
      </div>

      <div className='flex justify-between add-post-bar align-center'>
        <p className='add-post-text flex align-center'>
          <span className='addpost-profile-icon'><CgProfile /></span>
          <span className='add-post-text letter-spacing-1  cursor-pointer'>What is happening?</span>
        </p>
        <span className='addpost-plus-icon  cursor-pointer'>
          <AiFillPlusCircle className='plus-icon' />
        </span>
      </div>

      <div className='flex justify-around trending-latest-box '>
        <div className='trending-box flex align-center'>
          <span></span>
          <button className='trending-btn letter-spacing-1 cursor-pointer'><BiTrendingUp /><span className='padding-left-03'>Trending</span></button>
        </div>
        <div className='latest-box'>
          <button className='latest-btn letter-spacing-1 cursor-pointer'><MdOpenInNew /><span className='padding-left-03'>Latest</span></button>
        </div>

      </div>



      {/* posts */}
      <div className='posts'>
        <SinglePost />
        <SinglePost />

      </div>

    </div>
  )
}
