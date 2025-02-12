import aboutImg from '../../assets/about.jpg'

const AboutPage = () => {
    return (
        <div className='py-12 mt-12'>
            <div className="max-w-7xl lg:mx-auto mx-4 mt-12">
                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                    <div>
                    <h3 className='lg:text-4xl text-xl  text-center font-bold mb-4 pt-5'>About us</h3>
                    <p className='text-xl  text-justify p-5'>Home services refer to a wide range of professional solutions designed to maintain, repair, or improve residential properties. These services are essential for ensuring a home is safe, comfortable, functional, and visually appealing. Common Categories of Home Services are Home Improvement, Safety and Security, Landscaping and Outdoor Services, Renovation and Remodeling, Repair and Maintenance</p>
                    </div>
                    <div>
                        <img src={aboutImg} alt="" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;