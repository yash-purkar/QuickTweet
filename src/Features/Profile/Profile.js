import React from 'react'
import './Profile.css'
import { useParams } from 'react-router';
import { UseData } from '../../Contexts/DataContext';
import { SinglePost } from '../../Components/SinglePost/SinglePost';
export const Profile = () => {

  const { userhandler } = useParams();

  const { dataState: { users, posts } } = UseData();

  const user = users?.find(el => el.userHandler === userhandler);

  console.log(user)
  const { firstName, lastName, username, followers, following } = user;

  const profileUserPosts = posts?.filter(post => post.username === username)
  // console.log(profileUserPosts)

  return (
    <div>
      <div className="profile-container flex ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" alt="profile" className='profile-img' />

        <div className='profile-info'>

          <div className='flex justify-between align-center profile-name-info'>
            <div>
              <h2 className='profile-user-name letter-spacing-1'>{firstName} {lastName}</h2>
              <p className='user-name-2 letter-spacing-1'>{username}</p>
            </div>
            <button className='edit-profile-btn letter-spacing-1 cursor-pointer'>Edit</button>
          </div>

          <p className='letter-spacing-1 user-profile-status'>An Aspiring Web Developer🚀</p>

          <a href="https://yashpurkar-portfolio.netlify.app/" className='user-portfolio-link letter-spacing-1' target='_blank' rel='noreferrer'>https://yashpurkar-portfolio.netlify.app/</a>

          <div className='flex follow-details letter-spacing-1 justify-between'>
            <p><span className='font-bold'>13</span> Posts</p>
            <p><span className='font-bold'>{followers.length}</span> Followers</p>
            <p><span className='font-bold'>{following.length}</span> Following</p>
          </div>

        </div>

      </div>

      <div className='posts'>
        {
          profileUserPosts?.map(post => <SinglePost key={post.username} post={post} />)
        }
      </div>
    </div>
  )
}
