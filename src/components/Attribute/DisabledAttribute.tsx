import React, {Component} from 'react';
import {
    AttributeContainer,
    AttributeNameContainer,
    OneVariant,
    OneVariantWithColor,
    VariantsContainer
} from './DisabledAttributeStyles';
import {DisabledAttributeProps} from "./AttributesInterfaces";


export class DisabledAttribute extends Component<DisabledAttributeProps> {
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
                                backColor={variant?.value!}
                            >
                                {/*I don't know what is the ...? but UI work =]*/}
                            </OneVariantWithColor>

                        },
                    )}

                    {this.props.attribute.type !== 'swatch' && this.props?.attribute?.items?.map(
                        (variant) => (
                            <OneVariant
                                key={variant?.id}
                            >
                                {variant?.displayValue}
                            </OneVariant>
                        ),
                    )}
                </VariantsContainer>
            </AttributeContainer>
        );
    }
}
