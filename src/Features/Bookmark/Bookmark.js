import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import './Bookmark.css'
import { UseData } from '../../Contexts/DataContext'

export const Bookmark = () => {
  const { dataState: { posts, bookmarksIDs } } = UseData();

  const bookmarkPosts = posts?.filter(post => bookmarksIDs.some(el => el === post._id))
  return (
    <div className='posts'>
      <h2 className='bookmarke-heading text-center letter-spacing-1'>Bookmarked</h2>
      {
        bookmarkPosts?.map(post => <SinglePost key={post._id} post={post} />)
      }
    </div>
  )
}
