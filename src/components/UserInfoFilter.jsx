import React from 'react'

const UserInfoFilter = ({ userInfoContentState, userInfoFilter }) =>
{
    return (
        <>
            {
                userInfoContentState && userInfoContentState.map((item, index) => (
                    userInfoFilter[index] ? (
                        <div className="filterBox" key={item.id}>
                            <div className="img">
                                <img src={item.image} alt={`User ${item.id}`} />
                            </div>
                            <div className='text'>{userInfoFilter[index]}</div>
                        </div>
                    ) : null
                ))
            }

        </>

    )
}

export default UserInfoFilter
