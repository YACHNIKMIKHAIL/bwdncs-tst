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
  font-family: Roboto Condensed, serif;
  font-weight: normal;

  &:hover {
    color: white;
    background-color: black;
    cursor: pointer;
  }

  ${({selected,}) => selected && `
    color: white;
    background-color: black;
    cursor: pointer;
  `}
`;

export const OneVariantWithColor = styled.div<{ selected: boolean, backColor: string }>`
  margin-right: 12px;
  position: relative;
  border: 1px solid #1D1F22;
  width: 40px;
  height: 40px;
  box-sizing: border-box;

  &:after {
    content: '';
    position: absolute;
    width: 44px;
    height: 44px;
    top: -5px;
    left: -5px;
    background-color: transparent;
  }

  &:hover {
    &:after {
      border: 2px #5ECE7B solid;
    }
  }


  ${({backColor}) => `
    background-color: ${backColor}
  `}

  ${({selected, backColor}) => selected && `
    background-color: ${backColor};
    border:2px #5ECE7B solid;
    cursor: pointer;
    box-sizing: border-box;
    
    &:hover {
    &:after {
      border: none;
    }
  }
  `}
`;

export const XCase = styled.div<{ backColor: string }>`
  width: 36px;
  height: 36px;
  ${({backColor}) => `
    background-color: ${backColor}
  `}
`;