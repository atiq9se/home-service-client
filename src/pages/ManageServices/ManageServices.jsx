import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import ManageServiceCard from "./ManageServiceCard";

const ManageServices = () => {
    const {user} = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/manage-services?email=${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user.email])
    return (
        <div>
            {
                services.map(service=><ManageServiceCard key={service._id} service={service}></ManageServiceCard>)
            }
        </div>
    );
};

export default ManageServices;