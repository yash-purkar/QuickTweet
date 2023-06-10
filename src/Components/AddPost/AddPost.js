import React from 'react'
import { BiArrowBack, BiPhotoAlbum } from 'react-icons/bi'
import './AddPost.css'

export const AddPost = () => {
  return (
    <div className='create-post-main'>
      <div className='create-post-container'>
        <div className='create-post-inner-container'>
          <span className='go-back cursor-pointer'><BiArrowBack /></span>
          <textarea name="" id="" className='post-textarea letter-spacing-1' placeholder='What is happening?'></textarea>


          <div className='flex justify-between'>
            <div className='flex align-center add-photo-box cursor-pointer'>
              <span className='add-photo-icon'><BiPhotoAlbum /></span>
              <span>Add Photo</span>
            </div>
            <button className='new-post-button cursor-pointer'>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}
