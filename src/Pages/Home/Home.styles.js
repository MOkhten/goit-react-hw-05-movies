import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieItem = styled(Link)`
text-decoration: none;
color: black;
line-height: 1.4;
transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: #ff4500;
  }`