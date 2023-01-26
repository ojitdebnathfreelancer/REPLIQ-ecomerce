import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {

    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return
    }
    return (
        <div className='flex justify-center'>
            <div className='my-6 lg:w-84 md:w-80 w-72'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;