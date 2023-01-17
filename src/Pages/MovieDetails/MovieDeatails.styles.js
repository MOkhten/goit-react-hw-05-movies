import styled from 'styled-components';

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
