import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {ShopRoutes} from "../../Routes";
import styled from "styled-components";

type NotFoundStateType = {
    message: string
}
type NotFoundPropsType = {
    message: string
}

class NotFound extends Component<NotFoundPropsType, NotFoundStateType> {
    constructor(props: NotFoundPropsType) {
        super(props);
        this.state = {
            message: this.props.message
        }
    }

    sorryBro = () => {
        this.setState({
            message: 'Sorry bro, bad url =('
        })
    }
    setTimer = setTimeout(this.sorryBro, 500);

    componentWillUnmount() {
        clearTimeout(this.setTimer)
    }


    render() {
        return (
            <MainCase>
                <StyledLink to={ShopRoutes.all}>{this.state.message}</StyledLink>
            </MainCase>
        );
    }
}


export default (NotFound);

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5ECE7B;

  &:hover {
    border: 2px #5ECE7B solid;
    padding: 40px;
    border-radius: 20px;
  }
`;

export const MainCase = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
`;