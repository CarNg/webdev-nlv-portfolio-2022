import React, { Component } from 'react';
import './projects-grid.css';
import MediaQuery from 'react-responsive';

export default class projectsGrid extends Component {
    render() {
        const projects = this.props.projects.map((project) => {
            return (
                <React.Fragment key={project.id} >
                    <MediaQuery minWidth={768}>
                        <div className="projects-grid-project-thumbnail" style={project.grid}></div>
                    </MediaQuery>
                    <MediaQuery maxWidth={767}>
                        <div className="projects-grid-project-thumbnail"></div>
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
