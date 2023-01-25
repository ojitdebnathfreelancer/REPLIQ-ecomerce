import React from 'react';
import { MdDelete } from "react-icons/md";

const AdminProductList = () => {
    return (
        <div className='w-[100%] md:w-[70%] lg:w-[50%] mx-auto mt-3 md:mt-5 lg:mt-10 px-5'>
            <p className='text-white text-3xl text-center'>Total Products 20</p>
            <div>
                <div className='flex p-2 md:p-5 lg:p-5 border-2 border-info mt-5 rounded-lg bg-white'>
                    <div className='flex justify-center items-center'>
                        <img className='h-20 w-36 md:w-28 lg:w-28 rounded-md' src='https://i.ibb.co/0VVdhnK/burgur.jpg' alt="product" />
                    </div>
                    <div className='w-full md:flex lg:flex justify-between items-center ml-5'>
                        <div>
                            <p className='capitalize'>product name</p>
                            <p className='capitalize'>Price 100$</p>
                            <button className="capitalize border-2 rounded-xl border-black hover:border-[#8E2DE2] px-5 py-1 bg-white hover:bg-[#8E2DE2] text-black text-lg hover:text-white mt-2">Details</button>
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-[#8E2DE2] text-white h-8 w-8 md:h-12 md:w-12 lg:h-12 lg:w-12 rounded-full flex justify-center items-center lg:mt-0 mt-2'>
                                <MdDelete className='h-6 w-6 md:h-9 md:w-9 lg:h-9 lg:w-9' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductList;