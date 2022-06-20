import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const NameOfCategory = styled.div<{ selected: boolean }>`
  height: 55px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  margin-right: 25px;

  &: hover {
    color: #5ECE7B;
    border-bottom: 2px solid #5ECE7B;
    cursor: pointer;
  }

  ${({selected}) => selected && `
    color: #5ECE7B;
    border-bottom: 2px solid #5ECE7B;
  `}
`;