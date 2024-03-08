import React from 'react'
import './ContentBox.css'
import { Search } from '../Search/Search'
import { AddPost } from '../../Modals/AddPost/AddPost'
import { AddComment } from '../../Modals/AddComment/AddComment'
import { UseData } from '../../Contexts/DataContext'
import { useNavigate } from 'react-router'
import { EditProfile } from '../../Modals/EditProfile/EditProfile'
import { FollowDetails } from '../../Modals/FollowDetails/FollowDetails'


/*
@Info - This component takes the route component and displays that.
It shows all the models for addpost, and comment and etc.. bcz it can be done in any component.
*/

export const ContentBox = ({ children }) => {

  // It get the all user details from localstorage.
  const socialUser = JSON.parse(localStorage.getItem("socialUser"))

  // Getting the states from dataContext.
  const { searchedUserValue, setSearchedUserValue, dataState: { users, modals: { showPostModal, showCommentModal, showProfileEditModal, showFollowDetailModel } }, isDarkMode } = UseData();

  const navigate = useNavigate();

  // It filters the users based on the search value in user search bar.
  const usersBySearch = searchedUserValue && users?.filter(el => el.username !== socialUser.username && (el.firstName + el.lastName).toLowerCase().includes(searchedUserValue.toLowerCase()));

  // Redirect to user profile after clicking on search result.
  const handleSearchUserClick = (userHandler) => {
    navigate(`/user-profile/${userHandler}`)
    setSearchedUserValue("")
  }

  return (
    <>
    {/* If modals are open display them */}
      {showPostModal && <AddPost />}
      {showCommentModal && <AddComment />}
      {showProfileEditModal && <EditProfile />}
      {showFollowDetailModel && <FollowDetails />}

      <div className={`content-box-container ${isDarkMode && "bg-dark"}`}>

        <div style={{ zIndex: "1" }} className={`hide-on-md ${isDarkMode && "bg-dark"}`}>
          <Search />
        </div>
        {/* If search value is there */}
        {searchedUserValue && <div className={`searched-users ${isDarkMode && "bg-dark-light color-white"}`}>
          <ul>
            {
              usersBySearch?.map(el => {
                const { firstName, lastName, profile_photo, userHandler } = el;
                return (
                  <li key={profile_photo} className='searched-user flex align-center cursor-pointer' onClick={() => handleSearchUserClick(userHandler)}>
                    <img src={profile_photo} alt="profile" className='searched-user-profile' />
                    <span className='search-user-name letter-spacing-1'>{firstName} {lastName}</span>
                  </li>
                )
              })
            }
          </ul>
          {/* If users length is 0, means users are not there. */}
          {usersBySearch.length === 0 && <h3 className={`user-not-found letter-spacing-1 text-center ${isDarkMode && "color-white"}`}>
            User Not Found
          </h3>}
        </div>

        }

        {children}

      </div>
    </>
  )
}
