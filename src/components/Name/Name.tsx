import React, {Component} from 'react';
import {StyledLink, NameOfCategory} from './NameStyle';

interface NameProps {
    nameOfCategory: string
    currentlyChosen: boolean
    to: string
}

class Name extends Component<NameProps> {
    render() {
        return (
            <StyledLink to={this.props.to}>
                <NameOfCategory
                    selected={!this.props.currentlyChosen}
                    key={this.props.nameOfCategory}
                >
                    {this.props.nameOfCategory?.toUpperCase()}
                </NameOfCategory>
            </StyledLink>
        );
    }
}

export default Name;
