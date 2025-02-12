import Swal from "sweetalert2";


const ServiceToDoCard = ({ service }) => {
    const { _id, service_photo, service_name, price, service_area, taking_date, service_status, special_instruction, user_name, user_email } = service

    const handleStatusUpdate = (e, id) => {
        const data = {
            service_status: e.target.value
        }

        fetch(`https://y-blond-theta.vercel.app/booked-services/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "You Service Status update successfully",
                        icon: "success",
                        confirmButtonText: "Ok"
                    })
                }
            })
    }

    return (
        <div className="card  shadow-xl grid md:grid-cols-3 grid-cols-1 gap-8 mb-5 mt-8 overflow-hidden">
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
                    <p className="">Service Date: {taking_date}</p>
                    <p className="">{special_instruction}</p>
                </div>
                <div className="mt-4"><p>Provider Name: {user_name}</p><p>Provider Email: {user_email}</p></div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">

                <select onChange={(e) => handleStatusUpdate(e, _id)} defaultValue={service_status} className="select select-bordered w-full max-w-xs text-red-600">
                    <option>Pending</option>
                    <option>Working</option>
                    <option>Completed</option>
                </select>

            </div>
        </div>
    );
};

export default ServiceToDoCard;