import React from 'react';
import { Link } from 'react-router-dom';
import logo_icon from '../assets/logo_icon.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-gray-300 lg:mt-12 mt-6'>
            <section class="lg:py-16 py-12 max-w-7xl lg:mx-auto mx-4">
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
                    <div class="text-center text-lg" data-aos="fade-up">
                        <Link to='/' className="flex items-center justify-start"><img src={logo_icon} alt="" className='w-16' /> <span className='text-2xl font-bold text-white'>HOME SERVICE</span></Link>
                    </div>
                    <div class="text-center text-lg" data-aos="fade-up">
                        <h3 class="font-bold pb-3 md:mt-0 mt-5 text-black text-2xl">Important Link</h3>
                        <Link to='/register' className="block text-black text-lg hover:text-red-700">Register</Link>
                        <Link to='/login' className="block text-black text-lg hover:text-red-700">Login</Link>
                        <Link to='/services' className="block text-black text-lg hover:text-red-700">All Services</Link>
                    </div>
                    <div className='flex flex-col items-center gap-4'>
                        <h3 class="font-bold pb-3 md:mt-0 mt-5 text-black text-2xl ">Social Media Link</h3>
                        <Link to='https://www.facebook.com/' target='_blank' className="block text-black text-lg hover:text-red-700"><FaFacebookF /></Link>
                        <Link to='https://bd.linkedin.com/' target='_blank' className="block text-black text-lg hover:text-red-700"><FaLinkedinIn /></Link>
                    </div>
                    <div class="text-center text-lg" data-aos="fade-up">
                        <h3 class="font-bold pb-3 md:mt-0 mt-5 text-black text-2xl">Contact us</h3>
                        <p className="text-black">Address: Kaderbad housing mohammadpur, dhaka</p>
                        <p className="text-black">Phone: 01732090820</p>
                        <p className="text-black">Email: atiq9se@gmail.com</p>
                    </div>
                </div>
            </section>
            <div className="text-center border-t border-t-gray-400 bg-gray-300">
                <p className="py-2">All right reserved@ HOME SERVICE</p>
            </div>
        </div>
    );
};

export default Footer;