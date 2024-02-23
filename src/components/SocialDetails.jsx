import React, { useState } from 'react'
import SocialDetailBox from './SocialDetailBox'
import { FaPeopleLine } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { FaHands } from "react-icons/fa";
import { FaHandRock } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const socialData = [
    {
        id: 1,
        title: "People",
        isActive: true,
        icon: FaPeopleLine,
    },
    {
        id: 2,
        title: "Content",
        isActive: false,
        icon: MdContentCopy,
    },
    {
        id: 3,
        title: "Community",
        isActive: false,
        icon: FaHands,
    },
    {
        id: 4,
        title: "Other",
        isActive: false,
        icon: FaHandRock,
    },
    {
        id: 5,
        title: "Diary",
        isActive: false,
        icon: FiEdit,
    },

]

const SocialDetails = () =>
{
    const [socialDetails, setSocialDetails] = useState(socialData)

    const handleActiveBox = (id) =>
    {
        const updatedDetails = socialDetails.map((item) =>
        {
            if (item.id === id) {
                item.isActive = true
            }
            else {
                item.isActive = false
            }
            return item
        })

        setSocialDetails(updatedDetails)
    }

    return (
        <div className='social-details'>


            {
                socialDetails.length > 0 && socialDetails.map((item) =>
                {
                    const IconComponent = item.icon;
                    return (
                        <>
                            <SocialDetailBox icon={<IconComponent />} title={item.title} isActive={item.isActive} id={item.id} handleActiveBox={handleActiveBox} />
                        </>
                    )
                })
            }
        </div>
    )
}

export default SocialDetails
