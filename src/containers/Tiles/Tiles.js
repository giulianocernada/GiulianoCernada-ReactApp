import React from 'react';
import styled from 'styled-components';
import Tile from '../../components/Tile/Tile';

const Tiles = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
@media (max-width: 768px) {
    flex-direction: column;
  }
`

const sections = [
	{name: 'Giuliano Cernada', color: null},
	{name: 'Proyectos', color: 'rgba(224, 156 ,158 , 0.9)'},
	{name: 'Visualización', color: 'rgba(210, 120 ,70 , 0.9)'},
	{name: 'Documentación', color: 'rgba(100, 150 ,190 , 0.9)'},
	{name: 'Fotografía', color: 'rgba(120, 140 ,80 , 0.9)'},
	{name: 'Acerca de', color: 'rgba(220, 160 ,60 , 0.9)'},
	{name: 'Contacto', color: 'rgba(170, 160 ,80 , 0.9)'},
	];

const TilesGroup = (props) => (
	<Tiles>
		{sections.map(section => {
			return section.name === 'Giuliano Cernada' ? 
			<Tile primary bgColor={section.color}>{section.name}</Tile> :
			(section.name === 'Contacto' ?
			<Tile onClick={props.clicked} bgColor={section.color}>{section.name}</Tile> :
			<Tile bgColor={section.color}>{section.name}</Tile>
			);
		})}
	</Tiles>
);

export default TilesGroup;