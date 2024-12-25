import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageServiceCard = ({service}) => {
    const {_id, service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image} = service



    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="flex gap-2 m-2">
                <figure>
                    <img className="w-16"
                        src={service_photo}
                        alt="Shoes" />
                </figure>
                <div>
                    <h4 className="text-2xl">{service_name}</h4>
                    <p className="flex gap-2 items-center">{price}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {service_area}
                    <div className="badge badge-secondary">{provider_name}</div>
                    <div className=""><img src={provider_image} alt="" className="w-12" /></div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end items-center">
                    <Link to={`/updateServices/${_id}`}><button className="btn ">Update</button></Link>
                    <button onClick={()=>handleDelete(_id)} className='btn bg-red-500 border-none text-white'>Delete</button>

                </div>
            </div>
        </div>
    );
};

export default ManageServiceCard;