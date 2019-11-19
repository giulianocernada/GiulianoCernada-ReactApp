import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
background-color: transparent;
width: ${props => props.primary ? '50vw' : '25vw'};
height: ${props => props.primary ? '50vh' : '50vh'};
border: 1px solid rgba(198, 198, 198, 0.5);
display: flex;
align-items: center;
justify-content: flex-end;
font-size: 24px;
text-shadow: 1px 1px 5px black;
color: #fff;
cursor: pointer;
box-sizing: border-box;
padding: 50px;
transition: background-color 0.5s;

&:hover {
    background-color: palevioletred;
}
`

export default Tile;