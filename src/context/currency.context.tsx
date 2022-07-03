import React, {Component, FunctionComponent} from 'react';
import {DataProps, graphql, MutateProps} from '@apollo/client/react/hoc';
import {GET_CURRENCIES} from '../graphql/query';
import {CurrencyType} from "./shopCart.context";

export const CurrencyContext = React.createContext({});
type DataType = {
    data: {
        categories: string[] | [];
        name: string, currencies: CurrencyType[]
    }
}
type GraphDataType = FunctionComponent<Partial<DataProps<{}, {}>> & Partial<MutateProps<{}, {}>>> & DataType

type CurrencyDataType = {
    currency: string,
    categories: string [],
}

class CurrencyContextProvider extends Component<GraphDataType, CurrencyDataType> {
    state: CurrencyDataType = {} as CurrencyDataType;

    render() {
        // console.log('CurrencyContextProvider',this.props.data.categories)
        return (
            <CurrencyContext.Provider value={{
                currency: this.state.currency || this.props?.data?.currencies?.[0],
                setCurrency: (newCurrency: string) => this.setState({currency: newCurrency}),
                currencies: this.props?.data?.currencies || [],
                categories: this.props.data.categories || []
            }}
            >
                {this.props.children}
            </CurrencyContext.Provider>
        );
    }
}

export default graphql(GET_CURRENCIES)(CurrencyContextProvider as unknown as GraphDataType);