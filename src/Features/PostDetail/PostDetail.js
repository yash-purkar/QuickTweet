import React from 'react'
import './PostDetail.css'
import { useParams } from 'react-router'
import { UseData } from '../../Contexts/DataContext';
import { SinglePost } from '../../Components/SinglePost/SinglePost';

export const PostDetail = () => {
  const { postId } = useParams();
  const { dataState: { posts } } = UseData();

  const foundPost = posts?.find(post => post?.id === postId) || {};
  // console.log(foundPost)
  return (
    <div className='post-detail-container'>
      <SinglePost post={foundPost} showDetail />
    </div>
  )
}
