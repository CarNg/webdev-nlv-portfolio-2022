import React, { Component } from 'react';
import './about.css';
import resume from '../../assets/files/CarmenNgResume.pdf'


export default class About extends Component {
    render(){
        const date = new Date();
        const year = date.getFullYear() - 2016;

        return (
            <div className="section about-section">
                 <div className="single-page-section-container">
                    <div className="fade-in-component about-content-section">
                        <div className='about-photo-wrapper'>
                            <div className='about-profile-photo'></div>
                        </div>
                        <div className='about-blurb'>
                                <span className='about-blurb-introduction'>
                                    Hi, I'm Carmen!
                                </span> 
                                I'm a front-end developer with over {year} years of experience.
                                My visual communications background has also allowed me to communicate and work closely with UI/UX teams.
                                <br/><br/>
                                I'm also an avid board game player and game designer so you'll find some of my game projects here too.
                                I'm always eager to learn new skills and gain more experience so stay tuned while I continue to grow my portfolio.
                        </div>
                        <a className="button about-button" href={resume} target="_blank" rel="noopener noreferrer">
                            view resume
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
