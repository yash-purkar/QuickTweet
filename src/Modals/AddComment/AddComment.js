import React from 'react'
import { v4 as uuid } from "uuid";
import { BiArrowBack } from 'react-icons/bi'
import './AddComment.css'
import { UsePost } from '../../Contexts/PostContext'
import { addCommentHandler } from '../../Services/PostServices'
import { UseData } from '../../Contexts/DataContext'
import { useState } from 'react'
export const AddComment = () => {
  const [commentText, setCommentText] = useState();

  const user = JSON.parse(localStorage.getItem("socialUser"));
  // console.log(user, "ss")

  const { postDispatch } = UsePost();
  const { dataState: { posts }, dataDispatch } = UseData();
  const { postState: { commentPostUser } } = UsePost();

  const handleAddComment = (posts, commentPostUser, comment, dataDispatch) => {
    addCommentHandler(posts, commentPostUser, comment, dataDispatch);
    postDispatch({ type: "HIDE_COMMENT_MODEL" })
  }

  return (
    <div className='add-comment-main'>
      <div className='add-comment-container'>
        <div className='add-comment-inner-container'>
          <span className='go-back cursor-pointer' onClick={() => postDispatch({ type: "HIDE_COMMENT_MODEL" })}><BiArrowBack /></span>

          <textarea name="" id="" className='comment-text-area letter-spacing-1' onChange={(e) => setCommentText(e.target.value)} placeholder='Comment Your Thoughts...' autoFocus></textarea>

          <div className='flex justify-center'>
            <button className='new-comment-button cursor-pointer letter-spacing-1' onClick={() => handleAddComment(posts, commentPostUser, { _id: uuid(), username: user?.username, text: commentText }, dataDispatch)}>Comment</button>
          </div>
        </div>
      </div>
    </div>
  )
}
