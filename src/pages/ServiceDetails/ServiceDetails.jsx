import { Link, useLoaderData } from "react-router-dom";
import PageTitle from "../PageTitle/PageTitle";

const ServiceDetails = () => {
    const { _id, service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image } = useLoaderData();
    return (
        <div>
            <PageTitle title="Service details page"></PageTitle>
            <div className="flex flex-col gap-4 justify-center items-center mt-8">
              
                <div className="card shadow-xl p-6 bg-white">
                    <img className="w-100 overflow-hidden"
                        src={service_photo}
                        alt="serivce" />
                    <h4 className="text-2xl mt-4 text-black font-bold">{service_name}</h4>
                    <p className="flex gap-2 items-center font-bold text-xl text-red-400">{price} Taka</p>
                    <p className="text-black mb-4"><span className="font-bold">{service_area}</span></p>
                    <p className="text-black">{description}</p>
                    <div className="flex gap-4 items-center mt-4 text-black"><img src={provider_image} alt="" className="w-12 rounded-full" /><p>{provider_name}</p></div>
                </div>
            </div>

            <div className="text-center mt-5">
                <Link to={`/addBooking/${_id}`}><button className="btn bg-red-500 border-none text-white px-20 text-center hover:bg-red-800">Book Now</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;