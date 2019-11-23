import React from 'react';
import styled from 'styled-components';

const Side = styled.div`
height: 100vh;
width: 25vw;
background-color: ${props => props.hola ? 'blue' : 'red'};
`

const Sidebar = (props) => {
	// let attachedClasses = [classes.SideNav, classes.Close];
 //    if (props.open) {
 //        attachedClasses = [classes.SideNav, classes.Open];
 //    }

	return (
			// <div className={attachedClasses.join(' ')}>
		<Side>
			<h1>hola</h1>
		</Side>
	)	
}

export default Sidebar;