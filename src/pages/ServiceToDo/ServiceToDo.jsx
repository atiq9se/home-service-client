import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import ServiceToDoCard from "./ServiceToDoCard";

const ServiceToDo = () => {
    const {user} = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/service-todo?email=${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user.email])
    return (
        <div className="min-h-screen">
            {services.length > 0 ? (
            <div>
            {
                services.map(service=><ServiceToDoCard key={service._id} service={service}></ServiceToDoCard>)
            }
             </div>
            ) : (
                <p className="text-3xl text-red-800 md:py-24 py-10">No services booked yet. Check out our offerings to book your first service!</p>
            )}
        </div>
    );
};

export default ServiceToDo;