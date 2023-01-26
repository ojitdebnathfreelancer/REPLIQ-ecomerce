import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const CheckoutForm = ({ billInfo }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardErorr, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [trnsitionID, setTransitionID] = useState('');

    const {displayName, email, total} = billInfo;

    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ total }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [billInfo]);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: displayName,
                        email: email
                    },
                },
            },
        );

        if(confirmError){
            setCardError(confirmError.message)
            return ;
        };

        setTransitionID(paymentIntent.id);
        toast.success('Payment Success');

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='border-2 border-red-50 px-2 py-2 rounded-lg'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#ffff',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#e4ba00',
                            },
                        },
                    }}
                />
            </div>
            <p className='text-red-600 font-semibold text-xl text-center my-2'>{cardErorr}</p>

            <p className='text-green-500 font-semibold text-xl text-center my-2'>{trnsitionID}</p>

            <button className="btn capitalize px-8 py-1 bg-white hover:bg-[#8E2DE2] text-black text-lg hover:text-white mt-2" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;