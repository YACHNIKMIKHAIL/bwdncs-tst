import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  flex: 1;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ProductInfo = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
  margin-left: 15px;

  @media (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 0;
  }
`;

export const AllPhotos = styled.div`
  display: flex;
`;

export const Miniatures = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 1250px) {
    margin-left: 10px;
  }
`;

export const Miniature = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 30px;

  &:hover {
    box-shadow: 0 5px 35px rgba(168, 172, 176, 0.19);
  }
`;

export const MainPhoto = styled.div`
  display: flex;
  margin-right: 100px;
  margin-left: 100px;

  @media (max-width: 1250px) {
    margin-right: 0;
    margin-left: 0;
  }
`;

export const Photo = styled.img`
  max-width: 511px;
  max-height: 610px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1250px) {
    margin-left: 10px;
  }
`;

export const ProductName = styled.div`
  font-family: Raleway, serif;
  font-weight: 500;
  font-size: 30px;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-family: Roboto Condensed, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
`;

export const Word = styled.div`
  font-family: Roboto Condensed, serif;
`;

export const Amount = styled.div`
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const AddToCart = styled.button<{ opacity: string }>`
  background-color: #5ECE7B;
  border: none;
  color: white;
  padding: 15px;
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 40px;
  
  ${({opacity}) => `
    opacity: ${opacity}
  `};

  ${({opacity}) => `
    opacity: ${opacity}
  `}
  &:hover {
    background-color: #4fa866;
    cursor: pointer;
  }

  @media (max-width: 1250px) {
    margin-right: 10px;
  }
`;

export const Description = styled.div`
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  margin-right: 10px;
`;

export const StopHover = styled.div`
  opacity:0.2;
  
  &:hover {

  }

`;