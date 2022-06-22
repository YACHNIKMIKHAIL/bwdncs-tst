import React, {Component} from 'react';
import {values} from 'lodash';
import {withRouter} from 'react-router-dom';
import {ShopCartContext} from '../../context/shopCart.context';
import {CurrencyContext} from '../../context/currency.context';
import {
    AllProducts,
    Amount,
    AttributeSet,
    Bag,
    Button,
    ButtonBlock,
    Buttons,
    ButtonsAndPhoto,
    CCase,
    CheckOut,
    ContentContainer,
    MainContainer,
    Miniature,
    Name,
    Product,
    ProductInfo,
    ProductName,
    Quantity,
    SCAtt,
    SCColorAtt,
    SCSelectedAtt,
    Text,
    Total,
    TotalAmount,
    ViewBag
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
                                    {products.map((product, i) => {
                                        return <Product key={product?.id + product.photo + i}>
                                            <ProductInfo>
                                                <ProductName>{product?.id}</ProductName>
                                                <Amount>{this.context.currency.symbol + product?.price.toString()}</Amount>
                                                <AttributeSet>
                                                    {values(product.allAttributes).map((attribute, i) => (
                                                        <Name key={i}>{attribute.id}:
                                                            <CCase>{
                                                                attribute.items?.map((m: any, i: number) => {
                                                                    const [keysA] = Object.keys(product?.selectedAttributes)
                                                                    const Xvalues = values(product?.selectedAttributes)
                                                                    if (keysA === 'Color') {
                                                                        Xvalues.reverse()
                                                                    }
                                                                    const [valuesA, valuesB] = Xvalues
                                                                    if (m?.id === valuesA) {
                                                                        return <SCSelectedAtt
                                                                            key={i}>{m?.id}</SCSelectedAtt>
                                                                    } else if (attribute.id === 'Color') {
                                                                        if (m?.id === valuesB) {
                                                                            return <SCColorAtt key={i}
                                                                                               border={'4px rgb(94,206,123) solid'}
                                                                                               backColor={`${m?.value}`}
                                                                            />
                                                                        } else {
                                                                            return <SCColorAtt key={i}
                                                                                               backColor={`${m?.value}`}
                                                                                               border={'solid 1px black'}/>
                                                                        }
                                                                    } else {
                                                                        return <SCAtt key={i}>{m?.id}</SCAtt>
                                                                    }

                                                                })
                                                            }</CCase>
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
