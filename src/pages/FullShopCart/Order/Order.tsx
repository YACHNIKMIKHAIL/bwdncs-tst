import React, {Component} from "react";
import {ProductsBlock} from "../FullShopCartStyle";
import {
    OrderProduct,
    OrderInfo,
    OrderD,
    OrderP,
    OrderBlock,
    OrderButton
} from "./OrderStyle";
import {CurrencyContext} from "../../../context/currency.context";
import {ShopCartContext, ShopCartProduct} from "../../../context/shopCart.context";

class Order extends Component {
    static contextType = CurrencyContext;

    render() {
        return (
            <ShopCartContext.Consumer>
                {({products}) => {
                    console.log(products)
                    const all = products
                        .map((m: ShopCartProduct) => m.price * m.quantity)
                        .reduce((acc: number, el: number) => {
                            return acc + el

                        })
                    const tax = all * 0.21
                    const totalPrice = all + tax
                    const qua = products
                        .map((m: ShopCartProduct) => m.quantity)
                        .reduce((acc: number, el: number) => {
                            return acc + el

                        })


                    return <ProductsBlock>
                        <OrderProduct>
                            <OrderInfo>
                                <OrderBlock>
                                    <OrderD>Tax
                                        21%:</OrderD><OrderP>{this.context.currency.symbol} {tax.toFixed(2)}</OrderP>
                                </OrderBlock>
                                <OrderBlock>
                                    <OrderD>Quantity:</OrderD><OrderP>{qua}</OrderP>
                                </OrderBlock>
                                <OrderBlock>
                                    <OrderD>Total:</OrderD><OrderP>{this.context.currency.symbol} {totalPrice.toFixed(2)}</OrderP>
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