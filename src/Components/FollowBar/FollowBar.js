import React from 'react'
import './FollowBar.css'
export const FollowBar = () => {
  return (
    <div className='followbar-main-container'>
      <div className='followbar-container flex  align-center '>
        <h2 className='letter-spacing-1 follow-header'>Who to follow</h2>

        <div className='flex justify-between follow-user-card'>
          <div className='flex followbar-card-inner align-center'>
            <span className='follow-user-profile'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" className='follow-user-img' alt="user-img" /></span>
            <div>
              <h4 className='follow-user-name'>Adarsh Balika</h4>
              <small className='follow-username-2'>adarshbalika_14</small>
            </div>
          </div>
          <button className='follow-btn letter-spacing-1 cursor-pointer'>Follow</button>
        </div>

        <div className='flex justify-between follow-user-card'>
          <div className='flex followbar-card-inner align-center'>
            <span className='follow-user-profile'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" className='follow-user-img ' alt="user-img" /></span>
            <div>
              <h4 className='follow-user-name'>Adarsh Balika</h4>
              <small className='follow-username-2'>adarshbalika_14</small>
            </div>
          </div>
          <button className='follow-btn letter-spacing-1 cursor-pointer'>Follow</button>
        </div>

        <div className='flex justify-between follow-user-card'>
          <div className='flex followbar-card-inner align-center'>
            <span className='follow-user-profile'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" className='follow-user-img' alt="user-img" /></span>
            <div>
              <h4 className='follow-user-name'>Adarsh Balika</h4>
              <small className='follow-username-2'>adarshbalika_14</small>
            </div>
          </div>
          <button className='follow-btn letter-spacing-1 cursor-pointer'>Follow</button>
        </div>

      </div>
    </div>
  )
}
