import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ContextBDFood } from '../../ContextProvider/ContextProvider';
import Loading from '../../Sheared/Loading/Loading';
import CheckoutForm from '../../Sheared/Payment/CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const { user } = useContext(ContextBDFood);



    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
    };

    localStorage.setItem('cart', JSON.stringify({ total, quantity }));

    const billInfo = { name: user?.displayName, email: user?.email, total };

    useEffect(() => {
        if (user.email) {
            axios.get(`https://bd-ecomere-server.vercel.app/cart?email=${user.email}`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            )
                .then(data => {
                    setCart(data.data);
                    setLoading(false);
                })
                .catch(error => console.log(error));
        }
    }, [setLoading, user, refresh]);
    // get added to cart data of current user 

    const handelDelete = (id) => {
        axios.delete(`https://bd-ecomere-server.vercel.app/cart/${id}?email=${user.email}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
            .then(data => {
                if (data.data.acknowledged) {
                    toast.success('Deleted Sucess');
                    setRefresh(!refresh)
                }
            })
            .catch(error => console.log(error));
    };
    // add to card product delete 

    return (
        <>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <>
                        {
                            cart.length === 0 ?

                                <p className='lg:text-4xl text-xl text-white lg:mt-10 mt-5 text-center'>No Data To Show</p>

                                :
                                <>
                                    {
                                        cart.map(car => <div key={car._id} className='w-[100%] md:w-[70%] lg:w-[50%] mx-auto mt-3 md:mt-5 lg:mt-10 px-5'>
                                            <div>
                                                <div className='flex p-2 md:p-5 lg:p-5 border-2 border-info mt-5 rounded-lg bg-white'>
                                                    <div className='flex justify-center items-center'>
                                                        <img className='h-20 w-36 md:w-28 lg:w-28 rounded-md' src={car?.img} alt="product" />
                                                    </div>
                                                    <div className='w-full md:flex lg:flex justify-between items-center ml-5'>
                                                        <div>
                                                            <p className='capitalize font-semibold'>{car?.name}</p>
                                                            <p className='capitalize'>Quantity {car?.quantity}</p>
                                                            <p className='capitalize'>Price {car?.price}$</p>
                                                        </div>
                                                        <div className='flex justify-center'>
                                                            <button onClick={() => { handelDelete(car._id) }} className='bg-[#8E2DE2] text-white h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded-full flex justify-center items-center lg:mt-0 mt-2'>
                                                                <MdDelete className='h-6 w-6 md:h-9 md:w-9 lg:h-9 lg:w-9' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                    }
                                    <div className='mt-2 flex justify-center items-center text-white my-5'>
                                        <div className='lg:w-[50%] rounded-md text-center'>
                                            <p className='text-xl font-semibold capitalize'>Products: {cart.length}</p>
                                            <p className='text-xl font-semibold capitalize'>Total Quanity: {quantity}</p>
                                            <p className='text-xl font-semibold capitalize'>Total Cost: {total}$</p>

                                            <div className='flex justify-center'>
                                                <div className='my-6 lg:w-84 md:w-80 w-72'>
                                                    <Elements stripe={stripePromise}>
                                                        <CheckoutForm billInfo={billInfo}></CheckoutForm>
                                                    </Elements>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        }
                    </>
            }
        </>
    );
};

export default Cart;