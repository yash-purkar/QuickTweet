import React from 'react'
import { v4 as uuid } from "uuid";
import { BiArrowBack, BiImageAdd } from 'react-icons/bi'
import { IoMdRemoveCircle } from 'react-icons/io'
import './AddPost.css'
import { createPostHandler } from '../../Services/PostServices';
import { useState } from 'react';
import { UsePost } from '../../Contexts/PostContext';
import { UseData } from '../../Contexts/DataContext';

export const AddPost = () => {
  const [postData, setPostData] = useState({
    _id: uuid(),
    content: "",
    comments: [],
    postImg: ""
  })

  const { dataDispatch } = UseData();
  const { postDispatch } = UsePost();

  const socialToken = localStorage.getItem("socialToken");

  const handleImageUpload = (e) => {
    console.log(e.target.value, "image")
    const selectedImg = e.target.files[0];
    setPostData((prev) => ({ ...prev, postImg: URL.createObjectURL(selectedImg) }))
  }

  const handlePostClick = () => {
    if (postData.content || postData.postImg) {
      createPostHandler(postData, socialToken, dataDispatch)
      postDispatch({ type: "HIDE_POST_MODEL" })
    }
  }

  const handleRemoveFile = () => {
    setPostData(prev => ({ ...prev, postImg: "" }))
  }

  return (
    <div className='create-post-main'>
      <div className='create-post-container'>
        <div className='create-post-inner-container'>
          <span className='go-back cursor-pointer' onClick={() => postDispatch({ type: "HIDE_POST_MODEL" })}><BiArrowBack /></span>

          <textarea name="" id="" className='post-textarea letter-spacing-1' onChange={(e) => setPostData(prev => ({ ...prev, content: e.target.value }))} placeholder='What is happening?' autoFocus>
          </textarea>


          <div className='flex justify-between align-center'>

            <div className="input-file-container ">
              <label for="file-upload" className="btn-upload cursor-pointer flex align-center letter-spacing-1">
                <span className='add-photo-icon'>  <BiImageAdd /> </span>
                <span className='add-photo-text'>Photo/GIF</span>
              </label>
              <input id="file-upload" type="file" onChange={handleImageUpload} />

              {
                postData?.postImg && <div className='selected-img-box'>
                  <img src={postData.postImg} alt="" className='selected-img' />
                  <span onClick={handleRemoveFile} className='clear-selected-img cursor-pointer'><IoMdRemoveCircle /></span>
                </div>
              }

            </div>


            <button className='new-post-button cursor-pointer' onClick={handlePostClick}>Post</button>
          </div>


        </div>
      </div>
    </div>
  )
}

