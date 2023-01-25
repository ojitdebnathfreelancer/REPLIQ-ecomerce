import React from 'react';
import { Link } from 'react-router-dom';
import foodui from '../../../Assets/TextInfo/foodui.png';

const TextInfo = () => {
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-50%'>
                        <img className='lg:h-full h-[200px]' src={foodui} alt='foodui' />
                    </div>
                    <div className='lg:w-50% text-white'>
                        <h1 className="lg:text-4xl text-3xl font-bold">Chooice you favorit food!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='products'>
                            <button className="btn bg-black hover:bg-[#8E2DE2] text-white">Favorit Foods</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TextInfo;