import React from 'react'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { UseData } from '../../Contexts/DataContext'
import './Explore.css'
import { useEffect } from 'react'

export const Explore = () => {
  const { dataState: { posts }, setIsLoading } = UseData();
  useEffect(() => {
    window.scrollTo(0, 0)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 400)
  }, [])
  return (
    <div className='explore-container'>
      {
        [...posts]?.reverse()?.map(post => <SinglePost key={post._id} post={post} />)
      }
    </div>
  )
}
