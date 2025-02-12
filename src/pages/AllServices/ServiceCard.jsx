
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
    const { _id, service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image } = service
    return (
        <div>
            <div className="card border border-b-gray-100 grid md:grid-cols-3 grid-cols-1 gap-6 mb-5 overflow-hidden">
                <div className="overflow-hidden w-100">
                    <figure>
                        <motion.img
                            animate={{
                                scale: 1.2,
                                transition: { duration: 2 }
                            }} className="overflow-hidden"
                            src={service_photo}
                            alt="serivce" />
                    </figure>
                </div>
                <div className="">
                    <div className="mb-4">
                        <h4 className="text-2xl font-bold">{service_name}</h4>
                        <p className="flex gap-2 items-center font-bold">{price} Taka</p>
                    </div>
                    <div className="">
                        <p className="font-bold font-3xl">{service_area}</p>
                        <p className="">{description}</p>
                    </div>
                    <div className="flex gap-4 items-center mt-4"><img src={provider_image} alt="" className="w-12 rounded-full" /><p>{provider_name}</p></div>
                </div>
                <div className="card-actions justify-center items-center">
                    <Link to={`/services/${_id}`}><button className="btn bg-red-500 border-none text-white px-12 text-center hover:bg-red-800 mb-4">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;