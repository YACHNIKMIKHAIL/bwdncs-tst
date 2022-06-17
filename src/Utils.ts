import { MainPageQuery_category_products_prices as MainPageQueryCategoryProductsPrices } from './graphql/__generated__/MainPageQuery';

export const getPrice = (prices: MainPageQueryCategoryProductsPrices[] | [], currency: any) => {
  for (let i = 0; i < prices.length; i++) {
    if (prices[i]?.currency.label === currency.label) {
      return prices[i].amount;
    }
  }
  return null;
};

export const getSymbol = (prices: MainPageQueryCategoryProductsPrices[] | [], currency: any) => {
  for (let i = 0; i < prices.length; i++) {
    if (prices[i]?.currency.label === currency.label) {
      return prices[i].currency.symbol;
    }
  }
  return null;
};