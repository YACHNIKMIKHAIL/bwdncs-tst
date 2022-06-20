import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 325px;
  background-color: white;
  z-index: 10;
  margin-top: 30px;
  height: 550px;
`;

export const ContentContainer = styled.div`
  margin-left: 13px;
  margin-right: 13px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Bag = styled.p`
  font-weight: bold;
`;

export const AllProducts = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 330px;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 45px;

`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.div`
  font-family: Raleway, serif;
  font-weight: 300;
  font-size: 16px;
`;

export const AttributeSet = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Attribute = styled.div`
  min-height: 20px;
  min-width: 20px;
  border: solid 1px black;
  margin: 4px 3px;
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Amount = styled.div`
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonsAndPhoto = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Quantity = styled.div`
  height: 24px;
  width: 24px;
  text-align: center;
`;

export const Button = styled.div`
  border: solid 1px black;
  width: 24px;
  height: 24px;
  text-align: center;
  margin-bottom: 5px;
`;

export const Miniature = styled.img`
  padding-left: 10px;
  width: 105px;
  height: 137px;
  object-fit: contain;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const TotalAmount = styled.p`
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ViewBag = styled.button`
  border: 1px solid #1D1F22;
  padding: 10px 25px;
  background-color: white;
  margin-right: 12px;
  width: 140px;
  height: 43px;
  cursor: pointer;
`;

export const CheckOut = styled.button`
  background-color: #5ECE7B;
  border: 1px solid #5ECE7B;
  padding: 10px 25px;
  color: white;
  width: 140px;
  height: 43px;
`;