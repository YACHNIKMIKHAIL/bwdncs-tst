import React, {Component} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {CurrencyContext} from '../../context/currency.context';
import {
    MainPageQuery_category_products,
    MainPageQuery_category_products as MainPageQueryCategoryProducts,
    MainPageQuery_category_products_attributes
} from '../../graphql/__generated__/MainPageQuery';
import {getPrice, getSymbol} from '../../Utils';
import {Image, ImageContainer, MainDiv, Name, OutOfStock, Price, XCase} from './ProductCartStyles';
import {AddProductType, ShopCartContext} from '../../context/shopCart.context';
import {compact} from "lodash";
import {ReactComponent as Buy} from "../../images/shop-cart.svg";
import {ShopRoutes} from "../../Routes";

interface ProductCartProps {
    product: MainPageQueryCategoryProducts
}

class ProductCart extends Component<RouteComponentProps<{}> & ProductCartProps> {
    static contextType = CurrencyContext;
    state = {
        show: false
    };

    onAttributeClick(event: React.MouseEvent<HTMLDivElement>, productInfo: MainPageQuery_category_products,
                     addProduct: AddProductType) {
        let arrKeys = [] as string[]
        let arrValues = [] as string[]

        productInfo.attributes?.forEach((attributeItem) => {
            arrKeys.push(attributeItem!.id)
            // @ts-ignore: Object is possibly 'null'.
            arrValues.push(attributeItem?.items[0].id)
        })
        let arr = arrKeys.reduce((acc: Object, n: string, i: number) => {
            return {
                ...acc,
                [n]: arrValues[i]
            }
        }, {})

        let productInfoAttributes: MainPageQuery_category_products_attributes[] = []

        if (productInfo?.attributes) {
            productInfoAttributes = productInfo?.attributes
        }
        addProduct(productInfo?.name!,
            arr,
            productInfoAttributes,
            productInfo?.prices,
            compact(productInfo?.gallery));
        event.stopPropagation()
    }

    onMouseEnterOnMainDiv(v: boolean) {
        this.setState({
            show: v
        })
    }

    showCurrentProduct(id: string) {
        this.props.history.push(`${ShopRoutes.product}?${id}`)
    }

    render() {
        const productInfo = this.props?.product;
        let currentPrice: number | null
        let symbol: string | null
        const available = productInfo?.inStock;
        currentPrice = getPrice(productInfo.prices, this.context.currency);
        symbol = getSymbol(productInfo.prices, this.context.currency);

        return <ShopCartContext.Consumer>
            {({addProduct}) => {
                return (
                    <MainDiv onMouseEnter={() => this.onMouseEnterOnMainDiv(true)}
                             onMouseLeave={() => this.onMouseEnterOnMainDiv(false)}
                             onClick={() => this.showCurrentProduct(productInfo.id)}>
                        <ImageContainer>
                            <Image src={productInfo?.gallery?.[0]!}/>
                            {!available && <OutOfStock>Out of stock</OutOfStock>}
                        </ImageContainer>
                        <Name>{productInfo.brand} {productInfo.name}</Name>
                        <Price>{symbol} {currentPrice?.toString()}</Price>

                        {this.state.show && <>{productInfo?.inStock
                            && <XCase
                                onClick={(e) => this.onAttributeClick(e, productInfo, addProduct)}
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