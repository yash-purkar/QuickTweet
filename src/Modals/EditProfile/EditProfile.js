import React from 'react'
import './EditProfile.css'
import { UseModal } from '../../Contexts/ModalContext'
import { UseData } from '../../Contexts/DataContext'
import { useState } from 'react'
import { AiFillCamera } from 'react-icons/ai'
import { editUserHandler } from '../../Services/UserServices'

export const EditProfile = () => {
  const { modalDispatch } = UseModal();
  const { dataState: { users }, dataDispatch } = UseData();

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));

  const loggedInUser = users?.find(user => user.username === socialUser.username);

  const [editedData, setEditedData] = useState({
    profile_photo: loggedInUser?.profile_photo,
    link: loggedInUser?.link,
    bio: loggedInUser?.bio

  })

  const { profile_photo, link, bio } = editedData;

  const socialToken = localStorage.getItem("socialToken")

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prev => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e) => {
    console.log(e.target.value, "image")
    const selectedImg = e.target.files[0];
    setEditedData((prev) => ({ ...prev, profile_photo: URL.createObjectURL(selectedImg) }))
  }

  const handleUpdateClick = () => {
    editUserHandler(editedData, socialToken, dataDispatch);
    modalDispatch({ type: "HIDE_PROFILE_EDIT_MODAL" })

  }

  const handleCancel = () => {
    modalDispatch({ type: "HIDE_PROFILE_EDIT_MODAL" })
  }

  return (

    <div className='edit-profile-main'>
      <div className='edit-profile-container'>
        <div className='edit-profile-inner-container'>

          <div className="input-file-container flex align-center">

            <span className='profile-text'>Profile</span>

            <label for="file-upload" className="btn-upload cursor-pointer flex align-center letter-spacing-1">
              <img src={profile_photo} alt="" width="200" className='edit-profile-icon' />
              <span className='edit-profile-camera-icon'><AiFillCamera /></span>
            </label>
            <input id="file-upload" type="file" onChange={handleImageUpload} />

          </div>

          <label htmlFor="" className='link-box flex'>
            <span className='link-text'>Link</span>
            <input type="text" className='link-input letter-spacing-1' name="link" onChange={handleChange} value={link} />
          </label>

          <label htmlFor="" className='flex'>
            Bio
            <textarea id="" className='edit-bio-textarea letter-spacing-1' placeholder='Edit' name="bio" onChange={handleChange} value={bio}>
            </textarea>
          </label>


          <div className='flex justify-end'>

            <button onClick={handleUpdateClick} className='update-btn cursor-pointer' >Update</button>

            <button onClick={handleCancel} className='cancel-btn cursor-pointer'>Cancel</button>
          </div>


        </div>
      </div>
    </div>
  )
}
