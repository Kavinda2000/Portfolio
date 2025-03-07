import React from 'react'
import './Menu.css'
import profile from '../Pictures/image1.jpg'
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcBriefcase } from "react-icons/fc";
import { FcInspection } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcApprove } from "react-icons/fc";


const Menu = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <>
        <div className='navbar-profile-pic'>
            <img src={profile} alt="Profile Pic"/>
        </div>
        <div className='nav-items'>
            <div className='nav-item'>
                <div  className='nav-link'>
                    <FcHome/>
                    Home
                </div>
                <div  className='nav-link'>
                    <FcAbout/>
                    About
                </div>
                <div  className='nav-link'>
                    <FcGraduationCap/>
                    Education
                </div>
                <div  className='nav-link'>
                    <FcApprove/>
                    Skills
                </div>
                <div  className='nav-link'>
                    <FcInspection/>
                    Projects
                </div>
                <div  className='nav-link'>
                    <FcBriefcase/>
                    Work Experience
                </div>
                <div  className='nav-link'>
                    <FcVoicePresentation/>
                    Contact
                </div>
            </div>
        </div>
        </>
    ) : (
        <>
          <div className='nav-items'>
            <div className='nav-item'>
                <div  className='nav-link'>
                    <FcHome title='Home'/>
                    
                </div>
                <div  className='nav-link'>
                    <FcAbout title='About'/>
                    
                </div>
                <div  className='nav-link'>
                    <FcGraduationCap title='Education'/>
                    
                </div>
                <div  className='nav-link'>
                    <FcInspection title='Projects'/>
                    
                </div>
                <div  className='nav-link'>
                    <FcBriefcase title='Work Experience'/>
                     
                </div>
                <div  className='nav-link'>
                    <FcVoicePresentation title='Contact'/>
                    
                </div>
            </div>
        </div>  
        </>
    )}




    </>
  )
}

export default Menu