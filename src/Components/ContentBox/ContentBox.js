import React from 'react'
import './ContentBox.css'
import { Search } from '../Search/Search'
import { AddPost } from '../../Modals/AddPost/AddPost'
import { AddComment } from '../../Modals/AddComment/AddComment'
import { UseModal } from '../../Contexts/ModalContext'
import { UseData } from '../../Contexts/DataContext'
import { useNavigate } from 'react-router'
import { EditProfile } from '../../Modals/EditProfile/EditProfile'


export const ContentBox = ({ children }) => {
  const { modalState: { showPostModal, showCommentModal, showProfileEditModal } } = UseModal();

  const socialUser = JSON.parse(localStorage.getItem("socialUser"))

  const { searchedUserValue, setSearchedUserValue, dataState: { users } } = UseData();

  const navigate = useNavigate();

  const usersBySearch = searchedUserValue && users?.filter(el => el.username !== socialUser.username && (el.firstName + el.lastName).toLowerCase().includes(searchedUserValue.toLowerCase()));

  const handleSearchUserClick = (userHandler) => {
    navigate(`/user-profile/${userHandler}`)
    setSearchedUserValue("")
  }

  return (
    <>
      {showPostModal && <AddPost />}
      {showCommentModal && <AddComment />}
      {showProfileEditModal && <EditProfile />}

      <div className='content-box-container'>

        <div className='hide-on-md'>
          <Search />
        </div>
        {searchedUserValue && <div className="searched-users ">
          <ul>
            {
              usersBySearch?.map(el => {
                const { firstName, lastName, profileImage, userHandler } = el;
                return (
                  <li className='searched-user flex align-center cursor-pointer' onClick={() => handleSearchUserClick(userHandler)}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BqaiKMRdXXKaozTUZToGKHZj0LV-qlt7bTpuuVRN5A&usqp=CAU&ec=48665699" alt="profile" className='searched-user-profile' />
                    <span className='search-user-name letter-spacing-1'>{firstName} {lastName}</span>
                  </li>
                )
              })
            }
          </ul>
          {usersBySearch.length === 0 && <h3 className='user-not-found letter-spacing-1 text-center'>
            User Not Found
          </h3>}
        </div>

        }

        {children}

      </div>
    </>
  )
}
