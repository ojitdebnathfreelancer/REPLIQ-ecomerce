import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { ContextBDFood } from '../../../ContextProvider/ContextProvider';
import Loading from '../../../Sheared/Loading/Loading';

const Details = () => {
    const food = useLoaderData();
    const { user, loading } = useContext(ContextBDFood);

    const addToCart = (product) => {
        axios.post('https://bd-ecomere-server.vercel.app/cart', {
            name: product.name,
            img: product.img,
            discription: product.discription,
            price: product.price,
            quantity: 1,
            id: product._id,
            userName: user.displayName,
            userEmail: user.email
        },
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
            .then(data => {
                if (data.data.acknowledged) {
                    toast.success("Add To Cart Success");
                }
            })
            .catch(error => console.log(error));
    };
    // const add to card 

    return (
        <>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className='max-w-7xl mx-auto my-10 px-5'>
                        <div className='bg-white p-5 rounded-md'>
                            <div className='lg:flex md:flex gap-10 items-center'>
                                <img className='lg:h-80 h-56 rounded-lg' src={food?.img} alt="" />
                                <div>
                                    <p className='capitalize lg:text-start text-justify'>
                                        {food?.discription}
                                    </p>
                                    <h1 className='text-lg capitalize font-bold my-2'>{food?.name}</h1>
                                    <p className='text-lg capitalize font-bold my-2'>price {food?.price}$</p>
                                    {
                                        user ?
                                            <button onClick={() => addToCart(food)} className="btn capitalize px-8 py-1 hover:bg-white bg-[#8E2DE2] hover:text-black text-lg text-white">Add To Cart</button>
                                            :
                                            <button className="btn capitalize px-8 py-1 hover:bg-white bg-[#8E2DE2] hover:text-black text-lg text-white">Add To Cart</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Details;