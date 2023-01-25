import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import food1 from '../../../Assets/HomeBanner/food1.jpg';
import food2 from '../../../Assets/HomeBanner/food2.jpg';
import food3 from '../../../Assets/HomeBanner/food3.webp';

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false, }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className='lg:h-[550px] h-[200px]'
        >
            <SwiperSlide>
                <img className='h-full w-full' src={food1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-full w-full' src={food2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-full w-full' src={food3} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;