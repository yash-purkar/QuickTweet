import React from 'react'
import './FollowBar.css'
import { UseData } from '../../Contexts/DataContext'
import { useNavigate } from 'react-router';
import { followUserHandler } from '../../Services/UserServices';
export const FollowBar = () => {
  const { dataState: { users }, dataDispatch } = UseData();

  const navigate = useNavigate();

  const socialToken = localStorage.getItem("socialToken");
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  const handleUserProfile = (userHandler) => {
    navigate(`/user-profile/${userHandler}`)
  }

  const handleFollowUser = (followUserId, socialToken, dataDispatch) => {
    followUserHandler(followUserId, socialToken, dataDispatch)
  }

  // bcz we don't want loggedIn user as followed user
  const notFollowedUsers = users?.filter(el => el.username !== socialUser.username && socialUser.following.every(item => item.username !== el.username));


  // console.log(notFollowedUsers)
  return (
    <div className='followbar-main-container'>
      <div className='followbar-container flex  align-center '>
        <h2 className='letter-spacing-1 follow-header'>Who to follow</h2>

        {notFollowedUsers?.map(user => {
          const { _id, firstName, lastName, userHandler, username } = user
          return (
            <div key={_id} className='flex justify-between follow-user-card'>
              <div className='flex followbar-card-inner align-center'>
                <span className='follow-user-profile cursor-pointer' onClick={() => handleUserProfile(userHandler)}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" className='follow-user-img ' alt="user-img" /></span>
                <div onClick={() => handleUserProfile(userHandler)} className='cursor-pointer'>
                  <h4 className='follow-user-name text-center' >{firstName} {lastName}</h4>
                  <small className='follow-username-2'>@{userHandler}</small>
                </div>
              </div>

              <button onClick={() => handleFollowUser(_id, socialToken, dataDispatch)} className='follow-btn letter-spacing-1 cursor-pointer'>Follow</button>

            </div>
          )
        })}



      </div>
    </div>
  )
}
