import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import ManageServiceCard from "./ManageServiceCard";
import PageTitle from "../PageTitle/PageTitle";

const ManageServices = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch(`https://y-blond-theta.vercel.app/manage-services?email=${user.email}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [user.email])
    return (
        <>

            <PageTitle title="Manage Services page"></PageTitle>
            <div className="min-h-screen">
                {services.length > 0 ? (
                    <div>
                        {
                            services.map(service => <ManageServiceCard key={service._id} service={service} services={services} setServices={setServices}></ManageServiceCard>)
                        }
                    </div>
                ) : (
                    <p className="text-3xl text-red-800 md:py-24 py-10">No services added yet. Check out our offerings to book your first service!</p>
                )}
            </div>
        </>
    );
};

export default ManageServices;