import React, { Component } from 'react';
import './projects.css';
import ProjectsList from '../../assets/files/ProjectsList.json'
import ProjectsGrid from '../ProjectsGrid/ProjectsGrid'

export default class Projects extends Component {
    render(){
        const webProjects = ProjectsList.filter((project) => "Web" === project.type)
        const digitalProjects = ProjectsList.filter((project) => "Digital" === project.type)
        const analogProjects = ProjectsList.filter((project) => "Analog" === project.type)

        return (
            <React.Fragment>
                <div className="section projects-section">
                    <div className="single-page-section-container">
                        <div className="fade-in-component projects-content-section web-dev">
                            <div className="projects-section-title"><hr className='projects-title-line'/><span>Web Dev</span><hr className='projects-title-line'/></div>
                            <ProjectsGrid projects={webProjects} />
                        </div>
                    </div>
                </div>
                <div className="section projects-section">
                    <div className="single-page-section-container">
                        <div className="fade-in-component projects-content-section digital-games">
                            <div className="projects-section-title"><hr className='projects-title-line'/><span>Digital Games</span><hr className='projects-title-line'/></div>
                            <ProjectsGrid projects={digitalProjects} />
                        </div>
                    </div>
                </div>
                <div className="section projects-section">
                    <div className="single-page-section-container">
                        <div className="fade-in-component projects-content-section analog-games">
                            <div className="projects-section-title"><hr className='projects-title-line'/><span>Analog Games</span><hr className='projects-title-line'/></div>
                            <ProjectsGrid projects={analogProjects} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
