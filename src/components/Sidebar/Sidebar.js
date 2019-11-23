import React from 'react';
import styled from 'styled-components';

const Side = styled.div`
    position: fixed;
    width: 25vw;
    max-width: 80%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 200;
    background: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%);
    color: white;
    text-shadow: 1px 1px 5px black;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.5s ease-out;
    transform: ${props => props.open === true ? 'translateX(0)' : 'translateX(100%)'};
    cursor: pointer;
`

const Sidebar = (props) => {
	return (
		<Side open={props.open}>
			<div onClick={props.closed}>Cerrar</div>
			<h1>{props.title}</h1>
		</Side>
	)	
}

export default Sidebar;