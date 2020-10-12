import React from 'react';

import {CartItemContainer, ItemDetailsContainer, CartItemImage} from './cart-item.styles';

const cartItem = ({item : {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item"/>
        <ItemDetailsContainer>
            <span>{name}</span>
            <span> {quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
);


export default cartItem;