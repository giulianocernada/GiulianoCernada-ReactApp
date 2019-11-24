import styled from 'styled-components';

const Tile = styled.div`
background-color: transparent;
width: 100vw;
height: ${props => props.primary ? '100vh' : '50vh'};
border: 0.25px solid rgba(198, 198, 198, 0.5);
display: flex;
align-items: center;
justify-content: center;
font-size: ${props => props.primary ? '3.5em' : '2.5em'};
font-weight: bold;
text-align: right;
text-shadow: 1px 1px 5px black;
color: #fff;
cursor: ${props => props.primary ? 'auto' : 'pointer'};
box-sizing: border-box;
padding: 20px;
user-select: none;
transition: background-color 0.5s;
text-align: ${props => props.primary ? 'left' : 'right'};

&:hover {
    background-color: ${props => props.bgColor};
}

@media (min-width: 720px) {
	padding: 50px;
	font-size: ${props => props.primary ? '10em' : '24px'};
}

@media (min-width: 1024px) {
    width: ${props => props.primary ? '50vw' : '25vw'};
	height: 50vh;
	align-items: flex-end;
	justify-content: ${props => props.primary ? 'flex-start' : 'flex-end'};
	padding: 50px;
	font-size: ${props => props.primary ? '3em' : '1.5em'};
}
`

export default Tile;