import React, {Component} from 'react';
import {ChildDataProps, graphql, QueryControls} from '@apollo/client/react/hoc';
import {
    AddToCart,
    AllPhotos,
    Amount,
    BrandName,
    Container,
    Description,
    Info,
    MainDiv,
    MainPhoto,
    Miniature,
    Miniatures,
    Overlay,
    Photo,
    Price,
    ProductInfo,
    ProductName,
    Word
} from './FullProductInfoStyle';
import {RouteComponentProps} from 'react-router-dom';
import {sanitize} from 'dompurify'
import {CurrencyContext} from '../../context/currency.context';
import Header from '../../components/Header/Header';
import {GET_CURRENT_ITEM} from '../../graphql/query';
import {Attribute} from '../../components/Attribute/Attribute';
import {
    MainPageQuery,
    MainPageQuery_category_products as Product,
    MainPageQuery_category_products_attributes
} from '../../graphql/__generated__/MainPageQuery';
import {ShopCartContext} from '../../context/shopCart.context';
import {getPrice} from '../../Utils';
import {compact} from "lodash";
import {DisabledAttribute} from "../../components/Attribute/DisabledAttribute";

interface FullProductInfoProps {
    data: MainPageQuery & QueryControls<MainPageQuery, {}>
}

class FullProductInfo extends Component<ChildDataProps<RouteComponentProps<{}> & FullProductInfoProps, MainPageQuery, {}>> {
    static contextType = CurrencyContext;

    state = {
        showOverlay: false,
        selectedAttributes: {} as any,
        mainPhoto: null,
        isSelected: false,
        attribX: []
    };


    render() {

        const allProducts = this.props?.data.product;
        if (!allProducts) {
            return <div>Waaaaaaaaaait...</div>;
        }
        const findI = this.props?.data.product
        const productInfo: Product | null | undefined = findI
        const photo = this.state.mainPhoto || productInfo?.gallery?.[0];

        const showOverlay = (state: boolean) => {
            this.setState({showOverlay: state});
        };
        const price = getPrice(findI?.prices!, this.context.currency);

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
                                    <BrandName>{productInfo?.brand}</BrandName>
                                    <ProductName>{productInfo?.name}</ProductName>
                                    {!productInfo?.inStock
                                        ? <> {productInfo?.attributes?.map((attribute: MainPageQuery_category_products_attributes
                                                | null) => {
                                                return <DisabledAttribute
                                                    key={attribute!.id}
                                                    attribute={attribute!}
                                                />
                                            }
                                        )}</>
                                        : <> {productInfo?.attributes?.map((attribute: MainPageQuery_category_products_attributes
                                                | null) => {
                                                return <Attribute
                                                    key={attribute!.id}
                                                    onAttributeSelect={(attributeItem) => {
                                                        if (!productInfo?.inStock) return
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
                                        )}</>}
                                    <Price>
                                        <Word>PRICE:</Word>
                                        <Amount>{`${this.context.currency.symbol} ${price?.toString()}`}</Amount>
                                    </Price>
                                    <AddToCart opacity={!productInfo?.inStock ? '0.4' : ''}
                                               onClick={() => {
                                                   if (!productInfo?.inStock) {
                                                       alert('Sorry, this item is not available now =(')
                                                       return
                                                   } else {
                                                       if ((!this.state.isSelected && productInfo?.attributes?.length !== 0)
                                                           || Object.keys(this.state.selectedAttributes).length !== productInfo?.attributes?.length) {
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

export default graphql<RouteComponentProps<{}> & FullProductInfoProps, MainPageQuery, {}, {}>(GET_CURRENT_ITEM, {
    options: () => ({
        fetchPolicy: 'network-only',
        variables: {id: window.location.search.slice(1)}
    })
})(FullProductInfo);