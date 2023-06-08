import React from 'react'
import './FollowBar.css'
import { CgProfile } from 'react-icons/cg'
import { SlUserFollow } from 'react-icons/sl'
export const FollowBar = () => {
  return (
    <div className='followbar-main-container'>
      <div className='followbar-container flex direction-column align-center '>
        <h2 className='letter-spacing-1 follow-header'>Who to follow</h2>

        <div className='flex justify-between follow-user-card'>
          <div className='flex'>
            <span className='follow-user-profile'><CgProfile /></span>
            <div>
              <h4>Adarsh Balika</h4>
              <small>adarshbalika_14</small>
            </div>
          </div>
          <span className='follow-btn'><SlUserFollow /></span>
        </div>
        <div className='flex justify-between follow-user-card'>
          <div className='flex'>
            <span className='follow-user-profile'><CgProfile /></span>
            <div>
              <h4>Adarsh Balika</h4>
              <small>adarshbalika_14</small>
            </div>
          </div>
          <span className='follow-btn'><SlUserFollow /></span>
        </div>
        <div className='flex justify-between follow-user-card'>
          <div className='flex'>
            <span className='follow-user-profile'><CgProfile /></span>
            <div>
              <h4>Adarsh Balika</h4>
              <small>adarshbalika_14</small>
            </div>
          </div>
          <span className='follow-btn'><SlUserFollow /></span>
        </div>

      </div>
    </div>
  )
}
