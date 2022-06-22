import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CurrencyContext} from '../../context/currency.context';
import {MainPageQuery_category_products as MainPageQueryCategoryProducts} from '../../graphql/__generated__/MainPageQuery';
import {getPrice, getSymbol} from '../../Utils';
import {Image, ImageContainer, MainDiv, Name, OutOfStock, Price, XCase} from './ProductCartStyles';
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
                             onClick={() => {
                                 this.props.history.push(`/product?${productInfo.id}`);
                             }}
                    >
                        <ImageContainer>
                            <Image src={productInfo?.gallery?.[0]!}/>
                            {!available && <OutOfStock>Out of stock</OutOfStock>}
                        </ImageContainer>
                        <Name>{productInfo.name}</Name>
                        <Price>{symbol} {price?.toString()}</Price>

                        {this.state.show && <>{productInfo?.inStock
                        && <XCase onClick={(event) => {
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
                        </XCase>}</>}
                    </MainDiv>
                );
            }}
        </ShopCartContext.Consumer>
    }
}

export default withRouter(ProductCart);
