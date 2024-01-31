import React from 'react'
import { FaPhoneAlt, FaChevronDown, FaUser, FaSearch } from "react-icons/fa";
import { BsBasketFill } from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6"
import logo from '../image/logo.png'
import './Nav.css'
const Nav=()=>{
    return(
        <div className='Nav'>
            <div className='container'>
                <div className='row'>
                <div className="nav-cont">
                <div className="nav-det">
                    <div className="nav-icon">
                        <FaPhoneAlt /><small>1860 123 1000</small>
                    </div>
                    <div className="nav-icon">
                        <FaLocationDot /><small>560004,Bangalore</small><FaChevronDown />
                    </div>
                    <div className="nav-icon">
                        <FaUser /><small>Login/Sign Up</small>
                    </div>
                </div>
            </div>
            <div className="nav-main">
                <div className="nav-img">
                    <img src={logo} alt="loading" />
                </div>
                <div className="nav-sea">
                    <div className="nav-seadetail">
                        <small>Search for Products..</small>
                        <div className="nav-sea-con">
                            <FaSearch className="nav-seaicon" />
                        </div>

                    </div>
                </div>
                <div className="nav-bas"  >
                    <BsBasketFill className="nav-basicon" /><small> items</small>
                </div>

            </div>
                    

                   

                </div>

                </div>
                        <div className="nav-btn">
                        <button>SHOP BY CATEGORY &nbsp;<FaChevronDown /></button>
                    </div>
            </div>

        
    )
}

export default Nav