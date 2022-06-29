import React, {Component} from 'react';
import {graphql} from '@apollo/client/react/hoc';
import {GET_CURRENCIES} from '../graphql/query';

export const CurrencyContext = React.createContext({});
type GraphDataType = any //very difficult dynamic object
type CurrencyDataType = { currency: string }

class CurrencyContextProvider extends Component<GraphDataType,CurrencyDataType > {
    state: CurrencyDataType = {} as CurrencyDataType;

    render() {
        return (
            <CurrencyContext.Provider value={{
                currency: this.state.currency || this.props?.data?.currencies?.[0],
                setCurrency: (newCurrency: string) => this.setState({currency: newCurrency}),
                currencies: this.props?.data?.currencies || [],
            }}
            >
                {this.props.children}
            </CurrencyContext.Provider>
        );
    }
}

export default graphql(GET_CURRENCIES)(CurrencyContextProvider);
