import React from 'react'
import './SingleComment.css'
import { UseData } from '../../../Contexts/DataContext';
import { AiFillDelete } from 'react-icons/ai';
import { UsePost } from '../../../Contexts/ModalContext';
import { deleteCommentHandler } from '../../../Services/PostServices';

export const SingleComment = ({ comment, postId }) => {
  const { _id, username, text } = comment;

  const { dataState: { users, posts }, dataDispatch } = UseData();

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const socialToken = localStorage.getItem("socialToken")

  const handleDeleteComment = () => {
    deleteCommentHandler(postId, _id, socialToken, dataDispatch)
  }

  const { firstName, lastName } = users?.find(el => el?.username === username) || {};
  return (
    <div className='comment-card flex'>
      <span ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BqaiKMRdXXKaozTUZToGKHZj0LV-qlt7bTpuuVRN5A&usqp=CAU&ec=48665699' alt='user-profile' className='user-comment-profile' /></span>
      <div className='user-comment letter-spacing-1 flex justify-between'>
        <div>
          <p className='comment-user-name'>{firstName} {lastName}</p>
          <p className='comment-desc'>{text}</p>
        </div>
        {
          socialUser?.username === username && <div className='comment-operations flex'>
            <span onClick={handleDeleteComment} className='delete-comment-icon cursor-pointer'><AiFillDelete /></span>
          </div>
        }
      </div>
    </div>
  )
}
