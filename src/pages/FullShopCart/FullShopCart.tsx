import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {
    MainDiv,
    Container,
    Overlay,
    Cart,
    ProductsBlock
} from './FullShopCartStyle';
import Header from '../../components/Header/Header';
import {CurrencyContext} from '../../context/currency.context';
import {ShopCartContext} from '../../context/shopCart.context';
import ProductInCart from "../../components/ProductInCart/ProductInCart";

class FullShopCart extends Component<any, any> {
    state = {showOverlay: false};

    static contextType = CurrencyContext;

    render() {
        const showOverlay = (state: boolean) => {
            this.setState({showOverlay: state});
        }

        return (
            <ShopCartContext.Consumer>
                {({products}) => {
                    return (
                        <MainDiv>
                            <Header showOverlay={showOverlay}/>
                            <Container>
                                {this.state.showOverlay && <Overlay/>}
                                <ProductsBlock>
                                    <Cart>Cart</Cart>
                                    {products.map((product, i) => (<ProductInCart product={product} key={i}/>))}
                                </ProductsBlock>
                            </Container>
                        </MainDiv>
                    );
                }}
            </ShopCartContext.Consumer>
        );
    }
}

export default withRouter(FullShopCart);
