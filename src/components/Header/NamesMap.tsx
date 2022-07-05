import React, {Component} from 'react';
import Name from "../Name/Name";
import {Categories} from "./HeaderStyles";
import {NamesMapProps} from "./HeaderInterfaces";

export class NamesMap extends Component<NamesMapProps> {
    render() {
        const {category = 'all'} = this.props
        return (
            <Categories>
                {this.props.categoriesNames.map(
                    (name, i) => {
                        let routeTo: string = name !== 'all' ? name : ''
                        return <Name
                            nameOfCategory={name}
                            key={i}
                            currentlyChosen={name !== category}
                            to={`/${routeTo}`}
                        />
                    },
                )}
            </Categories>
        );
    }
}