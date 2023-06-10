import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import './AddComment.css'
export const AddComment = () => {
  return (
    <div className='add-comment-main'>
      <div className='add-comment-container'>
        <div className='add-comment-inner-container'>
          <span className='go-back cursor-pointer'><BiArrowBack /></span>
          <textarea name="" id="" className='comment-text-area letter-spacing-1' placeholder='Comment Your Thoughts...'></textarea>

          <div className='flex justify-center'>
            <button className='new-comment-button cursor-pointer letter-spacing-1'>Comment</button>
          </div>
        </div>
      </div>
    </div>
  )
}
