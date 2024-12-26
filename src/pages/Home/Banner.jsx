import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";

const Banner = () => {
    return (
    <div className='mb-8'>
      <Swiper
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper">
            
        <SwiperSlide>
            <div className='relative -z-1'>
                <div className='absolute bannerText text-white top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 p-5 md:w-auto w-full z-10'>
                    <motion.h2 animate={{x:[0, 40, 0]}}
                    transition={{duration:5, repeat:Infinity}} className='lg:text-5xl text-xl font-bold text-center mb-3 text-white' data-aos="fade-up">Roofing Gutters</motion.h2>
                </div>
                <img src={slider1} alt="" className='object-fill'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative -z-1'>
                <div className='absolute bannerText text-white top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 p-5 md:w-auto w-full z-10'>
                    <motion.h2 animate={{x:[0, 40, 0]}}
                    transition={{duration:5, repeat:Infinity}} className='lg:text-4xl text-xl font-bold text-center mb-3 text-white'>Roofing Replacement</motion.h2>
                </div>
                <img src={slider2} alt="" className='object-fill'/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative -z-1'>
                <div className='absolute bannerText text-white top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 p-5 md:w-auto w-full z-10'>
                    <motion.h2 animate={{x:[0, 40, 0]}}
                    transition={{duration:5, repeat:Infinity}} className='lg:text-4xl text-xl font-bold text-center mb-3 text-white'>Roofing Insulation</motion.h2>
                </div>
                <img src={slider3} alt="" className='object-fill'/>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;