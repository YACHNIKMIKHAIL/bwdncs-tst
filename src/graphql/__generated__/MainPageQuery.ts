export interface MainPageQuery_category_products_prices {
    __typename: "Price";
    amount: number;
    currency: {
        label: string
        symbol: string
    };
}

export interface MainPageQuery_category_products_attributes_items {
    __typename: "Attribute";
    displayValue: string | null;
    id: string;
    value: string | null;
}

export interface MainPageQuery_category_products_attributes {
    __typename: "AttributeSet";
    id: string;
    items: MainPageQuery_category_products_attributes_items[] | undefined
    name: string | null;
    type: string | null;
}

export interface MainPageQuery_category_products {
    __typename: "Product";
    id: string;
    name: string;
    brand: string;
    gallery: (string | null)[] | null;
    category: string;
    description: string;
    prices: MainPageQuery_category_products_prices[];
    inStock: boolean | null;
    attributes: MainPageQuery_category_products_attributes[] | undefined
}

export interface MainPageQuery_category {
    __typename: "Category";
    name: string | null;
    products: (MainPageQuery_category_products | null)[];
}

export type CategoryType = { name: string }

export interface MainPageQuery {
    categories?: CategoryType[]
    product?: MainPageQuery_category_products
    category: MainPageQuery_category | null;
    currencies: (string | null)[] | null;
}

export type MainDataType = MainPageQuery_category_products_prices |
    MainPageQuery_category_products_attributes_items |
    MainPageQuery_category_products_attributes |
    MainPageQuery_category_products |
    MainPageQuery_category |
    CategoryType |
    MainPageQuery