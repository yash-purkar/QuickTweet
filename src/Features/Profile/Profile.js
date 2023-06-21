import React from 'react'
import './Profile.css'
import { useParams } from 'react-router';
import { UseData } from '../../Contexts/DataContext';
import { SinglePost } from '../../Components/SinglePost/SinglePost';
import { followUserHandler, unfollowUserHandler } from '../../Services/UserServices';
import { UseModal } from '../../Contexts/ModalContext';
import { useEffect } from 'react';
export const Profile = () => {

  const { dataState: { users, posts }, isDarkMode, setIsLoading } = UseData();

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  const { modalDispatch } = UseModal();

  const profileUserPosts = posts?.filter(post => post.username === socialUser.username)

  const loggedInUser = users?.find(user => user.username === socialUser.username);

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }, [])

  return (
    <div>
      <div className={`profile-container flex ${isDarkMode && "bg-dark-light color-white"}`}>
        <img src={loggedInUser?.profile_photo} alt="profile" className='profile-img' />

        <div className='profile-info'>

          <div className='flex justify-between align-center profile-name-info'>
            <div>
              <h2 className='profile-user-name letter-spacing-1'>{loggedInUser?.firstName} {loggedInUser?.lastName}</h2>
              <p className={`user-name-2 letter-spacing-1 ${isDarkMode && "color-white"}`}>{loggedInUser?.userHandler}</p>
            </div>

            <button onClick={() => modalDispatch({ type: "SHOW_PROFILE_EDIT_MODAL" })} className={`edit-profile-btn letter-spacing-1 profile-btns cursor-pointer ${isDarkMode && "dark-hover-effect"}`}>Edit</button>
          </div>

          <p className='letter-spacing-1 user-profile-status'>{loggedInUser?.bio}</p>

          <a href={loggedInUser?.link} className='user-portfolio-link letter-spacing-1' target='_blank' rel='noreferrer'>{loggedInUser?.link}</a>

          <div className={`flex follow-details letter-spacing-1 justify-between ${isDarkMode && "color-white"}`}>
            <p><span className='font-bold'>{profileUserPosts?.length}</span> Posts</p>
            <p><span className='font-bold'>{loggedInUser?.followers?.length}</span> Followers</p>
            <p><span className='font-bold'>{loggedInUser?.following?.length}</span> Following</p>
          </div>

        </div>

      </div>

      <div className='posts'>
        {
          [...profileUserPosts]?.reverse().map(post => <SinglePost key={post.username} post={post} />)
        }
      </div>

    </div>
  )
}
