import React, { Component } from 'react';
import './projects-grid.css';
import MediaQuery from 'react-responsive';

export default class projectsGrid extends Component {
    render() {
        const projects = this.props.projects.map((project) => {
            //Project blurb 
            const blurbObj = project.projectBlurb;
            const blurb = Object.keys(blurbObj).map(function(key) {
                return [key, blurbObj[key]];
            }).map((keyItem, index) => {
                return (
                    <React.Fragment key={index}>
                        <span className='key'>{keyItem[0] + ' '}</span>
                        <span>{keyItem[1]}</span>
                        <br />
                    </React.Fragment>
                )
            });

            return (
                <React.Fragment key={project.id} >
                    <MediaQuery minWidth={768}>
                        <div className="projects-grid-project-thumbnail" style={{...project.grid, ...project.background}}>
                            <div className="projects-grid-project-info-mask" style={project.grid}>
                                <div className='projects-grid-project-info-title'>{project.title}</div>
                                <div className='projects-grid-project-info-role'>{project.roleShort}</div>
                                <div className='projects-grid-project-info-blurb'>{blurb}</div>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={767}>
                        <div className="projects-grid-project-thumbnail" style={project.background}></div>
                    </MediaQuery>
                </React.Fragment>
            )
        })

        return (
            <React.Fragment>
                <div className="projects-grid-section-wrapper">
                    <div className="projects-grid-container">
                        { projects }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
