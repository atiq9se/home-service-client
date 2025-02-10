import React, { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../AllServices/ServiceCard';
import Banner from './Banner';
import About from './About';
import Project from './Project';
import { motion } from "framer-motion";

const Home = () => {
    const popularServices = useLoaderData();
    const [services, setServices] = useState(popularServices);
    return (
        <div>
            <PageTitle title="Home page"></PageTitle>
            <Banner></Banner>
            <div className='max-w-7xl lg:mx-auto mx-4'>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            <div className="text-center mt-5"> <Link to='/services' className="btn bg-cyan-600 border-none text-white px-20 text-center hover:bg-teal-600">See all services</Link></div>
            </div>
            <About></About>

            <Project></Project>


        </div>
    );
};

export default Home;