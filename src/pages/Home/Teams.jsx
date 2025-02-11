import { useEffect, useState } from "react";
import Team from "./Team";
import { motion } from "framer-motion";


const Teams = () => {
    const [teams, setTeam] = useState([])

    useEffect(()=>{
        fetch('./TeamData.json')
        .then(res=>res.json())
        .then(data=> setTeam(data))
    },[])
    return (
        <div>
            <div className="lg:py-16 py-12 max-w-7xl lg:mx-auto mx-4">
            <motion.h2 className='lg:text-4xl text-xl text-cyan-800 text-center font-bold mb-8 mt-12' animate={{x:[100, 60, 100]}}
                        transition={{duration:5, repeat:Infinity}}>Our Team Member</motion.h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                    
                     {
                        teams?.map(team=><Team key={team.id} team={team}></Team>)
                     }

                </div>

            </div>
        </div>
    );
};

export default Teams;