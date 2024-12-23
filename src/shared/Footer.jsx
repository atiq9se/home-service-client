import React from 'react';
import { Link } from 'react-router-dom';
import logo_icon from '../assets/logo_icon.png'

const Footer = () => {
    return (
        <>
        <section class="lg:py-16 py-12">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div class="text-center text-lg" data-aos="fade-up">
                   <Link to='/' className="flex items-center"><img src={logo_icon} alt="" className='w-16' /> <span className='text-2xl font-bold'>HOME SERVICE</span></Link>
                </div>
                <div class="text-center text-lg" data-aos="fade-up">
                    <h3 class="font-bold pb-3 md:mt-0 mt-5 text-blue-800 text-2xl">Important Link</h3>
                    <Link to='/register' className="block text-blue-800 text-lg">Register</Link>
                    <Link to='/login' className="block text-blue-800 text-lg">Login</Link>
                    <Link to='/allmovies' className="block text-blue-800 text-lg">All Movies</Link>
                </div>
                <div class="text-center text-lg" data-aos="fade-up">
                    <h3 class="font-bold pb-3 md:mt-0 mt-5 text-blue-800 text-2xl">Contact us</h3>
                    <p className="text-blue-800">Address: Kaderbad housing mohammadpur, dhaka</p>
                    <p className="text-blue-800">Phone: 01732090820</p>
                    <p className="text-blue-800">Email: atiq9se@gmail.com</p>
                </div>
            </div>
            
        </section>
        <div className="text-center border-t border-t-blue-950">
            <p className="text-blue-800 py-2">All right reserved@ HOME SERVICE</p>
        </div>
    </>
    );
};

export default Footer;