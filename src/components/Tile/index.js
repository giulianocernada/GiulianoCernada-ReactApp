import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
background-color: red;
width: ${props => props.primary ? '50vw' : '25vw'};
height: ${props => props.primary ? '50vh' : '50vh'};
border: 1px solid black;
`

// const Tiles = ({ title, class }) => (
// 	<Tile class={class}>{title}</Tile>
// );

export default Tile;