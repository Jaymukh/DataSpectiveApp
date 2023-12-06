import React from 'react'
import '../App.css'
import Logo from '../images/DataSpectiv.png'
import { useNavigate } from 'react-router-dom';
import { RouteConstants } from '../constants';
import * as Data from '../data/Data';
import { CiGlobe } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";

const Header = ({isScrolled}) => {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate(RouteConstants.home);
    };
    const handleLoginClick = () => {
        navigate(RouteConstants.login);
    };
    const handleClickMenuItem = (event, route) => {
        navigate(RouteConstants[route]);
    };

    return (
        <div className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="secondary-nav">
                <ul>
                    <li><CiGlobe fontSize={14} className='me-1 my-0' />English</li>
                    <li>Contact</li>
                    <li>Newsletter</li>
                    <li>
                        {/* <SlSocialInstagram className='social-icon' /> */}
                        <TiSocialInstagram className='social-icon' />
                        <TiSocialFacebook className='social-icon' />
                        <TiSocialTwitter className='social-icon' />
                        <TiSocialLinkedin className='social-icon' />
                    </li>
                </ul>
            </div>
            <div className="main-nav">
                <ul>
                    <li><img src={Logo} alt="logo" className='logo' onClick={handleLogoClick} /></li>
                    {Data.accountMenuItems.map((item) => (
                        <li
                            key={item.key}
                            onClick={(event) => handleClickMenuItem(event, (item.text)?.toLowerCase())}
                        >
                            <a href={item.id}>{item.text}</a>
                            {/* <span id={item.id}></span> */}
                        </li>
                    ))}
                </ul>
                <button className='green-button me-4 p-2' onClick={handleLoginClick} >
                    Login/Register
                </button>
            </div>
        </div>

    )
}

export default Header