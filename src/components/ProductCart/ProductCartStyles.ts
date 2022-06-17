import styled from 'styled-components';

export const MainDiv = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 300px;
  font-family: Raleway, serif;
  padding: 20px;
  margin: 0 0 100px 0;

  &:hover {
    box-shadow: 0 5px 35px rgba(168, 172, 176, 0.19);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const Image = styled.img`
  height: 330px;
  width: 100%;
  max-width: 350px;
  object-fit: contain;
`;

export const OutOfStock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background: #FFFFFF;
  opacity: 0.5;
`;

export const Name = styled.p`
  padding-top: 25px;
`;

export const Price = styled.p`
  margin: 0;
  font-weight: 500;
`;