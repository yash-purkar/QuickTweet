import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { UseData } from '../../Contexts/DataContext'
import './Explore.css'

export const Explore = () => {
  const { dataState: { posts } } = UseData();
  return (
    <div className='explore-container'>
      {
        [...posts]?.reverse()?.map(post => <SinglePost key={post._id} post={post} />)
      }
    </div>
  )
}
