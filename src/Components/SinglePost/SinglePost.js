import React from 'react'
import './SinglePost.css'
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaRegComment } from 'react-icons/fa'
import { UseData } from '../../Contexts/DataContext'
import { bookmarkPostHandler, dislikePostHandler, likePostHandler, removeBookmarkPostHandler } from '../../Services/PostServices'
import { useNavigate } from 'react-router'
import { SingleComment } from './SingleComment/SingleComment'
import { UsePost } from '../../Contexts/PostContext'

export const SinglePost = ({ post, showDetail }) => {
  const { dataState: { users, posts, bookmarksIDs }, dataDispatch } = UseData();
  const navigate = useNavigate();

  const { postDispatch } = UsePost();

  const { _id, content, likes: { likeCount }, username, comments } = post;

  console.log(comments)
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


  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`)
  }

  const handleBookmarkClick = () => {
    bookmarkPostHandler(_id, socialToken, dataDispatch)
  }

  const handleRemoveBookmark = () => {
    removeBookmarkPostHandler(_id, socialToken, dataDispatch)
  }

  const handleUserProfile = (userHandler) => {
    navigate(`/profile/${userHandler}`)
  }

  const isUserLiked = post?.likes?.likedBy?.some(post => post.username === user.username);

  return (
    <div className='single-post-card'>
      <div className='flex justify-between'>
        <div className='flex align-center post-user-details'>
          <span className='post-profile cursor-pointer' onClick={() => handleUserProfile(userHandler)}><img src={profile_photo} className='post-user-img' alt="user-img" /></span>

          <div className='letter-spacing-1'>
            <p onClick={() => handleUserProfile(userHandler)}><span className='font-bold letter-spacing-1 user-name-1 cursor-pointer'>{firstName} {lastName}</span> <small className='user-name-2 letter-spacing-1 cursor-pointer'>@{userHandler}</small></p>
            <p><span className='post-date'>2022/09/06</span><span className='post-time'>11:46</span></p>
          </div>

        </div>
        <span className='options-icon cursor-pointer'><SlOptionsVertical /></span>

      </div>

      <p onClick={() => handlePostClick(_id)} className='post-desc letter-spacing-1 cursor-pointer'>{content}</p>

      <div className='flex letter-spacing-1 align-center justify-around'>
        <div className='like-option flex ' >

          {
            isUserLiked ? <span className='like-icon liked' onClick={handlePostDislike}><AiFillHeart /> </span> : <span className='like-icon' onClick={handlePostLike}><AiOutlineHeart /> </span>
          }

          {likeCount}
        </div>
        <div className='comment-option flex' onClick={() => postDispatch({
          type: "SHOW_COMMENT_MODEL", payload: {
            commentPostUser: username
          }
        })}>
          <span className='comment-icon'><FaRegComment /></span> {comments?.length}
        </div>
        <div className='bookmark-option flex' >
          {
            bookmarksIDs?.some(el => el === _id) ? <span onClick={handleRemoveBookmark} className='bookmark-icon-2'><BsFillBookmarkFill /></span> : <span onClick={handleBookmarkClick} className='bookmark-icon-2'><BsBookmark /></span>
          }
        </div>
        <div className='share-option flex'>
          <span className='share-icon'><AiOutlineShareAlt /></span>
        </div>

      </div>

      <div className='comments-container'>
        {
          showDetail && <>
            {
              comments?.map(comment => <SingleComment key={comment._id} comment={comment} />)
            }
          </>
        }
      </div>
    </div>
  )
}
