import React from 'react'

const UserInfoContent = ({ userInfoContentState }) =>
{
    return (
        <div className='image-container'>
            {
                userInfoContentState && userInfoContentState.map((item) =>
                {
                    return (
                        <div className="images">
                            <img src={item.image} alt={item.image} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserInfoContent
