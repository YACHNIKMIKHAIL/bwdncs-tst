import styled from 'styled-components';

export const Product = styled.div`
  border-top: #E5E5E5 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

export const Info = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

export const Name = styled.div`
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const NameX = styled.div`
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 27px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Price = styled.div`
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 18px;
`;

export const Attribute = styled.div`
  border: solid 1px black;
  margin-right: 10px;
  padding: 4px 6px;
  min-width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsAndPhoto = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ButtonBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  border: solid 1px black;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhotoBlock = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 20px;
  position: relative;
`;

export const ArrowsContainer = styled.div`
  width: 30%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 20px;
  right: 20px;
`;

export const Arrow = styled.div`
  cursor: pointer;
  background-color: black;
  padding: 2px;
  width: 14px;
  height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
`

export const Miniature = styled.img`
  width: 141px;
  height: 185px;
  object-fit: contain;
  pointer-events: none;
`;

export const ColorAtt = styled.div<{ backColor: string, border: string }>`
  margin-right: 10px;
  padding: 4px 6px;
  min-width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({backColor}) => `
    background-color: ${backColor}
  `};
  ${({border}) => `
    border: ${border}
  `}
`;

export const Att = styled.div`
  border: solid 1px black;
  margin-right: 10px;
  min-width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
`;
export const SelectedAtt = styled.div`
  border: solid 1px black;
  margin-right: 10px;
  min-width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 4px;
`;

export const XCase = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const XXCase = styled.div`
  display: flex;
  margin-top: 2px;
  align-items: center;
`;