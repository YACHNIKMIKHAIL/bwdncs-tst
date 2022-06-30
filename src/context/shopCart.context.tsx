import React, {Component} from 'react';
import {graphql} from '@apollo/client/react/hoc';
import {isEqual} from 'lodash';
import {GET_ITEMS_BY_CATEGORY} from '../graphql/query';
import {
    MainPageQuery_category_products_attributes,
    MainPageQuery_category_products_prices,
} from '../graphql/__generated__/MainPageQuery';
import {CurrencyContext} from './currency.context';

export type CurrencyType = {
    label: string
    symbol: string
}

export interface ShopCartProduct {
    id: string,
    selectedAttributes: object,
    photo: string[],
    allAttributes?: MainPageQuery_category_products_attributes[] | undefined,
    price: CurrencyType[] | any,
    quantity: number
}

interface ShopCartState {
    addProduct: (id: string, selectedAttributes: object, allAttributes: MainPageQuery_category_products_attributes[] | undefined, price: MainPageQuery_category_products_prices[], photo: string[]) => void,
    removeProduct: (id: string, selectedAttributes: object, allAttributes: MainPageQuery_category_products_attributes[] | undefined, price: MainPageQuery_category_products_prices[], photo: string[]) => void,
    products: ShopCartProduct[]
}

interface ShopCartInternalState {
    products: ShopCartProduct[]
}

export const ShopCartContext = React.createContext({} as ShopCartState);

class ShopCartContextProvider extends Component<{}, ShopCartInternalState> {
    state: ShopCartInternalState = {products: []};

    static contextType = CurrencyContext;

    addProduct(id: string, selectedAttributes: object, allAttributes: MainPageQuery_category_products_attributes[] | undefined, price: MainPageQuery_category_products_prices[], photo: string[]) {
        const existingProduct = this.state.products.find((x: ShopCartProduct) => x.id === id && isEqual(x.selectedAttributes, selectedAttributes));
        if (existingProduct) {
            existingProduct.quantity += 1;
            this.setState({products: this.state.products.slice(0)});
        } else {
            this.state.products.push({
                id,
                selectedAttributes,
                allAttributes,
                price,
                photo,
                quantity: 1,
            });
            this.setState({products: this.state.products.slice(0)});
        }
    }

    removeProduct(id: string, selectedAttributes: object, allAttributes: MainPageQuery_category_products_attributes[] | undefined) {
        const existingProduct = this.state.products.find((x: ShopCartProduct) => x.id === id && isEqual(x.selectedAttributes, selectedAttributes) && isEqual(x.allAttributes, allAttributes));

        if (existingProduct && existingProduct.quantity > 1) {
            existingProduct.quantity -= 1;
            this.setState({products: this.state.products.slice(0)});
        } else {
            this.setState(
                {
                    products: this.state.products.filter(
                        (product) => product.id !== id || !isEqual(product.selectedAttributes, selectedAttributes) || !isEqual(product.allAttributes, allAttributes),
                    ),
                },
            );
        }
    }

    render() {
        return (
            <ShopCartContext.Provider
                value={{
                    addProduct: (id, selectedAttributes, allAttributes, price, photo) => this.addProduct(id, selectedAttributes, allAttributes, price, photo),
                    removeProduct: (id, selectedAttributes, allAttributes) => this.removeProduct(id, selectedAttributes, allAttributes),
                    products: this.state.products.map((product) => {
                        return {
                            ...product,
                            price: product.price.find((price: MainPageQuery_category_products_prices) => price?.currency.label === this.context.currency.label).amount
                        }
                    }),
                }}
            >
                {this.props.children}
            </ShopCartContext.Provider>
        );
    }
}

export default graphql(GET_ITEMS_BY_CATEGORY, {
    options: () => {
        return {
            variables: {title: ""}
        }
    }
})
(ShopCartContextProvider);
