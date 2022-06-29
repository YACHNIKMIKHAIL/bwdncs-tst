import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Cart, Container, MainDiv, NoItems, Overlay, ProductsBlock} from './FullShopCartStyle';
import Header from '../../components/Header/Header';
import {CurrencyContext} from '../../context/currency.context';
import {ShopCartContext} from '../../context/shopCart.context';
import ProductInCart from "../../components/ProductInCart/ProductInCart";
import Order from "./Order/Order";

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
                                    {products.length === 0
                                        ? <NoItems>
                                            <Link to={'/'} style={{color: '#79D383'}}>
                                                No items in basket =(
                                            </Link>
                                        </NoItems>
                                        : <>{products.map((product, i) => (
                                            <ProductInCart product={product} key={i}/>))}</>
                                    }

                                </ProductsBlock>
                            </Container>
                            {products.length !== 0 && <Order/>}
                        </MainDiv>
                    );
                }}
            </ShopCartContext.Consumer>
        );
    }
}

export default withRouter(FullShopCart);
