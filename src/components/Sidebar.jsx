import React from 'react';
import { FaPlus } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const Sidebar = ({ showSideBar, handleSideBar, handleCloseSidebar }) =>
{

    return (
        <>

            <div className="sidebar">
                <IoCloseSharp className='close-sidebar' onClick={handleCloseSidebar} />
                <div className='logo'>
                    <img src="images/logo.png" alt='logo' />
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <span><FaPlus />PLUS</span>
                        </li>
                        <li>
                            <span><CiHome />Home</span>
                        </li>
                        <li>
                            <span><IoMdSearch />Search</span>
                        </li>
                        <li>
                            <span><FaRegEnvelope />Messages</span>
                        </li>
                        <li>
                            <span><IoMdNotificationsOutline />Notifications</span>
                        </li>
                        <li className='profile-info'>
                            <span className='img'>
                                <img src="images/profileSmall.jpg" alt='small profile' />
                            </span>
                            <span className='text'>
                                <span className='text-heading'>Profile</span>
                                <span className='text-desc'><b>Repo</b>999k</span>
                            </span>
                        </li>
                        <li>
                            <span><GiHamburgerMenu />Settings</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
