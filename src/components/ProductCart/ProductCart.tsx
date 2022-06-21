import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CurrencyContext} from '../../context/currency.context';
import {MainPageQuery_category_products as MainPageQueryCategoryProducts} from '../../graphql/__generated__/MainPageQuery';
import {getPrice, getSymbol} from '../../Utils';
import {Image, ImageContainer, MainDiv, Name, OutOfStock, Price} from './ProductCartStyles';
import {ShopCartContext} from '../../context/shopCart.context';
import {compact} from "lodash";
import {ReactComponent as Buy} from "../../images/shop-cart.svg";

interface ProductCartProps {
    product: MainPageQueryCategoryProducts
}

class ProductCart extends Component<RouteComponentProps<{}> & ProductCartProps> {
    static contextType = CurrencyContext;
    state = {
        show: false
    };


    render() {
        console.log(this.state.show)
        const productInfo = this.props?.product;
        let price: number | null
        let symbol: string | null
        const available = productInfo?.inStock;
        price = getPrice(productInfo.prices, this.context.currency);
        symbol = getSymbol(productInfo.prices, this.context.currency);
        return <ShopCartContext.Consumer>
            {({addProduct}) => {
                return (
                    <MainDiv onMouseEnter={() => {
                        this.setState({
                            show: true
                        })
                    }}
                             onMouseLeave={() => {
                                 this.setState({
                                     show: false
                                 })
                             }}
                        // onClick={() => {
                        //     !available
                        //         ? alert('Sorry, this item is not available now =(')
                        //         : this.props.history.push(`/product?${productInfo.name}`);
                        // }
                        // }
                             onClick={() => {
                                 this.props.history.push(`/product?${productInfo.name}`);
                             }
                             }
                    >
                        <ImageContainer>
                            <Image src={productInfo?.gallery?.[0]!}/>
                            {!available && <OutOfStock>Out of stock</OutOfStock>}
                        </ImageContainer>
                        <Name>{productInfo.name}</Name>
                        <Price>{symbol} {price?.toString()}</Price>
                        {/*<AddToCart style={{opacity: !productInfo?.inStock ? '0.4' : ''}}*/}
                        {/*           onClick={(event) => {*/}
                        {/*               debugger*/}
                        {/*               if (!productInfo?.inStock) {*/}
                        {/*                   return*/}
                        {/*               } else {*/}
                        {/*                   let arr = {} as any*/}
                        {/*                   productInfo.attributes?.forEach((attributeItem) => {*/}
                        {/*                       debugger*/}

                        {/*                       let key = attributeItem!.id*/}
                        {/*                       // @ts-ignore: Object is possibly 'null'.*/}
                        {/*                       let value = attributeItem?.items[0].value*/}
                        {/*                       arr[key.toString()] = value*/}
                        {/*                   })*/}

                        {/*                   addProduct(productInfo?.name!,*/}
                        {/*                       arr,*/}
                        {/*                       productInfo?.attributes,*/}
                        {/*                       productInfo?.prices,*/}
                        {/*                       compact(productInfo?.gallery));*/}
                        {/*                   event.stopPropagation()*/}
                        {/*               }*/}
                        {/*           }}*/}
                        {/*>*/}
                        {/*    BUY NOW*/}
                        {/*</AddToCart>*/}
                        {/*{productInfo?.inStock && <div style={{*/}
                        {/*    backgroundColor: '#5ECE7B', width: '40px', height: '40px',*/}
                        {/*    display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%',*/}
                        {/*    position: 'absolute', bottom: '95px', right: '70px'*/}
                        {/*}}>*/}
                        {/*    <Buy/>*/}
                        {/*</div>}*/}

                        {this.state.show && <>{productInfo?.inStock && <div style={{
                            backgroundColor: '#5ECE7B', width: '40px', height: '40px',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%',
                            position: 'absolute', bottom: '95px', right: '70px'
                        }}
                                                                            onClick={(event) => {
                                                                                let arr = {} as any
                                                                                productInfo.attributes?.forEach((attributeItem) => {

                                                                                    let key = attributeItem!.id
                                                                                    // @ts-ignore: Object is possibly 'null'.
                                                                                    arr[key.toString()] = attributeItem?.items[0].value
                                                                                })

                                                                                addProduct(productInfo?.name!,
                                                                                    arr,
                                                                                    productInfo?.attributes,
                                                                                    productInfo?.prices,
                                                                                    compact(productInfo?.gallery));
                                                                                event.stopPropagation()
                                                                            }
                                                                            }
                        >
                            <Buy/>
                        </div>}</>}
                    </MainDiv>
                );
            }
            }
        </ShopCartContext.Consumer>
    }
}

export default withRouter(ProductCart);
