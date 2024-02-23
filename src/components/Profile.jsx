import React from 'react'
import Halfcircle from './Halfcircle';
import { IoBagSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";

const Profile = () =>
{
    return (
        <div className='profile'>
            <div className='left'>
                <div className='left-content'>
                    <div className='img'>
                        <img src="images/profileSmall.jpg" alt='small profile' />
                    </div>
                    <div className='text'><b>70%</b> Vibess Match</div>
                </div>
            </div>
            <div className='right'>
                <div className='user-info'>
                    <div className='vibes'>
                        <p>(0.0 Vibes)</p>
                        <h2>4.2</h2>
                    </div>
                    <Halfcircle theme="blue" title="IQ" score={4.2} />
                    <Halfcircle theme="yellow" title="Appeal" score={4.0} />
                    <Halfcircle theme="skyBlue" title="Social" score={4.2} />
                    <Halfcircle theme="green" title="Humanity" score={3.8} />

                </div>
                <div className='userinfo1'>
                    <div className="name">Charlotte Nolan</div>
                    <div className="email">@charlottenolan888</div>
                    <div className='vibes'>Vibers: 5.3K<span className='posts'>Posts: 25</span></div>
                    <div className='follower-box'>
                        <div className="inner">
                            <h3>15</h3>
                            <p>Inner</p>
                        </div>
                        <div className="outer">
                            <h3>2.3K</h3>
                            <p>Outer</p>
                        </div>
                        <div className="universe">
                            <h3>2.3K</h3>
                            <p>Universe</p>
                        </div>
                    </div>
                    <div className="aboutUser">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vitae esse perferendis at voluptatibus.
                    </div>

                    <div className='designation'>
                        <div className='ceo'><IoBagSharp /> CEO, Ooumph</div>
                        <div className='location'><IoMdHome /> Lucknow, India</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
