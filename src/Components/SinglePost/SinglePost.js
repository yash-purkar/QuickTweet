import React from 'react'
import './SinglePost.css'
import { AiFillDelete, AiFillHeart, AiOutlineClose, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs'
import { SlOptionsVertical } from 'react-icons/sl'
import { FaRegComment } from 'react-icons/fa'
import { UseData } from '../../Contexts/DataContext'
import { bookmarkPostHandler, dislikePostHandler, likePostHandler, removeBookmarkPostHandler } from '../../Services/PostServices'
import { useNavigate } from 'react-router'
import { SingleComment } from './SingleComment/SingleComment'
import { UseModal } from '../../Contexts/ModalContext'
import { BiEdit } from 'react-icons/bi'
import { useState } from 'react'

export const SinglePost = ({ post, showDetail }) => {
  const { dataState: { users, posts }, dataDispatch, isDarkMode } = UseData();
  const navigate = useNavigate();
  const [showEditDeleteBox, setShowEditDeleteBox] = useState(false);

  const { modalDispatch } = UseModal();

  const { _id, content, likes: { likeCount }, username, comments, postImg } = post;


  const socialToken = localStorage.getItem("socialToken");

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(el => el.username === socialUser.username)


  const postUser = users?.find((el) => el.username === username);
  // console.log(user)

  const { firstName, lastName, profile_photo, userHandler, bookmarks } = postUser || {}

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
    bookmarkPostHandler(_id, socialToken, dataDispatch, loggedInUser)
  }

  const handleRemoveBookmark = () => {
    removeBookmarkPostHandler(_id, socialToken, dataDispatch, loggedInUser)
  }

  const handleUserProfile = (userHandler) => {
    if (userHandler === loggedInUser?.userHandler) {
      navigate(`/profile`)
    }
    else {
      navigate(`/user-profile/${userHandler}`)
    }
  }


  const isUserLiked = post?.likes?.likedBy?.some(post => post.username === loggedInUser.username);

  const isBookMarked = loggedInUser?.bookmarks?.includes(_id);


  const handleEditClick = () => {
    setShowEditDeleteBox(false)
    dataDispatch({ type: "POST_ID_TO_EDIT", payload: _id })
    modalDispatch({ type: "SHOW_POST_MODAL" })
  }

  const handleDeletePost = () => {
    setShowEditDeleteBox(false);
  }

  return (
    <div className={`single-post-card ${isDarkMode && "bg-dark-light"}`}>
      <div className='flex justify-between relative'>
        <div className='flex align-center post-user-details'>
          <span className='post-profile cursor-pointer' onClick={() => handleUserProfile(userHandler)}>

            <img src={profile_photo} className='post-user-img' alt="user-img" /></span>

          <div className='letter-spacing-1'>
            <p onClick={() => handleUserProfile(userHandler)}><span className={`font-bold letter-spacing-1 user-name-1 cursor-pointer ${isDarkMode && "color-white"}`}>{firstName} {lastName}</span> <small className={`user-name-2 letter-spacing-1 cursor-pointer ${isDarkMode && "color-white"}`}>@{userHandler}</small></p>
            <p ><span className={`post-date ${isDarkMode && "color-white"}`}>2022/09/06</span><span className={`post-time ${isDarkMode && "color-white"}`}>11:46</span></p>
          </div>

        </div>
        {
          loggedInUser?.username === username && <>
            {
              showEditDeleteBox ?
                <span onClick={() => setShowEditDeleteBox(false)} className={`options-icon cursor-pointer ${isDarkMode && "color-white"}`}><AiOutlineClose /></span>
                :
                <span onClick={() => setShowEditDeleteBox(true)} className={`options-icon cursor-pointer ${isDarkMode && "color-white"}`}><SlOptionsVertical /></span>
            }
          </>
        }

        {
          showEditDeleteBox && <div className={`${isDarkMode && "bg-dark"} post-operations-container flex direction-column`}>

            <button className={`operation-btn letter-spacing-1 cursor-pointer edit-post-btn flex align-center ${isDarkMode && "bg-dark color-white"}`} onClick={handleEditClick}><span><BiEdit /></span><span>Edit</span></button>

            <button className={`operation-btn letter-spacing-1 cursor-pointer delete-post-btn flex-align-center ${isDarkMode && "bg-dark color-white "}`}><span><AiFillDelete /></span><span>Delete</span></button>
          </div>
        }

      </div>

      <div onClick={() => handlePostClick(_id)} className={`post-content-box ${isDarkMode && " border-color-dark"}`}>{
        content && <p className={`post-desc letter-spacing-1 cursor-pointer ${isDarkMode && "color-white"}`}>{content}</p>
      }
        {postImg &&
          <>
            <br />
            <img src={postImg} alt="img" className='post-img' />
          </>
        }
      </div>

      <div className='flex letter-spacing-1 align-center justify-around'>
        <div className={`like-option flex ${isDarkMode && "color-white"}`} >

          {
            isUserLiked ? <span className='like-icon liked' onClick={handlePostDislike}><AiFillHeart /> </span> : <span className='like-icon' onClick={handlePostLike}><AiOutlineHeart /> </span>
          }

          {likeCount}
        </div>
        <div className={`comment-option flex ${isDarkMode && "color-white"}`} onClick={() => modalDispatch({
          type: "SHOW_COMMENT_MODAL", payload: {
            commentPostId: _id
          }
        })}>
          <span className='comment-icon'><FaRegComment /></span> {comments?.length}
        </div>
        <div className={`bookmark-option flex ${isDarkMode && "color-white"}`} >
          {
            isBookMarked ? <span onClick={handleRemoveBookmark} className='bookmark-icon-2'><BsFillBookmarkFill /></span> :
              <span onClick={handleBookmarkClick} className='bookmark-icon-2'><BsBookmark /></span>
          }
        </div>
        <div className={`share-option flex ${isDarkMode && "color-white"}`}>
          <span className='share-icon'><AiOutlineShareAlt /></span>
        </div>

      </div>

      <div className='comments-container'>
        {
          showDetail && <>
            {
              comments?.map(comment => <SingleComment key={comment._id} comment={comment} postId={_id} />)
            }
          </>
        }
      </div>
    </div>
  )
}
