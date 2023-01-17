import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCard = styled.div`
display:flex;`

export const BtnArrow = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 20px 0;
  text-decoration: none;
  border: transparent;
  background-color: white;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: #ff4500;
  }
`;

export const Poster = styled.img`
width: 320px;
  border-radius: 5px;`

export const MovieDescription = styled.div`
  margin-left: 30px;`

  export const InfoTitle = styled.h2`
  font-weight: 700;
  color: #ff4500;
`;

export const Info = styled.span`
  font-weight: 400;
  color: #000000;
`;

export const EditionalInfo = styled.div`
display: block;
margin: 15px 0;
  padding: 0 16px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;`

  export const MovieLink = styled(Link)`
text-decoration: none;
color: black;
line-height: 1.4;
margin-bottom: 35px;
transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: #ff4500;
  }`