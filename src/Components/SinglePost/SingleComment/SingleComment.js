import React from 'react'
import './SingleComment.css'
import { CgProfile } from 'react-icons/cg'
export const SingleComment = () => {
  return (
    <div className='comment-card flex'>
      <span className='user-comment-profile'><CgProfile /></span>
      <div className='user-comment letter-spacing-1'>
        <p className='comment-user-name'>Adarsh Balika</p>
        <p className='comment-desc'>Lorem ipsum is not good comment</p>
      </div>
    </div>
  )
}
