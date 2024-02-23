import React, { useState } from 'react';
import { FaHandSparkles } from "react-icons/fa";
import { AiOutlineFunnelPlot } from "react-icons/ai";
import { FaPeopleArrows } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import UserInfoContent from './UserInfoContent';
import UserInfoFilter from './UserInfoFilter';
import { userInfoTruthData, userInfoDebateData, userInfoFunData, userInfoOpportunityData, userInfoFilter } from './data';

const UserInfoTabs = () =>
{
    const [userInfoContentState, setUserInfoContentState] = useState(userInfoTruthData);
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (id) =>
    {
        setActiveTab(id)
        if (id == 1) {
            setUserInfoContentState(userInfoTruthData)
        }
        if (id == 2) {
            setUserInfoContentState(userInfoFunData)
        }
        if (id == 3) {
            setUserInfoContentState(userInfoDebateData)
        }
        if (id == 4) {
            setUserInfoContentState(userInfoOpportunityData)
        }
    }



    return (
        <>
            <div className='tab-menu'>
                <div className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() =>
                {
                    handleTabChange(1)
                }}>
                    <div className='icon'><FaHandSparkles /></div>
                    <div className='text'>Truth</div>
                </div>
                <div className={`tab ${activeTab === 2 ? 'active' : ''}`} onClick={() =>
                {
                    handleTabChange(2)
                }}>
                    <div className='icon'><AiOutlineFunnelPlot /></div>
                    <div className='text'>Fun</div>
                </div>
                <div className={`tab ${activeTab === 3 ? 'active' : ''}`} onClick={() =>
                {
                    handleTabChange(3)
                }}>
                    <div className='icon'><FaPeopleArrows /></div>
                    <div className='text'>Debate</div>
                </div>
                <div className={`tab ${activeTab === 4 ? 'active' : ''}`} onClick={() =>
                {
                    handleTabChange(4)
                }}>
                    <div className='icon'><GoInfo /></div>
                    <div className='text'>Opportunity</div>
                </div>
            </div>


            <div className="userInfoFilter">
                <UserInfoFilter userInfoContentState={userInfoContentState} userInfoFilter={userInfoFilter} />
            </div>

            <div className='tab-content-container'>
                <UserInfoContent userInfoContentState={userInfoContentState} />
            </div>

        </>
    )
}

export default UserInfoTabs
