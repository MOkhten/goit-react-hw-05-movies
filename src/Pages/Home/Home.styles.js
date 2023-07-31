import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieItem = styled(Link)`
text-decoration: none;
color: black;
line-height: 1.4;
transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: #ff4500;
  }`;

export const Item = styled.li`
  
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 5px; 
  border-radius: 5px;
  transition: all 500ms cubic-bezier(0, 0, 0.2, 1) 0ms;
/* box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6); */
  &:hover{
    /* background-color: #000;
    color: #FFF; */
    box-shadow: 0px 8px 43px rgba(255, 107, 1, 0.6);
    transform: scale(1.04);
}

`;

export const List = styled.ul`
 margin-top: 20px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
    flex-wrap: wrap;
    gap: 16px;
    @keyframes rotateY {
  0% {
    transform: perspective(400px) rotateY(0deg);
  }

  100% {
    transform: perspective(400px) rotateY(15deg);
  }
} 
`;

export const Img = styled.img`

  height: 400px;
  min-width: 250px;
  width: 100%;
    margin-bottom: 10px;
  border-radius: 5px;
  
  
    `