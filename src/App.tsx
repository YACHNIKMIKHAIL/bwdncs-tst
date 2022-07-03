import React from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from '@apollo/client';
import {createGlobalStyle} from 'styled-components';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import CurrencyContextProvider from './context/currency.context';
import MainPage from './pages/MainPage/MainPage';
import FullProductInfo from './pages/FullProductInfo/FullProductInfo';
import ShopCardContextProvider from './context/shopCart.context';
import FullShopCard from './pages/FullShopCart/FullShopCart';
import {ShopRoutes} from "./Routes";
import NotFound from "./pages/404/NotFound";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

const history = createBrowserHistory();

class App extends React.Component {
    render() {
        return <Router history={history}>
            <ApolloProvider client={client}>
                <CurrencyContextProvider>
                    <ShopCardContextProvider>
                        <Switch>
                            <Route path={ShopRoutes.product} component={FullProductInfo}/>
                            <Route path={ShopRoutes.shopcart} component={FullShopCard}/>
                            <Route path={ShopRoutes.category} component={MainPage}/>
                            <Route path={ShopRoutes.all} component={MainPage}/>
                            <Route path={ShopRoutes.notFound} component={NotFound}/>
                        </Switch>
                    </ShopCardContextProvider>
                </CurrencyContextProvider>
                <GlobalStyle/>
            </ApolloProvider>
        </Router>
    }
}

export default App;
