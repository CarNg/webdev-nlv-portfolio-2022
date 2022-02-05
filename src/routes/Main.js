import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Header from '../components/Header/Header'
import Welcome from '../components/Welcome/Welcome'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
// import Projects from '../components/Sections/Projects/Projects'
export default class Main extends Component {
    render(){
        return (
            <React.Fragment>
                <Header />
                
                <ReactFullpage
                    anchors={['welcome', 'about', 'contact']}
                    fitToSectionDelay={800}
                    menu={'#header-menu'}
                    slidesNavigation
                    verticalCentered
                    render={comp => (
                        <ReactFullpage.Wrapper>
                            <Welcome moveToAbout={() => comp.fullpageApi.moveSectionDown()} />
                            <About />
                            {/*<Projects />*/}
                            <Contact /> 
                        </ReactFullpage.Wrapper>
                    )}
                />
            </React.Fragment>
        )

    }
}