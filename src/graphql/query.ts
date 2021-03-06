import {gql} from '@apollo/client';

export const GET_ALL_PRODUCTS = gql`
  query {
    category {
      name
      products {
        id
        name
        gallery
        inStock
        description
        prices {
          currency{
                       label
                      symbol
                    }
          amount
        }
        attributes {
          id
          name
          type
          items {
            value
            displayValue
            id
          }
          items {
            displayValue
            value
            id
          }
        }
        brand
      }
    }
  }
`;

export const GET_ITEMS_BY_CATEGORY = gql`
  query getItemsByCategory($title: String!) {
    category(input: { title: $title }) {
      products {
        id
        name
        brand
        gallery
        inStock
        prices {
          currency{
          label
          symbol
        }
          amount
        }
        category
        description
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export const GET_CURRENCIES = gql`
  query {
    categories {
          name
        }
    currencies{
          label
          symbol
        }
  }
`;

export const GET_CURRENT_ITEM = gql`
query ($id: String!) {
  product( id: $id ) {
    id
    brand
    name
    gallery
    inStock
    prices {
      currency{
          label
          symbol
        }
      amount
    }
    category
    description
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
  }
}
`;
