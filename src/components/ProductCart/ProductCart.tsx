import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CurrencyContext} from '../../context/currency.context';
import {MainPageQuery_category_products as MainPageQueryCategoryProducts} from '../../graphql/__generated__/MainPageQuery';
import {getPrice, getSymbol} from '../../Utils';
import {Image, ImageContainer, MainDiv, Name, OutOfStock, Price} from './ProductCartStyles';
import {AddToCart} from "../../pages/FullProductInfo/FullProductInfoStyle";
import {ShopCartContext} from '../../context/shopCart.context';

interface ProductCartProps {
    product: MainPageQueryCategoryProducts
}

class ProductCart extends Component<RouteComponentProps<{}> & ProductCartProps> {
    static contextType = CurrencyContext;

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
                    <div>
                        <MainDiv
                            onClick={() => {
                                !available
                                    ? alert('Sorry, this item is not available now =(')
                                    : this.props.history.push(`/product?${productInfo.name}`);
                            }
                            }
                        >
                            <ImageContainer>
                                <Image src={productInfo?.gallery?.[0]!}/>
                                {!available && <OutOfStock>Out of stock</OutOfStock>}
                            </ImageContainer>
                            <Name>{productInfo.name}</Name>
                            <Price>{symbol} {price?.toString()}</Price>
                            <AddToCart
                                onClick={(event) => {
                                    if (!productInfo?.inStock) {
                                        return
                                    } else {
                                        // addProduct(productInfo?.name!,
                                        //     this.state.selectedAttributes,,
                                        //     productInfo?.attributes,
                                        //     productInfo?.prices,
                                        //     compact(productInfo?.gallery));
                                        event.stopPropagation()
                                    }
                                }}
                            >
                                BUY NOW
                            </AddToCart>
                        </MainDiv>
                    </div>
                );
            }
            }
        </ShopCartContext.Consumer>
    }
}

export default withRouter(ProductCart);
