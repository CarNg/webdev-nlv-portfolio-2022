import React, { Component } from 'react';
import './contact.css';
import MediaQuery from 'react-responsive';

import contactYoutube from '../../assets/images/contactYoutube.png';
import contactLinkedIn from '../../assets/images/contactLinkedIn.png';
import contactItch from '../../assets/images/contactItch.png';
import contactGithub from '../../assets/images/contactGithub.png'

export default class Welcome extends Component {
    render(){
        return (
            <div className="section contact-section">
                 <div className="single-page-section-container">
                    <div className="fade-in-component contact-content-section">
                        <div className='contact-top-section'>
                            <MediaQuery minWidth={768}>
                                <div className='contact-title'>Got a question or want to work together?</div>
                            </MediaQuery>
                            <div className='contact-email'>
                                Email me at <a href="mailto:hello@nightlightvisuals.com?Subject=Night%20Light%20Visuals">
                                <MediaQuery maxWidth={767}><br/></MediaQuery>
                                    hello@nightlightvisuals.com
                                </a>
                            </div>
                        </div>
                        <span className='contact-social-title'>You can also find me at:</span>
                        <MediaQuery minWidth={768}>
                            <div className='contact-social-row'>
                                <a className="contact-social-row-link left-side" href="https://github.com/CarNg/" target="_blank" rel="noopener noreferrer" >
                                    <span>Github for code things</span>
                                    <img className="contact-social-row-image" alt="Github Icon" src={contactGithub} />
                                </a>
                                <a className="contact-social-row-link" href="https://nightlightvisuals.itch.io/" target="_blank" rel="noopener noreferrer" >
                                    <img className="contact-social-row-image" alt="Itch Icon" src={contactItch} />
                                    <span>Itch.io for game things</span>
                                </a>
                            </div>
                            <div className='contact-social-row'>
                                <a className="contact-social-row-link left-side" href="https://www.linkedin.com/in/carng" target="_blank" rel="noopener noreferrer" >
                                    <span>LinkedIn for career things</span>
                                    <img className="contact-social-row-image" alt="LinkedIn Icon" src={contactLinkedIn} />
                                </a>
                                <a className="contact-social-row-link" href="https://www.youtube.com/channel/UCVcdn5DAeuBsahRK4Gk5XmA" target="_blank" rel="noopener noreferrer" >
                                    <img className="contact-social-row-image" alt="YouTube Icon" src={contactYoutube} />
                                    <span>YouTube for video things</span>
                                </a>
                            </div>
                        </MediaQuery>
                        <MediaQuery maxWidth={767}>
                            <div className='contact-social-row'>
                                <a className="contact-social-row-link" href="https://github.com/CarNg/" target="_blank" rel="noopener noreferrer" >
                                    <img className="contact-social-row-image" alt="Github Icon" src={contactGithub} />
                                    <span>Github for code things</span>
                                </a>
                            </div>
                            <div className='contact-social-row'>
                                <a className="contact-social-row-link" href="https://nightlightvisuals.itch.io/" target="_blank" rel="noopener noreferrer" >
                                    <img className="contact-social-row-image" alt="Itch Icon" src={contactItch} />
                                    <span>Itch.io for game things</span>
                                </a>
                            </div>
                            <div className='contact-social-row'>
                                <a className="contact-social-row-link" href="https://www.linkedin.com/in/carng" target="_blank" rel="noopener noreferrer" >
                                    <img className="contact-social-row-image" alt="LinkedIn Icon" src={contactLinkedIn} />
                                    <span>LinkedIn for career things</span>
                                </a>
                            </div>
                            <div className='contact-social-row'>
                                <a className="contact-social-row-link" href="https://www.youtube.com/channel/UCVcdn5DAeuBsahRK4Gk5XmA" target="_blank" rel="noopener noreferrer" >
                                    <img className="contact-social-row-image" alt="YouTube Icon" src={contactYoutube} />
                                    <span>YouTube for video things</span>
                                </a>
                            </div>
                        </MediaQuery>
                    </div>
                </div>
            </div>
        )
    }
}
