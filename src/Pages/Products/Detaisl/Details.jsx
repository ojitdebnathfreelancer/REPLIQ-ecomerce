import React from 'react';

const Details = () => {
    return (
        <div className='max-w-7xl mx-auto my-10 px-5'>
            <div className='bg-white p-5 rounded-md'>
                <div className='lg:flex md:flex gap-10 items-center'>
                    <img className='lg:h-80 h-56 rounded-lg' src="https://i.ibb.co/0VVdhnK/burgur.jpg" alt="" />
                    <div>
                        <p className='capitalize lg:text-start text-justify'>
                            food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                        </p>
                        <h1 className='text-lg capitalize font-bold my-2'>product name</h1>
                        <p className='text-lg capitalize font-bold my-2'>price 200$</p>
                        <button className="btn capitalize px-8 py-1 hover:bg-white bg-[#8E2DE2] hover:text-black text-lg text-white">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;