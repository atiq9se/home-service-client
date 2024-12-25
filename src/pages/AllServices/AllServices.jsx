import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { useEffect, useState } from "react";
import PageTitle from "../PageTitle/PageTitle";


const AllServices = () => {
    const loadedServices = useLoaderData();
    const [services, setServices] = useState(loadedServices);
    console.log(services);

    const [search, setSearch] = useState("")
 
    useEffect(()=>{
        fetch(`http://localhost:5000/services?searchParams=${search}`)
        .then((res)=>res.json())
        .then((data)=>{
            setServices(data)
        });
    },[search]);

    return (
        <div>
             <PageTitle title="Service pages"></PageTitle>
             <label className="input input-bordered flex items-center gap-2 mb-4 mx-auto w-1/2">
                <input type="text" onChange={(e)=>setSearch(e.target.value)} className="grow text-blue-800" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
                </label>
            {
                services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllServices;