import React, {Component} from 'react';
import {MainPageQuery_category_products_attributes_items} from "../../graphql/__generated__/MainPageQuery";
import {values} from "lodash";
import {ShopCartProduct} from "../../context/shopCart.context";
import {CCase, SCAtt, SCColorAtt, SCSelectedAtt} from "./ShopCartMiniStyle";

type ShopAttributesMapProps = {
    items: MainPageQuery_category_products_attributes_items[] | undefined
    product:ShopCartProduct
    attName:string
}

export class ShopAttributesMap extends Component<ShopAttributesMapProps> {
    render() {
        return (
            <CCase>{
                this.props.items?.map((m: MainPageQuery_category_products_attributes_items | null, i: number) => {
                    const [keysA] = Object.keys(this.props.product?.selectedAttributes)
                    const Xvalues = values(this.props.product?.selectedAttributes)

                    if (keysA === 'Color') {
                        Xvalues.reverse()
                    }
                    const [valuesA, valuesB, valuesC] = Xvalues

                    if (this.props.attName === 'Color') {
                        if (m?.id === valuesA) {
                            return <SCColorAtt key={i}
                                               border={'2px rgb(94,206,123) solid'}
                                               backColor={`${m?.value}`}
                            />
                        } else if (m?.id === valuesB) {
                            return <SCColorAtt key={i}
                                               border={'2px rgb(94,206,123) solid'}
                                               backColor={`${m?.value}`}
                            />
                        } else if (m?.id === valuesC) {
                            return <SCColorAtt key={i}
                                               border={'2px rgb(94,206,123) solid'}
                                               backColor={`${m?.value}`}
                            />
                        } else {
                            return <SCColorAtt key={i}
                                               backColor={`${m?.value}`}
                                               border={'solid 1px black'}/>
                        }
                    } else {
                        if (m?.id === valuesA) {
                            return <SCSelectedAtt
                                key={i}>{m?.value}</SCSelectedAtt>
                        } else if (m?.id === valuesB) {
                            return <SCSelectedAtt
                                key={i}>{m?.value}</SCSelectedAtt>
                        } else if (m?.id === valuesC) {
                            return <SCSelectedAtt
                                key={i}>{m?.value}</SCSelectedAtt>
                        } else {
                            return <SCAtt key={i}>{m?.value}</SCAtt>
                        }
                    }
                })
            }</CCase>
        );
    }
}