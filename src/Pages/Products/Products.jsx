import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { ContextBDFood } from '../../ContextProvider/ContextProvider';
import Loading from '../../Sheared/Loading/Loading';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(ContextBDFood);

    useEffect(() => {
        axios.get('https://bd-ecomere-server.vercel.app/foods', {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(data => {
                setProducts(data.data);
                setLoading(false);
            });
    }, [setLoading]);
    // fetching data from db 


    const loginToast = () => {
        toast.error("Please login befor navigate")
    };
    // login toast 

    return (
        <>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className='max-w-7xl mx-auto grid gap-5 lg:grid-cols-4 md:grid-cols-3 px-5 my-10'>
                        {
                            products.map(product => <div key={product._id} className="card bg-base-100 shadow-xl">
                                <figure><img className='h-[197px]' src={product?.img} alt="food" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title capitalize">{product?.name}</h2>
                                    <p className='capitalize'>{product?.discription.slice(0, 48)}...</p>
                                    <div className="card-actions justify-end">
                                        {
                                            user ?
                                                <Link to={`/details/${product?._id}`}>
                                                    <button className="btn capitalize px-8 py-1 hover:bg-white bg-[#8E2DE2] hover:text-black text-lg text-white">Details</button>
                                                </Link>
                                                :
                                                <Link>
                                                    <button onClick={() => loginToast()} className="btn capitalize px-8 py-1 hover:bg-white bg-[#8E2DE2] hover:text-black text-lg text-white">Details</button>
                                                </Link>
                                        }
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
            }
        </>
    );
};

export default Products;