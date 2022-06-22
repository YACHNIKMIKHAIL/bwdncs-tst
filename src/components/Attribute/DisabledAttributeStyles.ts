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

export const OneVariant = styled.div`
  margin-right: 12px;
  padding: 15px 20px;
  border: 1px solid #1D1F22;
  margin-top: 10px;
  font-family: Roboto Condensed, serif;
  font-weight: normal;
  opacity: 0.2;
`;

export const OneVariantWithColor = styled.div<{  backColor: string }>`
  margin-right: 12px;
  position: relative;
  border: 1px solid #1D1F22;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  opacity: 0.2;


  ${({backColor}) => `
    background-color: ${backColor}
  `}

`;

export const XCase = styled.div<{ backColor: string }>`
  width: 40px;
  height: 40px;
  ${({backColor}) => `
    background-color: ${backColor}
  `}
`;