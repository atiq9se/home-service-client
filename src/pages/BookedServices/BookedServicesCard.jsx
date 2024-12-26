
const BookedServicesCard = ({service}) => {
    const { _id, service_photo, service_name, price,taking_date, service_status, special_instruction, provider_name, provider_email } = service
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
                        <p className="">Service Date: {taking_date}</p>
                        <p className="">{special_instruction}</p>
                    </div>
                    <div className="mt-4"><p>Provider Name: {provider_name}</p><p>Provider Email: {provider_email}</p></div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="btn bg-cyan-600 border-none text-white px-20 text-center hover:bg-teal-600">Pending</div>
                </div>
            </div>
    );
};

export default BookedServicesCard;