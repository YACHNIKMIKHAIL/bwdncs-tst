import React, {Component} from "react";
import {ProductsBlock} from "../FullShopCartStyle";
import {
    OrderProduct,
    OrderInfo,
    OrderD,
    OrderP,
    OrderButton
} from "./OrderStyle";
import {CurrencyContext} from "./../../../context/currency.context";
import {ShopCartContext} from "./../../../context/shopCart.context";

class Order extends Component {
    static contextType = CurrencyContext;

    render() {
        return (
            <ShopCartContext.Consumer>
                {({products}) => {


                    const all = products
                        .map((m: any) => m.price * m.quantity)
                        .reduce((acc: number, el: number) => {
                            return acc + el

                        })
                    const tax = Math.floor(all * 0.21)
                    const qua = products
                        .map((m: any) => m.quantity)
                        .reduce((acc: number, el: number) => {
                            return acc + el

                        })


                    return <ProductsBlock>
                        <OrderProduct>
                            <OrderInfo>
                                <div style={{display: 'flex', margin: '10px 0', alignItems: 'center'}}>
                                    <OrderD>Tax 21%:</OrderD><OrderP>{this.context.currency.symbol} {tax}</OrderP>
                                </div>
                                <div style={{display: 'flex', margin: '10px 0', alignItems: 'center'}}>
                                    <OrderD>Quantity:</OrderD><OrderP>{qua}</OrderP>
                                </div>
                                <div style={{display: 'flex', margin: '10px 0', alignItems: 'self-end'}}>
                                    <OrderD>Total:</OrderD><OrderP>{this.context.currency.symbol} {Math.floor(all + tax)}</OrderP>
                                </div>
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