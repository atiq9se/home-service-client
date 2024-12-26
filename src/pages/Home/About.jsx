import aboutImg from '../../assets/about.jpg'
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="lg:px-24 md:px-12 px-6 py-12 mt-8">
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                <div>
                <motion.h3 className='lg:text-4xl text-xl text-cyan-800 text-center font-bold mb-4' animate={{x:[100, 60, 100]}}
                    transition={{duration:5, repeat:Infinity}}>About us</motion.h3>
                <p className='text-xl text-cyan-800 text-justify'>Home services refer to a wide range of professional solutions designed to maintain, repair, or improve residential properties. These services are essential for ensuring a home is safe, comfortable, functional, and visually appealing. Common Categories of Home Services are Home Improvement, Safety and Security, Landscaping and Outdoor Services, Renovation and Remodeling, Repair and Maintenance</p>
                </div>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default About;