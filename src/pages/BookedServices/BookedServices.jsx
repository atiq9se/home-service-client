import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import BookedServicesCard from "./BookedServicesCard";
import PageTitle from "../PageTitle/PageTitle";


const BookedServices = () => {
    const {user} = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {

        fetch(`https://y-blond-theta.vercel.app/booked-services?email=${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))


    }, [user.email])

    return (
        <div className="min-h-screen lg:py-16 py-12 max-w-7xl lg:mx-auto mx-4">
            <PageTitle title="Booked Services"></PageTitle>
            
            {services.length > 0 ? (
            <div>
            
                {
                    services.map(service=><BookedServicesCard key={service._id} service={service}></BookedServicesCard>)
                }
            </div>
            ) : (
                <p className="lg:text-3xl text-xl text-red-800 md:py-24 py-10">No services booked yet. Check out our offerings to book your first service!</p>
            )}

        </div>
    );
};

export default BookedServices;