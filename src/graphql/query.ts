import {gql} from '@apollo/client';

export const GET_ALL_INFO = gql`
    query MainPageQuery {
        category {
            name
            products {
                id
                name
                gallery
                category
                description
                prices{
                    amount
                    currency{
                       label
                      symbol
                    }
                }
                inStock
                attributes {
                    id
                    items {
                        displayValue
                        id
                        value
                    }
                    name
                    type
                }
            }
        }
        currencies{
          label
          symbol
        }
    }
`;

export const getItems = gql`
  query {
    category {
      products {
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
  }
`;

export const getAllProducts = gql`
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

export const getItemsByCategory = gql`
  query getItemsByCategory($title: String!) {
    category(input: { title: $title }) {
      products {
        id
        name
        brand
        gallery
        inStock
        prices {
          currency
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

export const GET_CATEGORIES = gql`
  query HeaderPageQuery {
     categories {
      name
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

export const getItemsById = gql`
query getItemsById($id: String!) {
  product(id: $id ) {
    id
    brand
    name
    gallery
    inStock
    prices {
      currency
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





