import React, {Component} from 'react';
import {CategoryAndProducts, CategoryName, Container, MainDiv, Overlay, ProductList} from './MainPageStyle';
import {RouteComponentProps} from 'react-router';
import {ChildDataProps, graphql, QueryControls} from '@apollo/client/react/hoc';
import ProductCard from '../../components/ProductCart/ProductCart';
import Header from '../../components/Header/Header';
import {GET_ALL_INFO, getAllProducts, getItems} from '../../graphql/query';
import {MainPageQuery} from '../../graphql/__generated__/MainPageQuery';
import {capitalize} from "lodash";

interface MatchParams {
    category: string;
}

interface MainPageProps extends RouteComponentProps<MatchParams> {
    data: MainPageQuery & QueryControls<MainPageQuery, {}>
}

class MainPage extends Component<ChildDataProps<MainPageProps, MainPageQuery, {}>> {
    state = {showOverlay: false};

    render() {
        const products = this.props?.data?.category?.products;
        const {category} = this.props.match.params;
        const showOverlay = (state: boolean) => {
            this.setState({showOverlay: state});
        };

        let filteredProducts = products;

        if (category && category !== 'all') {
            filteredProducts = products?.filter((product) => product?.category === category);
        }

        return (
            <MainDiv>
                <Header showOverlay={showOverlay} category={category}/>
                <Container>
                    {this.state.showOverlay && <Overlay/>}
                    <CategoryAndProducts>
                        <CategoryName>{capitalize(category)}</CategoryName>
                        <ProductList>
                            {filteredProducts?.map((product, i) => (
                                <ProductCard key={i+1} product={product!}/>
                            ))}
                        </ProductList>
                    </CategoryAndProducts>
                </Container>
            </MainDiv>
        );
    }
}

export default graphql<MainPageProps, MainPageQuery, {}, {}>(getAllProducts)(MainPage);
