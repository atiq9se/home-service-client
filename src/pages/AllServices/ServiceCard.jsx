
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
    const { _id, service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image } = service
    return (
        <div>
            <div className="card  shadow-xl grid md:grid-cols-3 grid-cols-1 gap-10 mb-5 overflow-hidden">
                <div className="overflow-hidden w-100">
                    <figure>
                        <motion.img
                            animate={{
                                scale: 1.2,
                                transition: { duration: 2 }
                            }} className="w-100 overflow-hidden"
                            src={service_photo}
                            alt="serivce" />
                    </figure>
                </div>
                <div className="card-body">
                    <div>
                        <h4 className="text-2xl">{service_name}</h4>
                        <p className="flex gap-2 items-center font-bold">{price} Taka</p>
                    </div>
                    <div className="">
                        <p className="">Service Area: {service_area}</p>
                        <p className="">{description}</p>
                    </div>
                    <div className="flex gap-4 items-center mt-4"><img src={provider_image} alt="" className="w-12 rounded-full" /><p>{provider_name}</p></div>
                </div>
                <div className="card-actions justify-center items-center">
                    <Link to={`/services/${_id}`}><button className="btn bg-cyan-600 border-none text-white px-20 text-center hover:bg-teal-600">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;