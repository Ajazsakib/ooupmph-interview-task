import React from 'react'
import Profile from './Profile'
import SocialDetails from './SocialDetails'
import UserInfoTabs from './UserInfoTabs'

const MainContent = () =>
{
    return (
        <div className='main-content-container'>
            <Profile />
            <SocialDetails />
            <UserInfoTabs />
        </div>
    )
}

export default MainContent
