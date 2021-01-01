import React from 'react'
import './SidebarBottom.css'
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';

function SidebarBottom() {
        return (
                <div className='sidebarbottom'>
                        <div className='developerContact'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/4/45/GDevs.png' alt='developerContact'/>
                                <p>Developer Contact</p>
                        </div>
                        <div className='feedback_box'>
                                <FeedbackRoundedIcon className='feedbackIcon' />
                                <div className='feedback_question'>
                                <h4>Give Feedback</h4>
                                <p>Help us inprove the new Swipe.</p>
                                </div>
                        </div>
                        <div className='help_button_box'>
                                <HelpRoundedIcon className='helpIcon'/>
                                <p>Help & Support</p>
                        </div>
                        <div className='totalUser_box'>
                                <PeopleOutlineOutlinedIcon />
                                <h3>Total Users :</h3>
                                <h7>250.28M +</h7>
                        </div>

                        <div className='copiright_bio'>
                                <p>Privacy ・ Terms ・ Advartising ・ Ad Choices℠・ Cookies ・ More ・ Swipe © 2020</p>
                        </div>

                        
                </div>
        )
}

export default SidebarBottom
