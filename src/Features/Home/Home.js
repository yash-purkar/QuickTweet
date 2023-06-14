import React from 'react'
import './Home.css'
import { Search } from '../../Components/Search/Search'
import { FollowBar } from '../../Components/FollowBar/FollowBar'
import { ContentBox } from '../../Components/ContentBox/ContentBox'
import { Navbar } from '../../Components/Navbar/Navbar'


export const Home = ({ children }) => {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='hide-on-lg'>
        <Search />
      </div>

      <ContentBox>
        {children}
      </ContentBox>
      <div className='hide-on-md'>

        <FollowBar />
      </div>
    </div>
  )
}
