import React, {Component} from 'react';
import {
    Arrow,
    ArrowsContainer,
    Att,
    Button,
    ButtonBlock,
    ButtonsAndPhoto,
    ColorAtt,
    Info,
    Miniature,
    Name,
    NameX,
    PhotoBlock,
    Price,
    Product,
    Quantity,
    SelectedAtt,
    XCase,
    XXCase
} from './ProductInCartStyle';
import {ReactComponent as ArrowLeft} from "../../images/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../../images/arrow-right.svg";
import {values} from "lodash";
import {CurrencyContext} from "../../context/currency.context";
import {ShopCartContext, ShopCartProduct} from '../../context/shopCart.context';
import {MainPageQuery_category_products_attributes_items} from "../../graphql/__generated__/MainPageQuery";

interface ProductInCartProps {
    product: ShopCartProduct

}

class ProductInCart extends Component<ProductInCartProps> {
    static contextType = CurrencyContext;
    state = {mainPhotoIndex: 0};

    changePhoto = (button: string) => {
        if (button === 'right') {
            if (this.state.mainPhotoIndex + 1 < this.props.product.photo.length) {
                this.setState({mainPhotoIndex: this.state.mainPhotoIndex + 1})
            } else {
                this.setState({mainPhotoIndex: 0})
            }
        }

        if (button === 'left') {
            if (this.state.mainPhotoIndex - 1 < 0) {
                this.setState({mainPhotoIndex: this.props.product.photo.length - 1})
            } else {
                this.setState({mainPhotoIndex: this.state.mainPhotoIndex - 1})
            }
        }
    }

    render() {
        return (
            <ShopCartContext.Consumer>
                {({addProduct, removeProduct}) => {

                    return <Product key={this.props.product.id}>
                        <Info>
                            <Name>{this.props.product.id}</Name>
                            <Price>{this.context.currency.symbol + this.props.product.price * this.props.product.quantity}</Price>
                            <XCase>
                                {values(this.props.product.allAttributes).map((attribute, i) => (
                                    <NameX key={i}>{attribute.id.toUpperCase()}:
                                        <XXCase>{
                                            attribute.items?.map((m: MainPageQuery_category_products_attributes_items, i: number) => {
                                                const [keysA] = Object.keys(this.props.product?.selectedAttributes)
                                                const Xvalues = values(this.props.product?.selectedAttributes)
                                                if (keysA === 'Color') {
                                                    Xvalues.reverse()
                                                }
                                                const [valuesA, valuesB, valuesC] = Xvalues

                                                if (attribute.id === 'Color') {
                                                    if (m?.id === valuesA) {
                                                        return <ColorAtt key={i} backColor={`${m?.value}`}
                                                                         border={'4px rgb(94,206,123) solid'}/>
                                                    } else if (m?.id === valuesB) {
                                                        return <ColorAtt key={i} backColor={`${m?.value}`}
                                                                         border={'4px rgb(94,206,123) solid'}/>
                                                    } else if (m?.id === valuesC) {
                                                        return <ColorAtt key={i} backColor={`${m?.value}`}
                                                                         border={'4px rgb(94,206,123) solid'}/>
                                                    } else {
                                                        return <ColorAtt key={i} backColor={`${m?.value}`}
                                                                         border={'solid 1px black'}/>
                                                    }
                                                } else {
                                                    if (m?.id === valuesA) {
                                                        return <SelectedAtt key={i}>{m?.value}</SelectedAtt>
                                                    } else if (m?.id === valuesB) {
                                                        return <SelectedAtt key={i}>{m?.value}</SelectedAtt>
                                                    } else if (m?.id === valuesC) {
                                                        return <SelectedAtt key={i}>{m?.value}</SelectedAtt>
                                                    } else {
                                                        return <Att key={i}>{m?.value}</Att>
                                                    }
                                                }
                                            })
                                        }</XXCase>
                                    </NameX>
                                ))
                                }
                            </XCase>
                        </Info>
                        <ButtonsAndPhoto>
                            <ButtonBlock>
                                <Button
                                    onClick={() => addProduct(this.props.product.id, this.props.product.selectedAttributes, this.props.product.allAttributes, this.props.product.price, this.props.product.photo)}
                                >
                                    +
                                </Button>
                                <Quantity>{this.props.product?.quantity}</Quantity>
                                <Button
                                    onClick={() => removeProduct(this.props.product.id,
                                        this.props.product.selectedAttributes,
                                        this.props.product.allAttributes,
                                        this.props.product.price,
                                        this.props.product.photo)}
                                >
                                    -
                                </Button>
                            </ButtonBlock>
                            <PhotoBlock>
                                <ArrowsContainer>
                                    <Arrow onClick={() => this.changePhoto('left')}>
                                        <ArrowLeft/>
                                    </Arrow>
                                    <Arrow onClick={() => this.changePhoto('right')}>
                                        <ArrowRight/>
                                    </Arrow>
                                </ArrowsContainer>
                                <Miniature src={this.props.product.photo[this.state.mainPhotoIndex]}/>
                            </PhotoBlock>
                        </ButtonsAndPhoto>
                    </Product>
                }}
            </ShopCartContext.Consumer>
        );
    }
}

export default ProductInCart;
