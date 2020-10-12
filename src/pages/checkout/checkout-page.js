import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartTotal,selectCartItems} from '../../redux/cart/cart-selector';
import CheckoutList from '../../components/checkout-list/checkout-list';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout-page.styles';


const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckoutList key={cartItem.id} cartItem = {cartItem}/>
            ))}

        <TotalContainer>
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <WarningContainer>
            !!!Please the following test credit card for payments!!!
            <br/>
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </WarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);