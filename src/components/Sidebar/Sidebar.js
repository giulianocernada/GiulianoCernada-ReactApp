import React from 'react';
import styled from 'styled-components';

const Side = styled.div`
    position: fixed;
    width: 25vw;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 200;
    background: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%);
    color: #000;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.5s ease-out;
    transform: ${props => props.open === true ? 'translateX(0)' : 'translateX(100%)'};
    cursor: pointer;
`

const Sidebar = (props) => {
	return (
		<Side open={props.open}>
			<div onClick={props.closed}><a>Cerrar</a></div>
			<div><h1>Contacto</h1></div>
            <ul>
                <li><p>Tel: +54 11 5690 2009</p></li>
                <a href="mailto:cigimax.info@gmail.com"><li>cigimax.info@gmail.com</li></a>
                <div>
                <a target='_blank' href="https://www.facebook.com/Cigimax-Render-414819245954070/"><li>Facebook</li></a>
                <a target='_blank' href="https://www.instagram.com/cigimax/"><li>Instagram</li></a>
                <a target='_blank' href="https://github.com/giulianocernada"><li>GitHub</li></a>
                <a target='_blank' href="https://twitter.com/CernadaGiuliano"><li>Twitter</li></a>
                </div>
            </ul>
		</Side>
	)	
}

export default Sidebar;