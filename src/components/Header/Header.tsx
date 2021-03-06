import React, {Component} from 'react';
import {graphql} from '@apollo/client/react/hoc';
import currencyToSymbolMap from 'currency-symbol-map'
import {ReactComponent as LogoImage} from '../../images/logo.svg';
import {ReactComponent as ArrowDown} from '../../images/arrow-down.svg';
import {ReactComponent as ArrowUp} from '../../images/arrow-up.svg';
import {ReactComponent as ShopCart} from '../../images/shop-cart.svg';
import {CurrencyContext} from '../../context/currency.context';
import {CurrencyType, ShopCartContext} from '../../context/shopCart.context';
import ShopCardMini from '../ShopCartMini/ShopCartMini';
import {MainPageQuery} from '../../graphql/__generated__/MainPageQuery';
import {GET_CURRENCIES} from '../../graphql/query';
import {
    ArrowUpContainer,
    CurrencyAndShopCart,
    CurrencyOpen,
    LogoStyle,
    MainContainer,
    NumberOfProducts,
    ShopCartContainer,
    ShopCartOpen,
    Symbols
} from "./HeaderStyles";
import {
    EventType,
    HeaderConstructorPropsType,
    HeaderConstructorSuperPropsType,
    HeaderMainType,
    HeaderProps
} from "./HeaderInterfaces";
import {NamesMap} from "./NamesMap";
import {CurrenciesMap} from "./CurrenciesMap";

class Header extends Component<HeaderMainType> {
    currencyWrapperRef: React.RefObject<HTMLDivElement>;
    shopCardWrapperRef: React.RefObject<HTMLDivElement>;
    state = {currencySwitcherOpen: false, shopCardSwitchOpen: false};
    static contextType = CurrencyContext;

    constructor(props: HeaderConstructorPropsType) {
        super(props as HeaderConstructorSuperPropsType);
        this.currencyWrapperRef = React.createRef();
        this.shopCardWrapperRef = React.createRef();
    }

    handleClickOutside = (event: EventType) => {
        if (!this.currencyWrapperRef.current?.contains(event.target)) {
            this.setState({currencySwitcherOpen: false});
        }
        if (!this.shopCardWrapperRef.current?.contains(event.target)) {
            this.setState({shopCardSwitchOpen: false});
            this.props.showOverlay(false);
        }
    };

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside as EventListenerOrEventListenerObject);

    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside as EventListenerOrEventListenerObject);
    }


    render() {
        const currencies = this.context?.currencies;
        const products = this.props.data.categories
        const categoriesNames: string[] = [];
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
                                <NamesMap categoriesNames={categoriesNames} category={this.props.category}/>
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
                                                <CurrenciesMap callback={(currency: CurrencyType) => {
                                                    this.context.setCurrency(currency);
                                                    this.setState({currencySwitcherOpen: !this.state.currencySwitcherOpen});
                                                }} currencies={currencies}/>
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