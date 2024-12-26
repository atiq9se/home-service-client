import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import ServiceToDoCard from "./ServiceToDoCard";
import PageTitle from "../PageTitle/PageTitle";

const ServiceToDo = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`https://y-blond-theta.vercel.app/service-todo?email=${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user.email])
    return (
        <>
            <PageTitle title="Service to do page"></PageTitle>

            <div className="min-h-screen">
                {services.length > 0 ? (
                    <div>
                        {
                            services.map(service => <ServiceToDoCard key={service._id} service={service}></ServiceToDoCard>)
                        }
                    </div>
                ) : (
                    <p className="text-3xl text-red-800 md:py-24 py-10">No services booked yet. Check out our offerings to book your first service!</p>
                )}
            </div>
        </>
    );
};

export default ServiceToDo;