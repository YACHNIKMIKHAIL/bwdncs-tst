import React, {Component} from 'react';
import {
    Product,
    Info,
    Name,
    Price,
    Attribute,
    ButtonsAndPhoto,
    ButtonBlock,
    Quantity,
    Button,
    PhotoBlock,
    ArrowsContainer,
    Arrow,
    Miniature
} from './ProductInCartStyle';
import {ReactComponent as ArrowLeft} from "../../images/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../../images/arrow-right.svg";
import {values} from "lodash";
import {CurrencyContext} from "../../context/currency.context";
import {ShopCartContext, ShopCartProduct} from '../../context/shopCart.context';

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
                {({addProduct, removeProduct}) => (
                    <Product key={this.props.product.id}>
                        <Info>
                            <Name>{this.props.product.id}</Name>
                            <Price>{this.context.currency.symbol + this.props.product.price * this.props.product.quantity}</Price>
                            <div>
                                {values(this.props.product?.selectedAttributes).map((attribute,i) => (
                                    <Attribute key={i}>{attribute}</Attribute>))}
                            </div>
                        </Info>
                        <ButtonsAndPhoto>
                            <ButtonBlock>
                                <Button
                                    onClick={() => addProduct(this.props.product.id,
                                        this.props.product.selectedAttributes,
                                        this.props.product.allAttributes,
                                        this.props.product.price,
                                        this.props.product.photo)}
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
                )}
            </ShopCartContext.Consumer>
        );
    }
}

export default ProductInCart;
