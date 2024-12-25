import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";


const AllServices = () => {
    const loadedServices = useLoaderData();
    const [services, setServices] = useState(loadedServices);
    console.log(services);

    return (
        <div>
             <PageTitle title="Service pages"></PageTitle>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllServices;