import React from 'react'
import './Profile.css'
import { useParams } from 'react-router';
import { UseData } from '../../Contexts/DataContext';
import { SinglePost } from '../../Components/SinglePost/SinglePost';
import { followUserHandler, unfollowUserHandler } from '../../Services/UserServices';

export const UsersProfile = () => {

  const { userhandler } = useParams();

  const { dataState: { users, posts }, dataDispatch } = UseData();

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(el => el.username === socialUser.username)

  const socialToken = localStorage.getItem("socialToken")

  const foundUser = users?.find(el => el.userHandler === userhandler);
  console.log(foundUser, "Fuuuuuuu")

  const userPosts = posts?.filter(post => post.username === foundUser.username)




  const handleFollow = (followUserId, socialToken, dataDispatch) => {
    followUserHandler(followUserId, socialToken, dataDispatch)
  }

  const handleUnfollow = (followUserId, socialToken, dataDispatch) => {
    unfollowUserHandler(followUserId, socialToken, dataDispatch)
  }

  return (
    <div>
      <div className="profile-container flex ">
        <img src={foundUser?.profile_photo} alt="profile" className='profile-img' />

        <div className='profile-info'>

          <div className='flex justify-between align-center profile-name-info'>
            <div>
              <h2 className='profile-user-name letter-spacing-1'>{foundUser.firstName} {foundUser.lastName}</h2>
              <p className='user-name-2 letter-spacing-1'>{foundUser.userHandler}</p>
            </div>

            {
              loggedInUser?.following?.some(el => el.username === foundUser.username)
                ?
                <button onClick={() => handleUnfollow(foundUser._id, socialToken, dataDispatch)} className='unfollow-profile-btn letter-spacing-1 profile-btns cursor-pointer'>Unfollow</button>
                :
                <button onClick={() => handleFollow(foundUser._id, socialToken, dataDispatch)} className='follow-profile-btn letter-spacing-1 profile-btns cursor-pointer'>Follow</button>
            }

          </div>

          <p className='letter-spacing-1 user-profile-status'>{foundUser?.bio}</p>

          <a href={foundUser?.link} className='user-portfolio-link letter-spacing-1' target='_blank' rel='noreferrer'>{foundUser.link}</a>

          <div className='flex follow-details letter-spacing-1 justify-between'>
            <p><span className='font-bold'>{userPosts?.length}</span> Posts</p>
            <p><span className='font-bold'>{foundUser?.followers?.length}</span> Followers</p>
            <p><span className='font-bold'>{foundUser?.following?.length}</span> Following</p>
          </div>

        </div>

      </div>

      <div className='posts'>
        {
          [...userPosts]?.reverse().map(post => <SinglePost key={post._id} post={post} />)
        }
      </div>
    </div>
  )
}
