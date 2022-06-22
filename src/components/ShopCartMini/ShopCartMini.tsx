import React, {Component} from 'react';
import {values} from 'lodash';
import {withRouter} from 'react-router-dom';
import {ShopCartContext} from '../../context/shopCart.context';
import {CurrencyContext} from '../../context/currency.context';
import {
    AllProducts,
    Amount,
    Attribute,
    AttributeSet,
    Bag,
    Button,
    ButtonBlock,
    Buttons,
    ButtonsAndPhoto,
    CheckOut,
    ContentContainer,
    MainContainer,
    Miniature,
    Product,
    ProductInfo,
    ProductName,
    Quantity,
    Text,
    Total,
    TotalAmount,
    ViewBag
} from './ShopCartMiniStyle';
import {Attr, Name, SelectedAttr, XCase} from "../ProductInCart/ProductInCartStyle";


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
                                    {products.map((product, i) => {
                                        return <Product key={product?.id + product.photo + i}>
                                            <ProductInfo>
                                                <ProductName>{product?.id}</ProductName>
                                                <Amount>{this.context.currency.symbol + product?.price.toString()}</Amount>
                                                <AttributeSet>
                                                    {values(product.allAttributes).map((attribute, i) => (
                                                        <Name style={{fontSize: '15px', fontWeight: 300}}
                                                              key={i}>{attribute.id}:
                                                            <XCase>{
                                                                attribute.items?.map((m: any, i: number) => {
                                                                    const [keysA] = Object.keys(product?.selectedAttributes)
                                                                    const Xvalues = values(product?.selectedAttributes)
                                                                    if (keysA === 'Color') {
                                                                        Xvalues.reverse()
                                                                    }
                                                                    const [valuesA, valuesB] = Xvalues
                                                                    if (m?.id === valuesA) {
                                                                        return <SelectedAttr
                                                                            key={i}>{m?.id}</SelectedAttr>
                                                                    } else if (attribute.id === 'Color') {
                                                                        if (m?.id === valuesB) {
                                                                            return <Attribute key={i}
                                                                                              border={'3px #5ECE7B solid'}
                                                                                              backColor={`${m?.value}`}/>
                                                                        } else {
                                                                            return <Attribute key={i}
                                                                                              border={'solid 1px black'}
                                                                                              backColor={`${m?.value}`}/>
                                                                        }
                                                                    } else {
                                                                        return <Attr key={i}>{m?.id}</Attr>
                                                                    }

                                                                })
                                                            }</XCase>
                                                        </Name>
                                                    ))
                                                    }
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
                                    })}
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
