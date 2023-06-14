import React from 'react'
import './SingleComment.css'
import { UseData } from '../../../Contexts/DataContext';

export const SingleComment = ({ comment }) => {
  const { _id, username, text } = comment;
  console.log(username, "cmtu")
  const { dataState: { users } } = UseData();

  const { firstName, lastName } = users?.find(el => el?.username === username) || {};
  return (
    <div className='comment-card flex'>
      <span ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BqaiKMRdXXKaozTUZToGKHZj0LV-qlt7bTpuuVRN5A&usqp=CAU&ec=48665699' alt='user-profile' className='user-comment-profile' /></span>
      <div className='user-comment letter-spacing-1'>
        <p className='comment-user-name'>{firstName} {lastName}</p>
        <p className='comment-desc'>{text}</p>
      </div>
    </div>
  )
}
