import React, {Component} from "react";
import {ProductsBlock} from "../FullShopCartStyle";
import {OrderBlock, OrderButton, OrderD, OrderInfo, OrderP, OrderProduct} from "./OrderStyle";
import {CurrencyContext} from "../../../context/currency.context";
import {ShopCartContext} from "../../../context/shopCart.context";
import {findMyInfo} from "../../../Utils";

class Order extends Component {
    static contextType = CurrencyContext;

    render() {
        return (
            <ShopCartContext.Consumer>
                {({products}) => {
                    const result=findMyInfo(products)
                    return <ProductsBlock>
                        <OrderProduct>
                            <OrderInfo>
                                <OrderBlock>
                                    <OrderD>Tax
                                        21%:</OrderD><OrderP>{this.context.currency.symbol} {result.tax.toFixed(2)}</OrderP>
                                </OrderBlock>
                                <OrderBlock>
                                    <OrderD>Quantity:</OrderD><OrderP>{result.qua}</OrderP>
                                </OrderBlock>
                                <OrderBlock>
                                    <OrderD>Total:</OrderD><OrderP>{this.context.currency.symbol} {result.totalPrice.toFixed(2)}</OrderP>
                                </OrderBlock>
                                <OrderButton
                                    onClick={() => {
                                        alert('Is Ordered =)')
                                    }}>
                                    ORDER
                                </OrderButton>
                            </OrderInfo>
                        </OrderProduct>
                    </ProductsBlock>
                }}
            </ShopCartContext.Consumer>
        );
    }
}

export default Order;