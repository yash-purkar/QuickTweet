import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import './Bookmark.css'
import { UseData } from '../../Contexts/DataContext'

export const Bookmark = () => {
  const { dataState: { posts, users } } = UseData();

  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const loggedInUser = users?.find(el => el.username === socialUser.username)

  const bookmarkPosts = posts?.filter(post => loggedInUser.bookmarks.includes(post._id))

  return (
    <div className='posts'>
      <h2 className='bookmarke-heading text-center letter-spacing-1'>{bookmarkPosts.length > 0 ? "Bookmarked" : "No Bookmarks Yet"}</h2>
      {
        bookmarkPosts?.map(post => <SinglePost key={post._id} post={post} />)
      }
    </div>
  )
}
