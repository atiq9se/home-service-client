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
        <div>
            {services.length}
            {
                services.map(service=><ServiceToDoCard key={service._id} service={service}></ServiceToDoCard>)
            }
        </div>
    );
};

export default ServiceToDo;