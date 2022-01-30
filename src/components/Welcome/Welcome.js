import React, { Component } from 'react';
import style from './Welcome.css';
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
                    <div className="section-content-wrapper welcome-content-section">
                        <img src={logo} className='welcome-logo-image'></img>
                        <div className='welcome-title'>Update coming soon...</div>
                        <div className='welcome-button-wrapper'> 
                            <a href={resume} target="_blank" rel="noopener noreferrer" className='button'>View resume</a>
                            <MediaQuery minWidth={768}>
                                <a href="mailto:hello@nightlightvisuals.com?Subject=Night%20Light%20Visuals" className='button'>Get in touch</a>
                            </MediaQuery>
                        </div>
                    </div>
                </div>

                {/* <div className="welcome-arrow-row">
                    <div className='welcome-arrow-container' onClick={() => this.props.moveToAbout() }>
                        <div className="welcome-arrow-row-arrow">
                            <div className="welcome-arrow-row-arrow-icon"></div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
