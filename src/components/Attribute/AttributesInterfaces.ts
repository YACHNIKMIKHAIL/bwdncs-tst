import {
    MainPageQuery_category_products_attributes as MainPageQueryCategoryProductsAttributes
} from "../../graphql/__generated__/MainPageQuery";

export interface AttributeProps {
    attribute: MainPageQueryCategoryProductsAttributes;
    onAttributeSelect: (attributeItem: string) => void;
    selectedAttribute: string | null;
}

export interface DisabledAttributeProps {
    attribute: MainPageQueryCategoryProductsAttributes;
}