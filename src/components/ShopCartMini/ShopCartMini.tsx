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
import {Name} from "../ProductInCart/ProductInCartStyle";


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
                                                {/*{`${attributeName?.toUpperCase()}:`}*/}
                                                <AttributeSet>
                                                    {/*{values(product?.selectedAttributes).map((attribute) => {*/}
                                                    {/*    // console.log(Object.keys(product?.selectedAttributes))*/}
                                                    {/*    // console.log(product?.selectedAttributes)*/}
                                                    {/*    // console.log('attribute', attribute)*/}
                                                    {/*    return <>*/}
                                                    {/*        <ProductName>{Object.keys(product?.selectedAttributes).toString()}:</ProductName>*/}
                                                    {/*        <Attribute key={attribute}>{attribute}</Attribute>*/}
                                                    {/*    </>*/}
                                                    {/*})}*/}
                                                    {/*{values(product?.allAttributes).map((attribute) => {*/}


                                                    {/*    // console.log(yo)*/}
                                                    {/*    // console.log(isSelected)*/}
                                                    {/*    return <div key={attribute?.id}*/}
                                                    {/*                style={{*/}
                                                    {/*                    display: 'flex',*/}
                                                    {/*                    flexDirection: 'column',*/}
                                                    {/*                    width: '100px'*/}
                                                    {/*                }}>*/}

                                                    {/*        <ProductName>{attribute?.id}:</ProductName>*/}
                                                    {/*        <div style={{*/}
                                                    {/*            width: '150px',*/}
                                                    {/*            display: 'flex', flexWrap: 'wrap', margin: '5px 0'*/}
                                                    {/*        }}>*/}
                                                    {/*            {attribute?.items?.map((m, i) => {*/}
                                                    {/*                // let isSelected = false*/}
                                                    {/*                // const yo = values(this.props.products?.selectedAttributes).map(m=>m)*/}
                                                    {/*                // console.log(yo)*/}
                                                    {/*                // for (let j = 0; j < yo.length; j++) {*/}
                                                    {/*                //     // yo[j] === m?.id*/}
                                                    {/*                //     // console.log(yo[j] === m?.id)*/}
                                                    {/*                //     // isSelected = true*/}
                                                    {/*                // }*/}
                                                    {/*                return <Attribute*/}
                                                    {/*                    key={attribute.id + i}>{*/}
                                                    {/*                    attribute?.id === 'Color'*/}
                                                    {/*                        ? <div style={{*/}
                                                    {/*                            width: '20px',*/}
                                                    {/*                            height: '20px',*/}
                                                    {/*                            backgroundColor: `${m?.value}`*/}
                                                    {/*                        }}/>*/}
                                                    {/*                        : <div style={{*/}
                                                    {/*                            fontSize: '12px',*/}
                                                    {/*                            padding: '3px'*/}
                                                    {/*                        }}>{m?.value}</div>*/}
                                                    {/*                }</Attribute>*/}
                                                    {/*            })}*/}
                                                    {/*        </div>*/}

                                                    {/*    </div>*/}
                                                    {/*})}*/}


                                                    {values(product.allAttributes).map((attribute, i) => (
                                                        <Name style={{fontSize: '15px', fontWeight: 300}}
                                                              key={i}>{attribute.id}:
                                                            <div style={{
                                                                display: 'flex',
                                                                marginTop: '2px',
                                                                alignItems: 'center',
                                                            }}>{
                                                                attribute.items?.map((m: any, i: number) => {
                                                                    const [keysA] = Object.keys(product?.selectedAttributes)
                                                                    const Xvalues = values(product?.selectedAttributes)
                                                                    if (keysA === 'Color') {
                                                                        Xvalues.reverse()
                                                                    }
                                                                    const [valuesA, valuesB] = Xvalues
                                                                    if (m?.id === valuesA) {
                                                                        return <Attribute key={i} style={{
                                                                            backgroundColor: 'black',
                                                                            color: 'white',
                                                                            padding: '4px'
                                                                        }}>{m?.id}</Attribute>
                                                                    } else if (attribute.id === 'Color') {
                                                                        if (m?.id === valuesB) {
                                                                            return <Attribute key={i} style={{
                                                                                backgroundColor: `${m?.value}`,
                                                                                border: '3px #5ECE7B solid',

                                                                            }}></Attribute>
                                                                        } else {
                                                                            return <Attribute key={i} style={{
                                                                                backgroundColor: `${m?.value}`
                                                                            }}></Attribute>
                                                                        }
                                                                    } else {
                                                                        return <Attribute key={i}
                                                                                          style={{padding: '2px'}}>{m?.id}</Attribute>
                                                                    }

                                                                })
                                                            }</div>
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
