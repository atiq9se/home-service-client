import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useState } from "react";


const AllServices = () => {
    const loadedServices = useLoaderData();
    const [services, setServices] = useState(loadedServices);
    console.log(services);

    return (
        <div>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllServices;