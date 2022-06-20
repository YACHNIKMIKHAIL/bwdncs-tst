import styled from 'styled-components';

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  z-index: 1;
`;

export const CategoryAndProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryName = styled.div`
  font-family: Raleway, serif;
  line-height: 160%;
  font-size: 40px;
  margin-bottom: 100px;
  width: 100%;
  max-width: 1200px;
  padding: 15px;
  box-sizing: border-box;
`;

export const ProductList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  height: 100%;
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