import React from 'react';
import styled from 'styled-components';
import Tile from '../../components/Tile/Tile';

const Tiles = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
const Tiles2 = () => (
	<Tiles>
		<Tile primary>Giuliano Cernada</Tile>
		<Tile>Hola</Tile>
		<Tile>Hola</Tile>
		<Tile>Hola</Tile>
		<Tile>Hola</Tile>
		<Tile>Hola</Tile>
		<Tile>Hola</Tile>
	</Tiles>
);

export default Tiles2;