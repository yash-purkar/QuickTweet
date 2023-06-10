import React from 'react'
import './SinglePost.css'
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaRegComment } from 'react-icons/fa'

export const SinglePost = () => {
  return (
    <div className='single-post-card'>

      <div className='flex justify-between'>
        <div className='flex align-center post-user-details'>
          <span className='post-profile'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" className='post-user-img' alt="user-img" /></span>

          <div className='letter-spacing-1'>
            <p ><span className='font-bold letter-spacing-1 user-name-1'>John Doe</span> <small className='user-name-2 letter-spacing-1'>@john1221</small></p>
            <p><span className='post-date'>2022/09/06</span><span className='post-time'>11:46</span></p>
          </div>

        </div>
        <span className='options-icon cursor-pointer'><SlOptionsVertical /></span>

      </div>

      <p className='post-desc letter-spacing-1'>You have confidence in your fears not your dreams. Hahaha.</p>

      <div className='flex letter-spacing-1 align-center justify-around'>
        <div className='like-option flex '>
          <span className='like-icon'><AiOutlineHeart /> </span> 1
        </div>
        <div className='comment-option flex'>
          <span className='comment-icon'><FaRegComment /></span> 3
        </div>
        <div className='bookmark-option flex'>
          <span className='bookmark-icon-2'><BsBookmark /></span>
        </div>
        <div className='share-option flex'>
          <span className='share-icon'><AiOutlineShareAlt /></span>
        </div>

      </div>
    </div>
  )
}
