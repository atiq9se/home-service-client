
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2";


const AddService = () => {
    const { user } = useContext(AuthContext)

    const {register, handleSubmit, formState:{errors}} = useForm();
    const onSubmit = data =>{
        const service_photo = data.service_photo;
        const service_name = data.service_name;
        const price = data.price;
        const service_area = data.service_area;
        const description = data.description;
        const provider_name = user.displayName;
        const provider_email = user.email;
        const provider_image = user.photoURL;
        const newService = {service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image,}
        console.log(newService)

        fetch('http://localhost:5000/services',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newService)
            })
        .then(res=>res.json())
        .then(data=>{
            Swal.fire({
                title: "Service adding Successfully",
                icon: "success"
              });
             
        })
        // navigate('/allmovies')
        
    }
    return (
        <div className="hero bg-slate-800 px-5">
            <div className="card bg-slate-700 md:w-96 w-full shadow-2xl my-8 z-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <h3 className="text-center text-blue-600 font-bold md:text-4xl text-xl">ADD SERVICE</h3>
                  <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Image URL of the Service</span>
                        </label>
                        <input type="text" {...register("service_photo",
                            {required:true, 
                            pattern: {value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/}
                            }
                         )} placeholder="Service Image URL" className="input input-bordered text-blue-800"/>
                         {errors.service_photo?.type==='required' && <p className="text-red-600">Movie poster is required</p>}
                         {errors.service_photo?.type==='pattern' && <p className="text-red-600">Given input is must be a link</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Service Name</span>
                        </label>
                        <input type="text" {...register('service_name', {required:true})} placeholder="Service Name" className="input input-bordered text-blue-800" required />
                        {errors.service_name?.type==='required' && <p className="text-red-600">Service name is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Price</span>
                        </label>
                        <input type="text" {...register('price', {required:true})} placeholder="Price" className="input input-bordered text-blue-800" required />
                        {errors.price?.type==='required' && <p className="text-red-600">Price is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Service Area</span>
                        </label>
                        <input type="text" {...register('service_area', {required:true})} placeholder="Service Area" className="input input-bordered text-blue-800" required />
                        {errors.service_area?.type==='required' && <p className="text-red-600">Service area is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-white">Description</span>
                        </label>
                        <textarea {...register('description', {required:true})} className="textarea textarea-bordered" placeholder="Description" required></textarea>
                        {errors.description?.type==='required' && <p className="text-red-600">Description is required</p>}
                    </div>
                    <div className="mt-5 text-center">
                        <input className="btn bg-blue-600 border-none text-white px-20 text-center hover:bg-teal-600 w-80" type="submit"  value="Add Movie"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;