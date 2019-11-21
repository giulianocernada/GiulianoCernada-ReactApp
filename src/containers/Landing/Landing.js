import React from 'react';
import styled from 'styled-components';
import Tiles from '../Tiles/Tiles';
import BackgroundImage from '../../assets/BG.jpg';

const Landing = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${BackgroundImage});
background-size: cover;
background-position: center;
`

const LandingPage = () => {
	return (
		<Landing>
			<Tiles />
		</Landing>
	)
}

export default LandingPage;