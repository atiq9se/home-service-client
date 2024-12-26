import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageServiceCard = ({service}) => {
    const {_id, service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image} = service

    const handleDelete = _id=>{
        Swal.fire({
        title: "Are you sure?",
        text: "You delete this movie!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
           
            fetch(`http://localhost:5000/services/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())

            .then(data=>{
                if(data.deletedCount > 0){
                    Swal.fire(
                        "Deleted!",
                        "Your movie has been deleted.",
                        "success"
                    );

                    // const remaining = movies.filter(mov=> mov._id !==_id)
                    // setMovies (remaining)
                }
                
            })
            // navigate('/services')
        }
        });
    }

    return (
        <div className="card  shadow-xl grid md:grid-cols-3 grid-cols-1 gap-10 mb-5 overflow-hidden">
                <div className="overflow-hidden w-100">
                    <figure>
                        <img className="w-100 overflow-hidden"
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
                <div className="flex flex-col gap-4 justify-center items-center">
                    <Link to={`/updateServices/${_id}`}><button className="btn bg-cyan-600 border-none text-white px-20 text-center hover:bg-teal-600">Update</button></Link>
                    <button onClick={()=>handleDelete(_id)} className='btn bg-red-600 border-none text-white px-20 text-center hover:bg-red-800'>Delete</button>
                </div>
            </div>

        // <div className="card bg-base-100 shadow-xl">
        //     <div className="flex gap-2 m-2">
        //         <figure>
        //             <img className="w-16"
        //                 src={service_photo}
        //                 alt="Shoes" />
        //         </figure>
        //         <div>
        //             <h4 className="text-2xl">{service_name}</h4>
        //             <p className="flex gap-2 items-center">{price}</p>
        //         </div>
        //     </div>
        //     <div className="card-body">
        //         <h2 className="card-title">
        //             {service_area}
        //             <div className="badge badge-secondary">{provider_name}</div>
        //             <div className=""><img src={provider_image} alt="" className="w-12" /></div>
        //         </h2>
        //         <p>{description}</p>


        //         <div className="card-actions justify-end items-center">
        //             <Link to={`/updateServices/${_id}`}><button className="btn ">Update</button></Link>
        //             <button onClick={()=>handleDelete(_id)} className='btn bg-red-500 border-none text-white'>Delete</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ManageServiceCard;