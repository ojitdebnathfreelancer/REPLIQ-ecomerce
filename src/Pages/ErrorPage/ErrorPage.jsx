import React from 'react';
import { Link } from 'react-router-dom';
import { FaSadTear } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <p className='lg:text-4xl text-2xl text-white text-center'>Something Went Wrong</p>
                <FaSadTear className='lg:h-48 h-36 lg:w-48 w-36 text-sucess my-5' />
                <Link to="/">
                    <button className='btn bg-white text-black ml-3'>
                        Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;