import React from 'react'
import './Home.css'
import { Search } from '../../Components/Search/Search'
import { FollowBar } from '../../Components/FollowBar/FollowBar'
import { ContentBox } from '../../Components/ContentBox/ContentBox'
import { Navbar } from '../../Components/Navbar/Navbar'
import { AddPost } from '../../Components/AddPost/AddPost'
import { AddComment } from '../../Components/AddComment/AddComment'
import { SinglePost } from '../../Components/SinglePost/SinglePost'
import { HomeContent } from '../HomeContent/HomeContent'

export const Home = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='hide-on-lg'>
        <Search />
      </div>

      <ContentBox>
        <HomeContent />
      </ContentBox>
      <FollowBar />
      {/* <AddPost /> */}
      {/* <AddComment /> */}
    </div>
  )
}
