import React, {Component} from 'react';
import {CategoryAndProducts, CategoryName, Container, FakeList, MainDiv, Overlay, ProductList} from './MainPageStyle';
import {RouteComponentProps} from 'react-router';
import {ChildDataProps, graphql, QueryControls} from '@apollo/client/react/hoc';
import ProductCard from '../../components/ProductCart/ProductCart';
import Header from '../../components/Header/Header';
import {GET_ITEMS_BY_CATEGORY} from '../../graphql/query';
import {MainPageQuery} from '../../graphql/__generated__/MainPageQuery';
import {capitalize} from "lodash";
import {CurrencyContext} from "../../context/currency.context";
import {ShopRoutes} from "../../Routes";

interface MatchParams {
    category: string;
}

interface MainPageProps extends RouteComponentProps<MatchParams> {
    data: MainPageQuery & QueryControls<MainPageQuery, {}>
    categoriesNames?: string[]
}

class MainPage extends Component<ChildDataProps<MainPageProps, MainPageQuery, {}>> {
    static contextType = CurrencyContext;
    state = {showOverlay: false};

    render() {
        let filteredProducts = this.props?.data?.category?.products;
        let {category} = this.props.match.params;
        const allCategories = this.context.categories.map((m: { name: string }) => m.name)
        if (allCategories) {
            if (allCategories.includes(category) || category === undefined) {
                if (category === undefined) {
                    category = 'all'
                }
            } else {
                this.props.history.push(ShopRoutes.all)
            }
        }

        const showOverlay = (state: boolean) => {
            this.setState({showOverlay: state});
        };
        return (
            <MainDiv>
                <Header showOverlay={showOverlay} category={category}/>
                <Container>
                    {this.state.showOverlay && <Overlay/>}
                    <CategoryAndProducts>
                        <CategoryName>{capitalize(category)}</CategoryName>
                        <FakeList>
                            <ProductList>
                                {filteredProducts?.map((product, i) => (
                                    <ProductCard key={i + 1} product={product!}/>
                                ))}
                            </ProductList>
                        </FakeList>
                    </CategoryAndProducts>
                </Container>
            </MainDiv>
        );
    }
}


export default graphql<MainPageProps, MainPageQuery, {}, {}>(GET_ITEMS_BY_CATEGORY, {
    options: () => ({
        fetchPolicy: "no-cache",
        variables: {title: window.location.pathname.slice(1)}
    })
})(MainPage);
