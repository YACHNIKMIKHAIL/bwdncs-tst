import React, {Component} from 'react';
import Name from "../Name/Name";
import {Categories} from "./HeaderStyles";
import {NamesMapProps} from "./HeaderInterfaces";

export class NamesMap extends Component<NamesMapProps> {
    render() {
        return (
            <Categories>
                {this.props.categoriesNames.map(
                    (name, i) => (
                        <Name
                            nameOfCategory={name}
                            key={i}
                            currentlyChosen={name !== this.props.category}
                            to={`/${name}`}
                        />
                    ),
                )}
            </Categories>
        );
    }
}