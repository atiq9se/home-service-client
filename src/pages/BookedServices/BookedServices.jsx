import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";

const BookedServices = () => {
    const {user} = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/booked-services?email=${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user.email])
    return (
        <div>
            {services.length}
            {
                services.map(service=><p>{service.service_name}{service.price}</p>)
            }
        </div>
    );
};

export default BookedServices;