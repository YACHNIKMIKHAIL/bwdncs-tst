import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  font-family: Raleway, serif;
  padding: 15px;
  box-sizing: border-box;
`;

export const LogoStyle = styled.div`
  height: 75px;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap
`;

export const CurrencyAndShopCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center
`;

export const CurrencyOpen = styled.div`
  position: relative;
  height: 55px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Symbols = styled.div`
  padding-bottom: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CurrencyMenu = styled.div`
  margin: 25px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  box-shadow: 0 5px 35px rgba(168, 172, 176, 0.19);
  height: 170px;
  width: 115px;
  z-index: 2;
  background-color: white;
`;

export const Currency = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  padding-top: 7px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const ArrowUpContainer = styled.div`
  margin: 0 7px 0 7px;
`;

export const ShopCartContainer = styled.div`
  position: relative;
  height: 55px;
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  margin: 3px;
`;

export const NumberOfProducts = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: -10px;
  right: -10px;
  background-color: black;
  border-radius: 10px;
  Width: 20px;
  Height: 20px;
  color: white;
  font-family: Roboto, sans-serif;
`;

export const ShopCartOpen = styled.div`
  position: absolute;
  right: 0;
  z-index: 2;
`;