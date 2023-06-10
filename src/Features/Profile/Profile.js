import React from 'react'
import './Profile.css'
export const Profile = () => {
  return (
    <div >
      <div className="profile-container flex ">
        <img src="https://cdn.discordapp.com/attachments/1053315364529897542/1112418853788586185/IMG20230508091622.png" alt="profile" className='profile-img' />

        <div className='profile-info'>

          <div className='flex justify-between align-center profile-name-info'>
            <div>
              <h2 className='profile-user-name letter-spacing-1'>Arjun</h2>
              <p className='user-name-2 letter-spacing-1'>@arjun1221</p>
            </div>
            <button className='edit-profile-btn letter-spacing-1 cursor-pointer'>Edit</button>
          </div>

          <p className='letter-spacing-1 user-profile-status'>An Aspiring Web Developer🚀</p>

          <a href="https://yashpurkar-portfolio.netlify.app/" className='user-portfolio-link letter-spacing-1' target='_blank' rel='noreferrer'>https://yashpurkar-portfolio.netlify.app/</a>

          <div className='flex follow-details letter-spacing-1 justify-between'>
            <p><span className='font-bold'>13</span> Posts</p>
            <p><span className='font-bold'>50</span> Followers</p>
            <p><span className='font-bold'>10</span> Following</p>
          </div>

        </div>

      </div>
    </div>
  )
}
