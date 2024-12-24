import { useLoaderData } from "react-router-dom";
import { useContext } from 'react';
import AuthContext from "../../context/AuthContext/AuthContext";
import Swal from "sweetalert2"

const AddBooking = () => {
    const { _id, service_photo, service_name, price, service_area, description, provider_name, provider_email, provider_image } = useLoaderData();

    const { user } = useContext(AuthContext)

    const handleAddBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const service_id = form.service_id.value;
        const service_name = form.service_name.value;
        const service_photo = form.service_photo.value;
        const provider_email = form.provider_email.value;
        const provider_name = form.provider_name.value;
        const user_email = form.user_email.value;
        const user_name = form.user_name.value;
        const taking_date = form.taking_date.value;
        const special_instruction = form.special_instruction.value;
        const price = form.price.value;
        const addBooking = {service_id, service_name, service_photo, provider_email, provider_name, user_email,user_name,taking_date, special_instruction, price }
        console.log(addBooking)

        // fetch('http://localhost:5000/services', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(addBooking)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         Swal.fire({
        //             title: "Service adding Successfully",
        //             icon: "success"
        //         });

        //     })
        // navigate('/allmovies')

    }
    return (
        <div className="hero px-5">
            <div className="card md:w-96 w-full shadow-2xl my-8 z-10">
                <form onSubmit={handleAddBooking} className="card-body">
                    <h3 className="text-center text-cyan-600 font-bold md:text-3xl text-xl">ADD SERVICE</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Service Id</span>
                        </label>
                        <input type="text" name="service_id" value={_id} placeholder="Service Id" className="input input-bordered text-blue-800" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Service Name</span>
                        </label>
                        <input type="text" name="service_name" value={service_name} placeholder="Service Name" className="input input-bordered text-blue-800" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Service Image</span>
                        </label>
                        <input type="text" name="service_photo" value={service_photo} placeholder="Service Image URL" className="input input-bordered text-blue-800" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Provider Email</span>
                        </label>
                        <input type="text" name="provider_email" value={provider_email} placeholder="Service Email" className="input input-bordered text-blue-800" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Provider Name</span>
                        </label>
                        <input type="text" name="provider_name" value={provider_name} placeholder="Service Name" className="input input-bordered text-blue-800" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Current User Email</span>
                        </label>
                        <input type="text" name="user_email" value={user.email} placeholder="Service Email" className="input input-bordered text-blue-800" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Current User Name</span>
                        </label>
                        <input type="text" name="user_name" value={user.displayName} placeholder="Service Name" className="input input-bordered text-blue-800" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Service Taking Date</span>
                        </label>
                        <input type="date" name="taking_date" placeholder="Service Taking Date" className="input input-bordered text-blue-800" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Special instruction</span>
                        </label>
                        <input type="text" name="special_instruction" placeholder="Special instruction" className="input input-bordered text-blue-800" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">Price</span>
                        </label>
                        <input type="text" name="price" value={price} placeholder="Price" className="input input-bordered text-blue-800" required />
                    </div>
                    <div className="mt-5 text-center">
                        <input className="btn bg-red-400 border-none text-white px-20 text-center hover:bg-cyan-600" type="submit" value="Purchase" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBooking;