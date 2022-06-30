import React, {Component} from 'react';
import {values} from "lodash";
import {ShopCartProduct} from "../../context/shopCart.context";
import {NameX, XCase} from "../ProductInCart/ProductInCartStyle";
import {AttributesMap} from "../ProductInCart/AttributesMap";

type ValuesMapProps = {
    product:ShopCartProduct
}

export class ValuesMap extends Component<ValuesMapProps> {
    render() {
        return (
            <XCase>
                {values(this.props.product.allAttributes).map((attribute, i) => (
                    <NameX key={i}>{attribute.id.toUpperCase()}:
                        <AttributesMap items={attribute.items} product={this.props.product} attName={attribute.id}/>
                    </NameX>
                ))
                }
            </XCase>
        );
    }
}