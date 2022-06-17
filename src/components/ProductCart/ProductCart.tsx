import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CurrencyContext} from '../../context/currency.context';
import {MainPageQuery_category_products as MainPageQueryCategoryProducts} from '../../graphql/__generated__/MainPageQuery';
import {getPrice, getSymbol} from '../../Utils';
import {
    MainDiv,
    ImageContainer,
    Image,
    OutOfStock,
    Name,
    Price
} from './ProductCartStyles';

interface ProductCartProps {
    product: MainPageQueryCategoryProducts
}

class ProductCart extends Component<RouteComponentProps<{}> & ProductCartProps> {
    static contextType = CurrencyContext;

    render() {
        const productInfo = this.props?.product;
        let price
        let symbol 
        const available = productInfo?.inStock;
        price = getPrice(productInfo.prices, this.context.currency);
        symbol = getSymbol(productInfo.prices, this.context.currency);

        return (
            <div>
                <MainDiv onClick={() => {
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
                </MainDiv>
            </div>
        );
    }
}

export default withRouter(ProductCart);
