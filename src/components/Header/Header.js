import React from 'react';
import MediaQuery from 'react-responsive';
import HamburgerMenu from 'react-hamburger-menu';
//CSS
import './header.css';

class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			isOpen: false
		}
    }

    handleClick(){
		let open = this.state.isOpen;
        this.setState({
			isOpen: !open
		});
    }

  	render(){
		const menuOpen = {height: "100%"};
		const menuClose = {height: "0%"};

		return (
			<header>
				<MediaQuery minWidth={768}>
					<ul id="header-menu" className="header-links-wrapper fade-in-component">
						<li data-menuanchor="about" className='header-link'><a href="#about">About</a></li>
						<li data-menuanchor="web-dev" className='header-link'><a href="#web-dev">Web Dev</a></li>
						<li data-menuanchor="digital-games" className='header-link'><a href="#digital-games">Digital Games</a></li>
						<li data-menuanchor="analog-games" className='header-link'><a href="#analog-games">Analog Games</a></li>
						<li data-menuanchor="contact" className='header-link'><a href="#contact">Contact</a></li>
					</ul>
				</MediaQuery>

				<MediaQuery maxWidth={767}>
					<div className='header-overlay' style={this.state.isOpen ? menuOpen : menuClose}>
						<ul id="header-menu" className='header-overlay-content'>
							<li data-menuanchor="about" className='header-link'><a href="#about" onClick={this.handleClick.bind(this)}>About</a></li>
							<li data-menuanchor="web-dev" className='header-link'><a href="#web-dev">Web Dev</a></li>
							<li data-menuanchor="digital-games" className='header-link'><a href="#digital-games">Digital Games</a></li>
							<li data-menuanchor="analog-games" className='header-link'><a href="#analog-games">Analog Games</a></li>
							<li data-menuanchor="contact" className='header-link'><a href="#contact" onClick={this.handleClick.bind(this)}>Contact</a></li>
						</ul>
					</div>

					<div className="header-container">
						<div id='burger-menu' className={this.state.isOpen ? '' : 'closed'}>
							<HamburgerMenu
								isOpen={this.state.isOpen}
								menuClicked={this.handleClick.bind(this)}
								width={22}
								height={18}
								strokeWidth={2}
								rotate={0}
								color='var(--nlv-white)'
								borderRadius={0.5}
								animationDuration={0.8}
							/>
						</div>
					</div>
				</MediaQuery>
			</header>
	  );
	}
}

export default Header;
