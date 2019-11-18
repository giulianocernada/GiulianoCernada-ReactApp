import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
background-color: red;
width: ${props => className === 'primary' ? '50vw' : '25vw'};
height: ${props => props.type ? '50vh' : '50vh'};
border: 1px solid black;
`

const Tiles = (props) => (
	<Tile className={this.holis}>{props.children}</Tile>
);

export default Tiles;