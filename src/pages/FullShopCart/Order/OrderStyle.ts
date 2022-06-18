import styled from "styled-components";


export const OrderBlock = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center
`;
export const OrderProduct = styled.div`
  border-top: #E5E5E5 1px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

export const OrderInfo = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;
export const OrderD = styled.span`
  font-family: Raleway, serif;
  font-style: normal;
  font-size: 20px;
  line-height: 18px;
`;
export const OrderP = styled.span`
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
  margin-left: 20px;
`;
export const OrderButton = styled.button`
  background-color: #5ECE7B;
  border: none;
  color: white;
  padding: 10px 60px;
  font-family: Raleway, serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 40px;

  &:hover {
    background-color: #4fa866;
    cursor: pointer;
  }

  @media (max-width: 1250px) {
    margin-right: 10px;
  }
`;