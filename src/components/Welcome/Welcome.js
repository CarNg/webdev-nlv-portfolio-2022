import React, { Component } from 'react';
import './welcome.css';
import logo from '../../assets/images/landingLogo.png'
import videoBkd from '../../assets/videos/WelcomeBkd.mp4'
import resume from '../../assets/files/CarmenNgResume.pdf'
import MediaQuery from 'react-responsive';

export default class Welcome extends Component {
    render(){
        return (
            <div className="section">
                <video id="welcome-bkd-video" autoPlay="autoPlay" loop muted data-autoplay>
                    <source src={videoBkd} type="video/mp4" />
                </video>

                <div className="single-page-section-container welcome-section">
                    <div className="fade-in-component welcome-content-section">
                        <img src={logo} className='welcome-logo-image'></img>
                        <div className='welcome-title'>Web Developer / Game Designer</div>
                    </div>
                </div>

                <div className="welcome-arrow-row fade-in-component">
                    <div className='welcome-arrow-container' onClick={() => this.props.moveToAbout() }>
                        <div className="welcome-arrow-row-arrow">
                            <div className="welcome-arrow-row-arrow-icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
