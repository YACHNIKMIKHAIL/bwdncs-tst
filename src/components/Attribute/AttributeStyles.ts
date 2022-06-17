import styled from 'styled-components';

export const AttributeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttributeNameContainer = styled.div`
  padding-top: 40px;
  padding-bottom: 7px;
  font-family: Roboto Condensed, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
`;

export const VariantsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const OneVariant = styled.div<{ selected: boolean }>`
  margin-right: 12px;
  padding: 15px 20px;
  border: 1px solid #1D1F22;
  margin-top: 10px;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }

  ${({selected}) => selected && `
    color: white;
    background-color: black;
    cursor: pointer;
  `}
`;

export const OneVariantWithColor = styled.div<{ selected: boolean, backColor: string }>`
  margin-right: 12px;
  padding: 15px 20px;
  border: 1px solid #1D1F22;
  margin-top: 10px;
  width: 20px;
  height: 20px;

  &:hover {
    color: white;
    border:6px red solid;
    cursor: pointer;
  }

  ${({backColor}) => `
  background-color: ${backColor}
  `}

  ${({selected}) => selected && `
    color: white;
    border:6px red solid;
    cursor: pointer;
  `}

`;