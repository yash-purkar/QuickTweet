import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdOpenInNew } from 'react-icons/md'
import './HomeContent.css'
import { FollowBar } from '../../Components/FollowBar/FollowBar'
import { UseData } from '../../Contexts/DataContext'
export const HomeContent = () => {
  const { dataState: { posts } } = UseData();
  return (
    <>
      <div className='flex justify-between add-post-bar align-center'>
        <p className='add-post-text flex align-center'>
          <span className='addpost-profile-icon'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" alt="user-img" className='user-image' /> </span>
          <span className='add-post-text letter-spacing-1  cursor-pointer'>What is happening?</span>
        </p>
        <span className='addpost-plus-icon  cursor-pointer'>
          <AiFillPlusCircle className='plus-icon' />
        </span>
      </div>

      <div className='flex justify-around trending-latest-box '>
        <div className='trending-box flex align-center'>
          <span></span>
          <button className='trending-btn letter-spacing-1 cursor-pointer'><BiTrendingUp /><span className='padding-left-03'>Trending</span></button>
        </div>
        <div className='trending-mid-line'></div>
        <div className='latest-box'>
          <button className='latest-btn letter-spacing-1 cursor-pointer'><MdOpenInNew /><span className='padding-left-03'>Latest</span></button>
        </div>

      </div>

      <div className='hide-follow-on-lg'>
        <FollowBar />
      </div>


      <div className='posts'>
        {
          posts?.map(post => <SinglePost key={post._id} post={post} />)
        }
      </div>
    </>
  )
}
