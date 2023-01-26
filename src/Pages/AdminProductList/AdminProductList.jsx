import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Loading from '../../Sheared/Loading/Loading';

const AdminProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

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
    }, [setLoading, refresh]);
    // fetching data from db 

    const handelDelete = (id) => {
        axios.delete(`https://bd-ecomere-server.vercel.app/food/${id}`,
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        )
            .then(data => {
                if (data.data.acknowledged) {
                    toast.success('Deleted Success');
                    setRefresh(!refresh);
                }
            })
            .catch(error => console.log(error))
    };
    // delete product from DB 

    return (
        <>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <>
                        <p className='text-white text-3xl text-center mt-5'>Total Products {products.length}</p>
                        {
                            products.map(product => <div key={product._id} className='w-[100%] md:w-[70%] lg:w-[50%] mx-auto mt-3 md:mt-5 lg:mt-10 px-5'>
                                <div>
                                    <div className='flex p-2 md:p-5 lg:p-5 border-2 border-info mt-5 rounded-lg bg-white'>
                                        <div className='flex justify-center items-center'>
                                            <img className='h-20 w-36 md:w-28 lg:w-28 rounded-md' src={product?.img} alt="product" />
                                        </div>
                                        <div className='w-full md:flex lg:flex justify-between items-center ml-5'>
                                            <div>
                                                <p className='capitalize font-semibold'>{product?.name}</p>
                                                <p className='capitalize'>Price {product?.price}$</p>
                                                <Link to={`/deshboard/productdetails/${product._id}`}>
                                                    <button className="capitalize border-2 rounded-xl border-black hover:border-[#8E2DE2] px-5 py-1 bg-white hover:bg-[#8E2DE2] text-black text-lg hover:text-white mt-2">Details</button>
                                                </Link>
                                            </div>
                                            <div className='flex justify-center'>
                                                <button onClick={() => handelDelete(product._id)} className='bg-[#8E2DE2] text-white h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded-full flex justify-center items-center lg:mt-0 mt-2'>
                                                    <MdDelete className='h-6 w-6 md:h-9 md:w-9 lg:h-9 lg:w-9' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </>
            }
        </>
    );
};

export default AdminProductList;