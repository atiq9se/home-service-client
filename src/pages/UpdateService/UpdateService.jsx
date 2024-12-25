
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageTitle from '../PageTitle/PageTitle';

const UpdateService = () => {
    const service = useLoaderData();
    const {_id, service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image} = service

    const {register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();

    const onSubmit = data =>{
        const service_photo = data.service_photo;
        const service_name = data.service_name;
        const price = data.price;
        const service_area = data.service_area;
        const description = data.description;
        const updateService = {service_photo, service_name, price, service_area, description}
        console.log(updateService)
        
        fetch(`http://localhost:5000/services/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateService)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount >0){
                Swal.fire({
                    title: "You Service update successfully",
                    icon: "success",
                    confirmButtonText: "Ok"
                  })
            }
        })
        // navigate('/services')
    }

    return (
        <> <PageTitle title="Update Services"></PageTitle>
        <div className="hero px-5">
            <div className="card md:w-96 w-full shadow-2xl my-8 z-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                  <h3 className="text-center text-cyan-600 font-bold md:text-3xl text-xl">Update SERVICE</h3>
                  <div className="form-control">
                        <label className="label">
                        <span className="label-text text-cyan-500">Image URL of the Service</span>
                        </label>
                        <input type="text" {...register("service_photo",
                            {required:true, 
                            pattern: {value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/}
                            }
                         )} defaultValue={service_photo} placeholder="Service Image URL" className="input input-bordered text-blue-800"/>
                         {errors.service_photo?.type==='required' && <p className="text-red-600">Movie poster is required</p>}
                         {errors.service_photo?.type==='pattern' && <p className="text-red-600">Given input is must be a link</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-cyan-500">Service Name</span>
                        </label>
                        <input type="text" {...register('service_name', {required:true})} defaultValue={service_name} placeholder="Service Name" className="input input-bordered text-blue-800" required />
                        {errors.service_name?.type==='required' && <p className="text-red-600">Service name is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-cyan-500">Price</span>
                        </label>
                        <input type="text" {...register('price', {required:true})} defaultValue={price} placeholder="Price" className="input input-bordered text-blue-800" required />
                        {errors.price?.type==='required' && <p className="text-red-600">Price is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-cyan-500">Service Area</span>
                        </label>
                        <input type="text" {...register('service_area', {required:true})} defaultValue={service_area} placeholder="Service Area" className="input input-bordered text-blue-800" required />
                        {errors.service_area?.type==='required' && <p className="text-red-600">Service area is required</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text text-cyan-500">Description</span>
                        </label>
                        <textarea {...register('description', {required:true})} defaultValue={description} className="textarea textarea-bordered" placeholder="Description" required></textarea>
                        {errors.description?.type==='required' && <p className="text-red-600">Description is required</p>}
                    </div>
                    <div className="mt-5 text-center">
                        <input className="btn bg-red-400 border-none text-white px-20 text-center hover:bg-cyan-600" type="submit"  value="Update Service"/>
                    </div>
                </form>
            </div>
        </div>
      </>
    );
};

export default UpdateService;