import React from 'react';
import styled from 'styled-components';

const Side = styled.div`
    position: fixed;
    width: 100vw;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 200;
    background: linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%);
    color: #000;
    padding-top: 60px;
    box-sizing: border-box;
    transition: transform 0.5s ease-out;
    transform: ${props => props.open === true ? 'translateX(0)' : 'translateX(100%)'};
    user-select: none;

    ul {
        list-style: none;
        padding: 0 0 0 30px;
    }

    a {
        text-decoration: none;
    }

    li {
        text-decoration: none;
        color: #111;
        font-family: 'Roboto';
        font-size: 20px;
    }

    .title {
        padding: 0 0 0 30px;
        border-top: 1px solid gray;
    }

    .mail {
        margin: 20px 0;
    }

    .close {
        cursor: pointer;
        text-align: right;
        padding: 0 30px;
        font-family: 'Roboto';
        font-size: 20px;
    }

    @media (min-width: 768px) {
        width: 50vw;
    }

    @media (min-width: 1024px) {
        width: 25vw;
    }
`

const Sidebar = (props) => {
	return (
		<Side open={props.open}>
			<div onClick={props.closed}><div className='close'>Cerrar</div></div>
			<div className='title'><h2>Contacto</h2></div>
            <ul>
                <li><p>Tel: +54 11 5690 2009</p></li>
                <a href="mailto:cigimax.info@gmail.com"><li className='mail'>cigimax.info@gmail.com</li></a>
                <div>
                <a 
                    target='_blank' 
                    href="https://www.facebook.com/Cigimax-Render-414819245954070/"
                    rel="noopener noreferrer">
                    <li>Facebook</li>
                </a>
                <a 
                    target='_blank' 
                    href="https://www.instagram.com/cigimax/"
                    rel="noopener noreferrer">
                    <li>Instagram</li>
                </a>
                <a 
                    target='_blank' 
                    href="https://github.com/giulianocernada" 
                    rel="noopener noreferrer">
                    <li>GitHub</li>
                </a>
                <a 
                    target='_blank' 
                    href="https://twitter.com/CernadaGiuliano" 
                    rel="noopener noreferrer">
                    <li>Twitter</li>
                </a>
                </div>
            </ul>
		</Side>
	)	
}

export default Sidebar;