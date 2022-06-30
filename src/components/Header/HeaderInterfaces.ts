import {CategoryType, MainPageQuery} from "../../graphql/__generated__/MainPageQuery";
import {ChildDataProps, DataProps, MutateProps} from "@apollo/client/react/hoc";
import {CurrencyType} from "../../context/shopCart.context";

export interface HeaderProps {
    showOverlay: (state: boolean) => void
    category?: string
    categories?: CategoryType[]
}

export type HeaderConstructorPropsType =
    HeaderProps
    & Partial<DataProps<MainPageQuery, {}>>
    & Partial<MutateProps<MainPageQuery, {}>>

export type HeaderConstructorSuperPropsType =
    ChildDataProps<HeaderProps, MainPageQuery, {}>
    | Readonly<ChildDataProps<HeaderProps, MainPageQuery, {}>>

export type EventType = { target: Node | null }

export type HeaderMainType = ChildDataProps<HeaderProps, MainPageQuery, {}>

export type CurrenciesMapProps = {
    currencies: CurrencyType[],
    callback: (currency:CurrencyType)=>void
}

export type NamesMapProps = {
    categoriesNames: string[],
    category?: string
}