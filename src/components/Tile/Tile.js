import styled from 'styled-components';

const Tile = styled.div`
background-color: transparent;
width: ${props => props.primary ? '50vw' : '25vw'};
height: ${props => props.primary ? '50vh' : '50vh'};
border: 0.25px solid rgba(198, 198, 198, 0.5);
display: flex;
align-items: flex-end;
justify-content: ${props => props.primary ? 'flex-start' : 'flex-end'};
font-size: ${props => props.primary ? '48px' : '24px'};
font-weight: bold;
text-shadow: 1px 1px 5px black;
color: #fff;
cursor: ${props => props.primary ? 'auto' : 'pointer'};
box-sizing: border-box;
padding: 50px;
user-select: none;
transition: background-color 0.5s;
text-align: ${props => props.primary ? 'left' : 'right'};

&:hover {
    background-color: ${props => props.bgColor};
}
`

export default Tile;