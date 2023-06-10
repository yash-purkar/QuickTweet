import React from 'react'
import { BiArrowBack, BiImageAdd } from 'react-icons/bi'
import './AddPost.css'

export const AddPost = () => {
  return (
    <div className='create-post-main'>
      <div className='create-post-container'>
        <div className='create-post-inner-container'>
          <span className='go-back cursor-pointer'><BiArrowBack /></span>
          <textarea name="" id="" className='post-textarea letter-spacing-1' placeholder='What is happening?'></textarea>


          <div className='flex justify-between'>

            <div className="input-file-container ">
              <label for="file-upload" className="btn-upload cursor-pointer flex align-center letter-spacing-1">
                <span className='add-photo-icon'>  <BiImageAdd /> </span>
                <span className='add-photo-text'>Add Photo</span>
              </label>
              <input id="file-upload" type="file" />
            </div>


            <button className='new-post-button cursor-pointer'>Post</button>
          </div>
        </div>
      </div>
    </div>
  )
}

