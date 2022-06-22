import React, {Component} from 'react';
import {ChildDataProps, graphql} from '@apollo/client/react/hoc';
import currencyToSymbolMap from 'currency-symbol-map'
import {ReactComponent as LogoImage} from '../../images/logo.svg';
import {ReactComponent as ArrowDown} from '../../images/arrow-down.svg';
import {ReactComponent as ArrowUp} from '../../images/arrow-up.svg';
import {ReactComponent as ShopCart} from '../../images/shop-cart.svg';
import {CurrencyContext} from '../../context/currency.context';
import {ShopCartContext} from '../../context/shopCart.context';
import ShopCardMini from '../ShopCartMini/ShopCartMini';
import {MainPageQuery} from '../../graphql/__generated__/MainPageQuery';
import {GET_CURRENCIES} from '../../graphql/query';
import Name from '../Name/Name';
import {
    ArrowUpContainer,
    Categories,
    Currency,
    CurrencyAndShopCart,
    CurrencyMenu,
    CurrencyOpen,
    LogoStyle,
    MainContainer,
    NumberOfProducts,
    ShopCartContainer,
    ShopCartOpen,
    Symbols
} from "./HeaderStyles";


interface HeaderProps {
    showOverlay: (state: boolean) => void
    category?: string
}

class Header extends Component<ChildDataProps<HeaderProps, MainPageQuery, any>> {
    currencyWrapperRef: React.RefObject<HTMLDivElement>;
    shopCardWrapperRef: React.RefObject<HTMLDivElement>;
    state = {currencySwitcherOpen: false, shopCardSwitchOpen: false};

    static contextType = CurrencyContext;

    constructor(props: any) {
        super(props);
        this.currencyWrapperRef = React.createRef();
        this.shopCardWrapperRef = React.createRef();
    }

    handleClickOutside = (event: any) => {
        if (!this.currencyWrapperRef.current?.contains(event.target)) {
            this.setState({currencySwitcherOpen: false});
        }

        if (!this.shopCardWrapperRef.current?.contains(event.target)) {
            this.setState({shopCardSwitchOpen: false});
            this.props.showOverlay(false);
        }
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);

    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    render() {
        const currencies = this.context?.currencies;
        //@ts-ignore
        const products = this.props.data.categories
        const categoriesNames: string[] = [];
        // console.log(this.props.data.categories)
        if (products) {
            categoriesNames.push('all');

            for (let i = 0; i < products.length; i++) {
                if (!categoriesNames.includes(products[i]?.name!)) {
                    categoriesNames.push(products[i]?.name!);
                }
            }
        }

        return (
            <ShopCartContext.Consumer>
                {
                    ({products}) => {
                        return (
                            <MainContainer>
                                <Categories>
                                    {categoriesNames.map(
                                        (name,i) => (
                                            <Name
                                                nameOfCategory={name}
                                                key={i}
                                                currentlyChosen={name !== this.props.category}
                                                to={`/${name}`}
                                            />
                                        ),
                                    )}
                                </Categories>
                                <LogoStyle><LogoImage/></LogoStyle>
                                <CurrencyAndShopCart>
                                    <CurrencyOpen ref={this.currencyWrapperRef}>
                                        <Symbols
                                            onClick={() => this.setState({currencySwitcherOpen: !this.state.currencySwitcherOpen})}>
                                            {currencyToSymbolMap(this.context.currency)}
                                            {this.context.currency?.symbol
                                                ? <div>{this.context.currency.symbol}</div>
                                                : <div>USD</div>}
                                            <ArrowUpContainer>
                                                {!this.state.currencySwitcherOpen && <ArrowDown/>}
                                                {this.state.currencySwitcherOpen && <ArrowUp/>}
                                            </ArrowUpContainer>
                                        </Symbols>
                                        {this.state.currencySwitcherOpen
                                        && (
                                            <CurrencyMenu>
                                                {currencies.map((currency: { symbol: string, label: string }) => {
                                                    return <Currency
                                                        onClick={() => {
                                                            this.context.setCurrency(currency);
                                                            this.setState({currencySwitcherOpen: !this.state.currencySwitcherOpen});
                                                        }}
                                                        key={currency.label}
                                                    >
                                                        {/*{currencyToSymbolMap(currency.symbol) + ' ' + currency.label}*/}
                                                        {currency.symbol + ' ' + currency.label}
                                                    </Currency>
                                                })}
                                            </CurrencyMenu>
                                        )}
                                    </CurrencyOpen>
                                    <ShopCartContainer>
                                        <ShopCart
                                            onClick={() => {
                                                if (products.length < 1) {
                                                    alert('Dude! Cart is empty!')
                                                    return
                                                } else {
                                                    this.setState({shopCardSwitchOpen: !this.state.shopCardSwitchOpen});
                                                    this.props.showOverlay(!this.state.shopCardSwitchOpen);
                                                }

                                            }}
                                        />
                                        {products.length > 0 && <NumberOfProducts onClick={() => {
                                            this.setState({shopCardSwitchOpen: !this.state.shopCardSwitchOpen});
                                            this.props.showOverlay(!this.state.shopCardSwitchOpen);
                                        }}>{products.length}</NumberOfProducts>}
                                        <ShopCartOpen ref={this.shopCardWrapperRef}>
                                            {this.state.shopCardSwitchOpen && <ShopCardMini/>}
                                        </ShopCartOpen>
                                    </ShopCartContainer>
                                </CurrencyAndShopCart>
                            </MainContainer>
                        );
                    }
                }
            </ShopCartContext.Consumer>
        );
    }
}

export default graphql<HeaderProps, MainPageQuery>(GET_CURRENCIES)(Header);
