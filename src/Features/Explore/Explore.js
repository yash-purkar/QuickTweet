import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { UseData } from '../../Contexts/DataContext'

export const Explore = () => {
  const { dataState: { posts } } = UseData();
  return (
    <div className='posts'>
      {
        [...posts]?.reverse()?.map(post => <SinglePost key={post._id} post={post} />)
      }
    </div>
  )
}
