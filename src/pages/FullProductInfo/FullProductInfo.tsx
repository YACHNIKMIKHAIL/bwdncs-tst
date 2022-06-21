import React, {Component} from 'react';
import {ChildDataProps, graphql, QueryControls} from '@apollo/client/react/hoc';
import {
    MainDiv,
    Container,
    Overlay,
    ProductInfo,
    AllPhotos,
    Miniatures,
    Miniature,
    MainPhoto,
    Photo,
    Info,
    ProductName,
    Price,
    Word,
    Amount,
    AddToCart,
    Description
} from './FullProductInfoStyle';
import {RouteComponentProps} from 'react-router-dom';
import {sanitize} from 'dompurify'
import {CurrencyContext} from '../../context/currency.context';
import Header from '../../components/Header/Header';
import {GET_ALL_INFO} from '../../graphql/query';
import {Attribute} from '../../components/Attribute/Attribute';
import {
    MainPageQuery,
    MainPageQuery_category_products as Product,
    MainPageQuery_category_products_attributes
} from '../../graphql/__generated__/MainPageQuery';
import {ShopCartContext} from '../../context/shopCart.context';
import {getPrice} from '../../Utils';
import {compact} from "lodash";

const fixProductName = (str: string) => {
    return str.slice(1).split('%20').join(' ')
};

interface FullProductInfoProps {
    data: MainPageQuery & QueryControls<MainPageQuery, {}>
}

class FullProductInfo extends Component<ChildDataProps<RouteComponentProps<{}> & FullProductInfoProps, MainPageQuery, {}>> {
    static contextType = CurrencyContext;

    state = {
        showOverlay: false,
        selectedAttributes: {} as any,
        mainPhoto: null,
        isSelected: false
    };

    render() {
        const allProducts = this.props?.data?.category?.products;
        if (!allProducts) {
            return null;
        }
        const product = fixProductName(this.props.history.location.search);

        const productInfo: Product | null | undefined = allProducts.find((oneProduct) => oneProduct?.name === product);
        const photo = this.state.mainPhoto || productInfo?.gallery?.[0];

        const showOverlay = (state: boolean) => {
            this.setState({showOverlay: state});
        };

        const price = getPrice(productInfo?.prices!, this.context.currency);

        return (
            <ShopCartContext.Consumer>
                {({addProduct}) => {
                    return <MainDiv>
                        <Header showOverlay={showOverlay}/>
                        <Container>
                            {this.state.showOverlay && <Overlay/>}
                            <ProductInfo>
                                <AllPhotos>
                                    <Miniatures>
                                        {
                                            productInfo?.gallery?.map((minPhoto: string | null) => (
                                                <div key={minPhoto}>
                                                    <Miniature src={minPhoto!}
                                                               onClick={() => this.setState({mainPhoto: minPhoto})}/>
                                                </div>
                                            ))
                                        }
                                    </Miniatures>
                                    <MainPhoto>
                                        <div>
                                            <Photo alt="main" src={photo!}/>
                                        </div>
                                    </MainPhoto>
                                </AllPhotos>
                                <Info>
                                    <ProductName>{productInfo?.name}</ProductName>
                                    {productInfo?.attributes?.map((attribute: MainPageQuery_category_products_attributes
                                            | null) => {
                                            return <Attribute
                                                key={attribute!.id}
                                                onAttributeSelect={(attributeItem) => {
                                                    this.setState({
                                                        selectedAttributes: {
                                                            ...this.state.selectedAttributes,
                                                            [attribute!.id]: attributeItem,
                                                        },
                                                        isSelected: true
                                                    });
                                                }}
                                                selectedAttribute={this.state.selectedAttributes[attribute!.id]}
                                                attribute={attribute!}
                                            />
                                        }
                                    )}

                                    <Price>
                                        <Word>PRICE:</Word>
                                        <Amount>{`${this.context.currency.symbol} ${price?.toString()}`}</Amount>
                                    </Price>
                                    <AddToCart
                                        // disabled={!productInfo?.inStock}
                                        style={{opacity: !productInfo?.inStock ? '0.4' : ''}}
                                        onClick={() => {
                                            if(!productInfo?.inStock ){
                                                alert('Sorry, this item is not available now =(')
                                                return
                                            }else{
                                                if (!this.state.isSelected && productInfo?.attributes?.length !== 0) {
                                                    alert('Choise attribute')
                                                } else {
                                                    addProduct(productInfo?.name!,
                                                        this.state.selectedAttributes,
                                                        productInfo?.attributes,
                                                        productInfo?.prices,
                                                        compact(productInfo?.gallery));
                                                }
                                            }
                                        }}
                                    >
                                        ADD TO CART
                                    </AddToCart>
                                    <Description
                                        dangerouslySetInnerHTML={{__html: sanitize(productInfo?.description!)}}/>
                                </Info>
                            </ProductInfo>
                        </Container>
                    </MainDiv>
                }}
            </ShopCartContext.Consumer>
        );
    }
}

export default graphql<RouteComponentProps<{}> & FullProductInfoProps, MainPageQuery, {}, {}>(GET_ALL_INFO)(FullProductInfo);