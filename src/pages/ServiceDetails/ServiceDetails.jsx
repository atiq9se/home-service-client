import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const {_id, service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image}= useLoaderData();
    return (
        <div>
            <div>{service_name}</div>
            <div>{price}</div>
            <div>{service_area}</div>
            <div>{provider_name}</div>
            <div className="card-actions justify-end items-center">
                        <Link to={`/addBooking/${_id}`}><button className="btn ">Book Now</button></Link>

                    </div>
        </div>
    );
};

export default ServiceDetails;