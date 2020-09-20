import React from 'react';
import './stripe-button.scss';
import swal from 'sweetalert';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HTM6uGWnoxq6DTlolu1vlTmohnJOkmpcb2wErvhinfkhaRH4nA4NFNFInIyHR9MSI76PQjSZ5ibyI3FyJ0QhWzx004qCqIvQb';

   const onToken = token => {
        swal('Payment Successful!');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name ='MSX Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i.CUz.svg'
            description={`your total is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;