import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('products.json')
            .then(data => setProducts(data.data));
    }, []);

    return (
        <div className='max-w-7xl mx-auto grid gap-5 lg:grid-cols-4 md:grid-cols-3 px-5 my-10'>
            {
                products.map(product => <div className="card bg-base-100 shadow-xl">
                    <figure><img className='h-[197px]' src={product?.img} alt="food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title capitalize">{product?.name}</h2>
                        <p className='capitalize'>{product?.discription.slice(0, 48)}...</p>
                        <div className="card-actions justify-end">
                            <Link to='/details'>
                                <button className="btn capitalize px-8 py-1 hover:bg-white bg-[#8E2DE2] hover:text-black text-lg text-white">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Products;