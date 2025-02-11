import project1 from '../../assets/project1.jpg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jpg'
import project5 from '../../assets/project5.jpg'
import project6 from '../../assets/project6.jpg'
import { motion } from "framer-motion";

const Project = () => {
    return (
        <div className="max-w-7xl lg:mx-auto mx-4">
            <motion.h2 className='lg:text-4xl text-xl text-cyan-800 text-center font-bold mb-8 mt-12' animate={{x:[100, 60, 100]}}
                        transition={{duration:5, repeat:Infinity}}>Our Latest Projects</motion.h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                <img src={project1} alt="" className='rounded'/>
                <img src={project2} alt="" className='rounded'/>
                <img src={project3} alt="" className='rounded'/>
                <img src={project4} alt="" className='rounded'/>
                <img src={project5} alt="" className='rounded'/>
                <img src={project6} alt="" className='rounded'/>
            </div>
        </div>
        
    );
};

export default Project;