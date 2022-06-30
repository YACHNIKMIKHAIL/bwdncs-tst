import React, {Component} from 'react';
import {Att, ColorAtt, SelectedAtt, XXCase} from "./ProductInCartStyle";
import {MainPageQuery_category_products_attributes_items} from "../../graphql/__generated__/MainPageQuery";
import {values} from "lodash";
import {ShopCartProduct} from "../../context/shopCart.context";

type AttributesMapProps = {
    items: MainPageQuery_category_products_attributes_items[] | undefined
    product:ShopCartProduct
    attName:string
}

export class AttributesMap extends Component<AttributesMapProps> {
    render() {
        return (
            <XXCase>{
                this.props.items?.map((m: MainPageQuery_category_products_attributes_items, i: number) => {
                    const [keysA] = Object.keys(this.props.product?.selectedAttributes)
                    const Xvalues = values(this.props.product?.selectedAttributes)
                    if (keysA === 'Color') {
                        Xvalues.reverse()
                    }
                    const [valuesA, valuesB, valuesC] = Xvalues

                    if (this.props.attName === 'Color') {
                        if (m?.id === valuesA) {
                            return <ColorAtt key={i} backColor={`${m?.value}`}
                                             border={'4px rgb(94,206,123) solid'}/>
                        } else if (m?.id === valuesB) {
                            return <ColorAtt key={i} backColor={`${m?.value}`}
                                             border={'4px rgb(94,206,123) solid'}/>
                        } else if (m?.id === valuesC) {
                            return <ColorAtt key={i} backColor={`${m?.value}`}
                                             border={'4px rgb(94,206,123) solid'}/>
                        } else {
                            return <ColorAtt key={i} backColor={`${m?.value}`}
                                             border={'solid 1px black'}/>
                        }
                    } else {
                        if (m?.id === valuesA) {
                            return <SelectedAtt key={i}>{m?.value}</SelectedAtt>
                        } else if (m?.id === valuesB) {
                            return <SelectedAtt key={i}>{m?.value}</SelectedAtt>
                        } else if (m?.id === valuesC) {
                            return <SelectedAtt key={i}>{m?.value}</SelectedAtt>
                        } else {
                            return <Att key={i}>{m?.value}</Att>
                        }
                    }
                })
            }</XXCase>
        );
    }
}