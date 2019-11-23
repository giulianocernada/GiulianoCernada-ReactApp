import React from 'react';
import styled from 'styled-components';

const Side = styled.div`
height: 100vh;
width: 25vw;
background-color: ${props => props.shown ? 'blue' : 'red'};
`

const Sidebar = () => {
	return (
		<Side shown>
			<h1>hola</h1>
		</Side>
	)	
}

export default Sidebar;