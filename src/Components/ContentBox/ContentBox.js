import React from 'react'
import './ContentBox.css'
import { Search } from '../Search/Search'
import { AddPost } from '../../Modals/AddPost/AddPost'
import { AddComment } from '../../Modals/AddComment/AddComment'
import { UsePost } from '../../Contexts/PostContext'


export const ContentBox = ({ children }) => {
  const { postState: { showPostModel, showCommentModel } } = UsePost();
  return (
    <>
      {showPostModel && <AddPost />}
      {showCommentModel && <AddComment />}
      <div className='content-box-container'>

        <div className='hide-on-md'>
          <Search />
        </div>

        {children}

      </div>
    </>
  )
}
