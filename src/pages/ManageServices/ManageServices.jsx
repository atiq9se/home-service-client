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
        <div className="lg:py-16 py-12 max-w-7xl lg:mx-auto mx-4">

            <PageTitle title="Manage Services page"></PageTitle>
            <div className="min-h-screen">
                {services.length > 0 ? (
                    <div>
                        {
                            services.map(service => <ManageServiceCard key={service._id} service={service} services={services} setServices={setServices}></ManageServiceCard>)
                        }
                    </div>
                ) : (
                    <p className="lg:text-3xl text-xl text-red-800 md:py-24 py-10">No services added yet. Check out our offerings to book your first service!</p>
                )}
            </div>
        </div>
    );
};

export default ManageServices;