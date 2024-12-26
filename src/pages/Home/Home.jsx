import React, { useState } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { useLoaderData } from 'react-router-dom';
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
        </div>
    );
};

export default Home;