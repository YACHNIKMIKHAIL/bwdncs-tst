import React, {Component} from 'react';
import {values} from "lodash";
import {AddProductType, RemoveProductType, ShopCartProduct} from "../../context/shopCart.context";
import {
    AllProducts,
    Amount,
    AttributeSet,
    Button,
    ButtonBlock,
    ButtonsAndPhoto,
    Miniature,
    Name,
    Product,
    ProductInfo,
    ProductName,
    Quantity
} from "./ShopCartMiniStyle";
import {CurrencyContext} from "../../context/currency.context";
import {ShopAttributesMap} from "./ShopAttributesMap";

type ProductesMapProps = {
    products: ShopCartProduct[]
    addProduct: AddProductType
    removeProduct: RemoveProductType
}

export class ProductesMap extends Component<ProductesMapProps> {
    static contextType = CurrencyContext;

    render() {
        return (
            <AllProducts>
                {this.props.products.map((product, i) => {
                    return <Product key={product?.id + product.photo + i}>
                        <ProductInfo>
                            <ProductName>{product?.id}</ProductName>
                            <Amount>{(this.context.currency.symbol + Number(product?.price)).toString()}</Amount>
                            <AttributeSet>
                                {values(product.allAttributes).map((attribute, i) => (
                                    <Name key={i}>{attribute.id}:
                                        <ShopAttributesMap product={product} items={attribute.items}
                                                           attName={attribute.id}/>
                                    </Name>
                                ))
                                }
                            </AttributeSet>
                        </ProductInfo>
                        <ButtonsAndPhoto>
                            <ButtonBlock>
                                <Button
                                    onClick={() => this.props.addProduct(product.id, product.selectedAttributes, product.allAttributes, product.price, product.photo)}
                                >
                                    +
                                </Button>
                                <Quantity>{product?.quantity}</Quantity>
                                <Button
                                    onClick={() => this.props.removeProduct(product.id, product.selectedAttributes, product.allAttributes, product.price, product.photo)}
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
        );
    }
}