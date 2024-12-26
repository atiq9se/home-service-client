import React, { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../AllServices/ServiceCard';

const Home = () => {
    const popularServices = useLoaderData();
    const [services, setServices] = useState(popularServices);
    return (
        <div>
            <PageTitle title="Home page"></PageTitle>
            
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
            <div className="text-center mt-5"> <Link to='/allservices' className="btn bg-cyan-600 border-none text-white px-20 text-center hover:bg-teal-600">See all services</Link></div>
        </div>
    );
};

export default Home;