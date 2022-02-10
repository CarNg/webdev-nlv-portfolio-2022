import React, { Component } from 'react';
import './projects-grid.css';

export default class projectsGrid extends Component {
    render() {
        const projects = this.props.projects.map((project) => {
            return (
                <React.Fragment key={project.id} >
                    <div className="projects-grid-project-thumbnail" style={project.grid}></div>
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
