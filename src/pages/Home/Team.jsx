

const Team = ({team}) => {
    const {name, designation, img, phone, email} = team
    return (
            <div className="text-center bg-gray-300 p-4 rounded-lg" data-aos="fade-up">
                    <img src={img} alt="" className="rounded-full w-full overflow-hidden" />
                    <h4 className="text-2xl font-bold mt-4">{name}</h4>
                    <p className="text-lg mb-1">{designation}</p>
                    <p className="text-xl">{phone}</p>
                    <p className="text-xl">{email}</p>
            </div>
    );
};

export default Team;