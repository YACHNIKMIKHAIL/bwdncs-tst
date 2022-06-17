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
  margin: 0 4px;
  padding: 4px 6px;
  width: 63px;
  height: 45px;
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
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Arrow = styled.div`
  cursor: pointer;
`

export const Miniature = styled.img`
  width: 141px;
  height: 185px;
  object-fit: contain;
  pointer-events: none;
`;