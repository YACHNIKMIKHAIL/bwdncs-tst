import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {ShopCartContext} from '../../context/shopCart.context';
import {CurrencyContext} from '../../context/currency.context';
import {
    Bag,
    Buttons,
    CheckOut,
    ContentContainer,
    MainContainer,
    Text,
    Total,
    TotalAmount,
    ViewBag
} from './ShopCartMiniStyle';
import {RouteComponentProps, StaticContext} from "react-router";
import {ProductesMap} from "./ProductsMap";
import {ShopRoutes} from "../../Routes";


class ShopCartMini extends Component<RouteComponentProps<{}, StaticContext, unknown>, Readonly<typeof ShopCartMini>> {
    static contextType = CurrencyContext;

    render() {
        return (
            <ShopCartContext.Consumer>
                {
                    ({addProduct, removeProduct, products}) => (
                        <MainContainer>
                            <ContentContainer>
                                <Text>
                                    <Bag>My bag</Bag>
                                    {' '}
                                    <p>
                                        ,
                                        {products.length}
                                        {' '}
                                        items
                                    </p>
                                </Text>
                                <ProductesMap products={products} addProduct={addProduct} removeProduct={removeProduct}/>
                                <Total>
                                    <Bag>Total: </Bag>
                                    <TotalAmount>
                                        {this.context.currency.symbol + products.reduce((sum, product) =>
                                            sum + Number(product.price) * product.quantity +
                                            (Number(product.price) * 0.21 * product.quantity), 0).toFixed(2).toString()
                                        }
                                    </TotalAmount>
                                </Total>
                            </ContentContainer>
                            <Buttons>
                                <ViewBag onClick={() => this.props.history.push(ShopRoutes.shopcart)}>VIEW BAG</ViewBag>
                                <CheckOut>CHECK OUT</CheckOut>
                            </Buttons>
                        </MainContainer>
                    )
                }
            </ShopCartContext.Consumer>
        );
    }
}

export default withRouter(ShopCartMini);