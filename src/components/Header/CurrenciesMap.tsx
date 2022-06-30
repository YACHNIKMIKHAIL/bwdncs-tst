import React, {Component} from 'react';
import {Currency, CurrencyMenu} from "./HeaderStyles";
import {CurrencyType} from "../../context/shopCart.context";
import {CurrenciesMapProps} from "./HeaderInterfaces";

export class CurrenciesMap extends Component<CurrenciesMapProps> {
    render() {
        return (
            <CurrencyMenu>
                {this.props.currencies.map((currency: CurrencyType) => {
                    return <Currency
                        onClick={()=>this.props.callback(currency)}
                        key={currency.label}
                    >
                        {currency.symbol + ' ' + currency.label}
                    </Currency>
                })}
            </CurrencyMenu>
        );
    }
}