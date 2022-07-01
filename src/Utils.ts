import {
    MainPageQuery_category_products_prices as MainPageQueryCategoryProductsPrices
} from './graphql/__generated__/MainPageQuery';
import {ShopCartProduct} from "./context/shopCart.context";

export const getPrice = (prices: MainPageQueryCategoryProductsPrices[] | [], currency: {
    label: string
    symbol: string
}) => {
    for (let i = 0; i < prices.length; i++) {
        if (prices[i]?.currency.label === currency.label) {
            return prices[i].amount;
        }
    }
    return null;
};

export const getSymbol = (prices: MainPageQueryCategoryProductsPrices[] | [], currency: {
    label: string
    symbol: string
}) => {
    for (let i = 0; i < prices.length; i++) {
        if (prices[i]?.currency.label === currency.label) {
            return prices[i].currency.symbol;
        }
    }
    return null;
};
export const findMyInfo = (products: ShopCartProduct[]) => {
    const resFindMyInfo = {
        all: 0,
        tax: 0,
        totalPrice: 0,
        qua: 0,
    }
    const all = products
        .map((m: ShopCartProduct) => Number(m.price) * m.quantity)
        .reduce((acc: number, el: number) => {
            return acc + el
        })
    const tax = all * 0.21
    const totalPrice = all + tax
    const qua = products
        .map((m: ShopCartProduct) => m.quantity)
        .reduce((acc: number, el: number) => {
            return acc + el
        })
    resFindMyInfo.all = all
    resFindMyInfo.tax = tax
    resFindMyInfo.totalPrice = totalPrice
    resFindMyInfo.qua = qua
    return resFindMyInfo
};