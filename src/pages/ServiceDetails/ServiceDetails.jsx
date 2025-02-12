import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";

const ServiceDetails = () => {
    const { _id, service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image } = useLoaderData();
    return (
        <div>
            <PageTitle title="Service details page"></PageTitle>
            <div className="flex flex-col gap-4 justify-center items-center mt-8">
                <div className="card shadow-xl p-4">
                    <img src={provider_image} alt="" className="w-32 rounded mx-auto" />
                    <h3 className="text-xl text-center">{provider_name}</h3>
                    <p className="text-center">Service Area: <span className="font-bold">{service_area}</span></p>
                </div>
                <div className="card shadow-xl p-6">
                    <img className="w-100 overflow-hidden"
                        src={service_photo}
                        alt="serivce" />
                    <h4 className="text-2xl mt-4">{service_name}</h4>
                    <p className="">{description}</p>
                    <div className="flex gap-4 items-center mt-4"><img src={provider_image} alt="" className="w-12 rounded-full" /><p>{provider_name}</p></div>
                    <p className="flex gap-2 items-center font-bold text-xl mt-3">{price} Taka</p>
                </div>
            </div>

            <div className="text-center mt-5">
                <Link to={`/addBooking/${_id}`}><button className="btn bg-red-500 border-none text-white px-20 text-center hover:bg-red-800">Book Now</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;