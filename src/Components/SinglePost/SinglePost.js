import React from 'react'
import './SinglePost.css'
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaRegComment } from 'react-icons/fa'
import { UseData } from '../../Contexts/DataContext'
import { dislikePostHandler, likePostHandler } from '../../Services/PostServices'

export const SinglePost = ({ post }) => {
  const { dataState: { users, posts }, dataDispatch } = UseData();
  // const 
  // console.log(post)
  const { _id, content, likes: { likeCount }, username } = post;

  const socialToken = localStorage.getItem("socialToken");
  const user = JSON.parse(localStorage.getItem("socialUser"));

  const { firstName, lastName, profile_photo, userHandler } = users.find((el) => el.username === username);
  // console.log(user)


  const handlePostLike = () => {
    likePostHandler(_id, socialToken, dataDispatch)
  }

  const handlePostDislike = () => {
    dislikePostHandler(_id, socialToken, dataDispatch)
  }
  const isUserLiked = post?.likes?.likedBy?.some(post => post.username === user.username);

  return (
    <div className='single-post-card'>

      <div className='flex justify-between'>
        <div className='flex align-center post-user-details'>
          <span className='post-profile'><img src={profile_photo} className='post-user-img' alt="user-img" /></span>

          <div className='letter-spacing-1'>
            <p ><span className='font-bold letter-spacing-1 user-name-1'>{firstName} {lastName}</span> <small className='user-name-2 letter-spacing-1'>@{userHandler}</small></p>
            <p><span className='post-date'>2022/09/06</span><span className='post-time'>11:46</span></p>
          </div>

        </div>
        <span className='options-icon cursor-pointer'><SlOptionsVertical /></span>

      </div>

      <p className='post-desc letter-spacing-1'>{content}</p>

      <div className='flex letter-spacing-1 align-center justify-around'>
        <div className='like-option flex ' >

          {
            isUserLiked ? <span className='like-icon liked' onClick={handlePostDislike}><AiFillHeart /> </span> : <span className='like-icon' onClick={handlePostLike}><AiOutlineHeart /> </span>
          }

          {likeCount}
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