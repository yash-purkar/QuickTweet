import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import './Bookmark.css'

export const Bookmark = () => {
  return (
    <div className='posts'>
      <h2 className='bookmarke-heading text-center letter-spacing-1'>Bookmarked</h2>
      <SinglePost />
      <SinglePost />

    </div>
  )
}
