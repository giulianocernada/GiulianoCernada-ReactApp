import React, { Component } from 'react';
import styled from 'styled-components';
import Tiles from '../Tiles/Tiles';
import Sidebar from '../../components/Sidebar/Sidebar';
import BackgroundImage from '../../assets/BG.jpg';

const Landing = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${BackgroundImage});
background-size: cover;
background-position: center;
position: relative;

@media (min-width: 720px) {

}
`

// MEDIA QUERIES: 0-320, 320-720, 720-1024

class LandingPage extends Component {
	state = {
		showSidebar: false
	}

	SidebarClosedHandler = () => {
		this.setState({showSidebar: false});
	}

	SidebarToggleHandler = () => {
		this.setState((prevState) =>{
			return {showSidebar: !prevState.showSidebar}
		});
	}

	render(){
		return (
			<Landing>
				<Tiles 
					clicked={this.SidebarToggleHandler}/>
				<Sidebar 
					open={this.state.showSidebar}
					closed={this.SidebarClosedHandler} />
			</Landing>
		)
	}
}

export default LandingPage;