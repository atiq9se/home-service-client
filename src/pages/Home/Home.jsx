import React, { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../AllServices/ServiceCard';
import Banner from './Banner';
import About from './About';
import Project from './Project';
import { motion } from "framer-motion";
import Teams from './Teams';

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
            <div className="text-center mt-5"> <Link to='/services' className="btn bg-red-500 border-none font-lg text-white px-20 text-center hover:bg-red-800">See all services</Link></div>
            </div>
            <About></About>

            <Project></Project>
            <Teams></Teams>


        </div>
    );
};

export default Home;