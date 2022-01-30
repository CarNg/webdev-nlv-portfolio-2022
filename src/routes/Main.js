import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Header from '../components/Header/Header'
// import About from '../components/Sections/About/About'
import Welcome from '../components/Welcome/Welcome'
// import Contact from '../components/Sections/Contact/Contact'
// import Projects from '../components/Sections/Projects/Projects'
export default class Main extends Component {
    render(){
        return (
            <React.Fragment>
                <Header />
                
                <ReactFullpage
                    anchors={['welcome']}
                    sectionsColor={['black']}
                    fitToSectionDelay={800}
                    menu={'#header-menu'}
                    slidesNavigation
                    verticalCentered
                    render={comp => (
                        <ReactFullpage.Wrapper>
                            <Welcome moveToAbout={() => comp.fullpageApi.moveSectionDown()} />
                            {/*<About moveToProjects={() => comp.fullpageApi.moveSectionDown()} />
                            <Projects />
                            <Contact /> */}
                        </ReactFullpage.Wrapper>
                    )}
                />
            </React.Fragment>
        )

    }
}