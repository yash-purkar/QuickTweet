import React from 'react'
import { v4 as uuid } from "uuid";
import { BiArrowBack } from 'react-icons/bi'
import './AddComment.css'
import { UseModal } from '../../Contexts/ModalContext'
import { addCommentHandler } from '../../Services/PostServices'
import { UseData } from '../../Contexts/DataContext'
import { useState } from 'react'
export const AddComment = () => {
  const [commentText, setCommentText] = useState();
  const { dataState: { users }, isDarkMode } = UseData()

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const socialToken = localStorage.getItem("socialToken");
  // const loggedInUser = users?.find(el => el.username === socialUser.username)

  const { dataState: { posts }, dataDispatch } = UseData();
  const { modalState: { commentPostId }, modalDispatch } = UseModal();

  const handleAddComment = () => {
    // addCommentHandler(posts, commentPostUser, comment, dataDispatch);
    if (commentText) {
      addCommentHandler(commentPostId, commentText, socialToken, dataDispatch)
      modalDispatch({ type: "HIDE_COMMENT_MODAL" })
    }
  }

  return (
    <div className='add-comment-main'>
      <div className={`add-comment-container ${isDarkMode && "bg-dark"}`}>
        <div className='add-comment-inner-container'>
          <span className={`go-back cursor-pointer ${isDarkMode && "color-white"}`} onClick={() => modalDispatch({ type: "HIDE_COMMENT_MODAL" })}><BiArrowBack /></span>

          <textarea name="" id="" className={`comment-text-area letter-spacing-1 ${isDarkMode && "bg-dark-light color-white"}`} onChange={(e) => setCommentText(e.target.value)} placeholder='Comment Your Thoughts...' autoFocus></textarea>

          <div className='flex justify-center'>
            <button className={`new-comment-button cursor-pointer letter-spacing-1 ${isDarkMode && "dark-hover-effect"}`} onClick={handleAddComment}>Comment</button>
          </div>
        </div>
      </div>
    </div>
  )
}
