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

export const Cart = styled.p`
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
`;

export const ProductsBlock = styled.div`
  max-width: 1200px;
  padding-left: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;