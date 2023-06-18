import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import './HomeContent.css'
import { FollowBar } from '../../Components/FollowBar/FollowBar'
import { UseData } from '../../Contexts/DataContext'
import { UseModal } from '../../Contexts/ModalContext'
import { useState } from 'react'
export const HomeContent = () => {
  const { dataState: { posts, users } } = UseData();
  const { modalDispatch } = UseModal();
  const [postsType, setPostsType] = useState("latest");

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(el => el.username === socialUser.username)


  const openPostModel = () => {
    modalDispatch({ type: "SHOW_POST_MODAL" })
  }


  const loggedInUserPosts = posts?.filter(post => post?.username === loggedInUser?.username);

  const homePosts = posts?.filter(post => loggedInUser?.following?.some(el => el.username === post.username));

  // For trending
  const likedPosts = posts?.filter(post => post?.likes?.likedBy?.length > 0);

  const sortPostsByLikes = [...likedPosts]?.sort((a, b) => a.likes.likedBy.length - b.likes.likedBy.length)

  const postsByType = postsType === "latest" ? [...loggedInUserPosts.reverse(), ...homePosts].reverse() : sortPostsByLikes;

  return (
    <>
      <div className='flex justify-between add-post-bar align-center'>
        <p className='add-post-text flex align-center'>
          <span className='addpost-profile-icon'><img src={loggedInUser?.profile_photo} alt="user-img" className='user-image' /> </span>
          <span className='add-post-text letter-spacing-1  cursor-pointer' onClick={openPostModel}>What is happening?</span>
        </p>
        <span className='addpost-plus-icon  cursor-pointer' onClick={openPostModel}>
          <AiFillPlusCircle className='plus-icon' />
        </span>
      </div>

      <div className='flex justify-around trending-latest-box '>

        <div className='latest-box'>
          <button onClick={() => setPostsType("latest")} className={`latest-btn letter-spacing-1 cursor-pointer ${postsType === "latest" && "type-active"}`} ><MdOpenInNew /><span className='padding-left-03'>Latest</span></button>
        </div>

        <div className='trending-mid-line'></div>

        <div className='trending-box flex align-center'>
          <span></span>
          <button onClick={() => setPostsType("trending")} className={`trending-btn letter-spacing-1 cursor-pointer ${postsType === "trending" && "type-active"}`}><BiTrendingUp /><span className='padding-left-03'>Trending</span></button>
        </div>
      </div>

      <div className='hide-follow-on-lg'>
        <FollowBar />
      </div>


      {
        postsByType?.length > 0 ? <div className='posts'>
          {
            [...postsByType]?.reverse().map(post => <SinglePost key={post._id} post={post} />)
          }
        </div>
          :
          <h2 className='likes-posts-heading text-center'>Liked Some Posts To See</h2>
      }
    </>
  )
}
