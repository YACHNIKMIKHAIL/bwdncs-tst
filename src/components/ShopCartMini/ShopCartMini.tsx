import React, {Component} from 'react';
import {values} from 'lodash';
import {withRouter} from 'react-router-dom';
import {ShopCartContext} from '../../context/shopCart.context';
import {CurrencyContext} from '../../context/currency.context';
import {
    MainContainer,
    ContentContainer,
    Text,
    Bag,
    AllProducts,
    Product,
    ProductInfo,
    ProductName,
    AttributeSet,
    Attribute,
    Amount,
    ButtonsAndPhoto,
    ButtonBlock,
    Quantity,
    Button,
    Miniature,
    Total,
    TotalAmount,
    Buttons,
    ViewBag,
    CheckOut
} from './ShopCartMiniStyle';

class ShopCartMini extends Component<any, any> {
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
                                <AllProducts>
                                    {products.map((product, i) => (
                                        <Product key={product?.id + product.photo + i}>
                                            <ProductInfo>
                                                <ProductName>{product?.id}</ProductName>
                                                <Amount>{this.context.currency.symbol + product?.price.toString()}</Amount>
                                                <AttributeSet>
                                                    {values(product?.selectedAttributes).map((attribute) => (
                                                        <Attribute key={attribute}>{attribute}</Attribute>))}
                                                </AttributeSet>
                                            </ProductInfo>
                                            <ButtonsAndPhoto>
                                                <ButtonBlock>
                                                    <Button
                                                        onClick={() => addProduct(product.id,
                                                            product.selectedAttributes,
                                                            product.allAttributes,
                                                            product.price,
                                                            product.photo)}
                                                    >
                                                        +
                                                    </Button>
                                                    <Quantity>{product?.quantity}</Quantity>
                                                    <Button
                                                        onClick={() => removeProduct(product.id,
                                                            product.selectedAttributes,
                                                            product.allAttributes,
                                                            product.price,
                                                            product.photo)}
                                                    >
                                                        -
                                                    </Button>
                                                </ButtonBlock>
                                                <div>
                                                    <Miniature src={product?.photo[0]}/>
                                                </div>
                                            </ButtonsAndPhoto>
                                        </Product>
                                    ))}
                                </AllProducts>
                                <Total>
                                    <Bag>Total: </Bag>
                                    <TotalAmount>
                                        {this.context.currency.symbol + products.reduce((sum, product) =>
                                            sum + product.price * product.quantity +
                                            (product.price * 0.21 * product.quantity), 0).toFixed(2).toString()}
                                    </TotalAmount>
                                </Total>
                            </ContentContainer>
                            <Buttons>
                                <ViewBag onClick={() => this.props.history.push('/shopcart')}>VIEW BAG</ViewBag>
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
