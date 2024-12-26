import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import BookedServicesCard from "./BookedServicesCard";
import PageTitle from "../PageTitle/PageTitle";

const BookedServices = () => {
    const {user} = useContext(AuthContext)
    const [services, setServices] = useState([])
    console.log(services)

    useEffect(() => {
        fetch(`http://localhost:5000/booked-services?email=${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user.email])
    return (
        <div>
            <PageTitle title="Booked Services"></PageTitle>
            {
                services.map(service=><BookedServicesCard key={service._id} service={service}></BookedServicesCard>)
            }
        </div>
    );
};

export default BookedServices;