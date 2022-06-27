import React, {Component} from 'react';
import {
    AttributeContainer,
    AttributeNameContainer,
    OneVariant,
    OneVariantWithColor,
    VariantsContainer, XCase
} from './AttributeStyles';
import {MainPageQuery_category_products_attributes as MainPageQueryCategoryProductsAttributes,} from '../../graphql/__generated__/MainPageQuery';

interface AttributeProps {
    attribute: MainPageQueryCategoryProductsAttributes;
    onAttributeSelect: (attributeItem: string) => void;
    selectedAttribute: string | null;
}

export class Attribute extends Component<AttributeProps> {

    render() {
        const attributeName = this.props?.attribute?.id;
        return (
            <AttributeContainer>
                <AttributeNameContainer>
                    {`${attributeName?.toUpperCase()}:`}
                </AttributeNameContainer>
                <VariantsContainer>
                    {this.props.attribute.type === 'swatch' && this.props?.attribute?.items?.map(
                        (variant) => {
                            return <OneVariantWithColor
                                key={variant?.id}
                                selected={this.props.selectedAttribute === variant?.id}
                                backColor={variant?.value!}
                                onClick={() => this.props.onAttributeSelect(variant!.id)}
                            >
                                {/*I don't know what is the ...? but UI work =]*/}
                                {this.props.selectedAttribute === variant?.id && <XCase backColor={variant?.value!}/>}
                            </OneVariantWithColor>

                        },
                    )}

                    {this.props.attribute.type !== 'swatch' && this.props?.attribute?.items?.map(
                        (variant) => (
                            <OneVariant
                                key={variant?.id}
                                selected={this.props.selectedAttribute === variant?.id}
                                onClick={() => this.props.onAttributeSelect(variant!.id)}
                            >
                                {variant?.value}
                            </OneVariant>
                        ),
                    )}
                </VariantsContainer>
            </AttributeContainer>
        )
            ;
    }
}
