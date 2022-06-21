import { gql } from '@apollo/client';

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

export const GET_CATHEGORY_CURRENCY = gql`
    query FirstQuery {
        category {
            name
            products {
                id
                name
                gallery
                category
                prices{
                    amount
                    currency{
                       label
                      symbol
                    }
                }
                inStock
            }
        }
        currencies{
          label
          symbol
        }
    }
`;





