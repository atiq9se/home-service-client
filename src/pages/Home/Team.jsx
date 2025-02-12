

const Team = ({team}) => {
    const {name, designation, img, phone, email} = team
    return (
            <div className="text-center bg-gray-300 p-4 rounded-lg" data-aos="fade-up">
                    <img src={img} alt="" className="rounded-full w-full overflow-hidden" />
                    <h4 className="text-2xl font-bold mt-4 text-black">{name}</h4>
                    <p className="text-lg mb-1 text-black">{designation}</p>
                    <p className="text-xl text-black">{phone}</p>
                    <p className="text-xl text-black">{email}</p>
            </div>
    );
};

export default Team;