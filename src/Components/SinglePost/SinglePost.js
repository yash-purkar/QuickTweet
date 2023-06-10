import React from 'react'
import './SinglePost.css'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { SlOptionsVertical } from 'react-icons/sl'
import { SingleComment } from './SingleComment/SingleComment'

export const SinglePost = () => {
  return (
    <div className='single-post-card'>

      <div className='flex justify-between'>
        <div className='flex align-center post-user-details'>
          <span className='post-profile'><CgProfile /></span>

          <div className='letter-spacing-1'>
            <p ><span className='font-bold letter-spacing-1 user-name-1'>John Doe</span> <small className='user-name-2 letter-spacing-1'>@john1221</small></p>
            <p><span className='post-date'>2022/09/06</span><span className='post-time'>11:46</span></p>
          </div>

        </div>
        <span className='options-icon cursor-pointer'><SlOptionsVertical /></span>

      </div>

      <p className='post-desc letter-spacing-1'>You have confidence in your fears not your dreams. Hahaha.</p>

      <div className='flex letter-spacing-1'>
        <div className='like-option flex '> <span className='like-icon'><AiOutlineHeart /> </span> <span>1 Like</span> </div>
        <div className='bookmark-option flex'><span className='bookmark-icon-2'><BsBookmark /></span><span> Bookmark</span></div>
      </div>

      <div className='flex comment-box align-center'>
        <span className='comment-profile-icon'><CgProfile /></span>
        <div className='comment-inner-box'>
          <input type="text" name="" id="" className='comment-input letter-spacing-1' placeholder='Write a comment' />
          <button className='post-comment-btn'>POST</button>
        </div>
      </div>

      {/* comments */}
      <div className='comments-container'>
        <SingleComment />
        <SingleComment />
      </div>
    </div>
  )
}
