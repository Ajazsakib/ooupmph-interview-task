import React from 'react';

const SocialDetailBox = ({ icon, title, isActive, id, handleActiveBox }) =>
{

    return (
        <div className={`social-details-box ${isActive ? "darkBg" : ""}`} onClick={() =>
        {
            handleActiveBox(id)
        }}>
            <div className='icons'>{icon}</div>
            <div className="text">{title}</div>
        </div>
    )
}

export default SocialDetailBox
