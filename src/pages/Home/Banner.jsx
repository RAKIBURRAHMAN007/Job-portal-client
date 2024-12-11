import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/team1.jpg'
import team2 from '../../assets/team/team2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content  flex-col md:flex-row-reverse">
                <div className='flex-1 '>
                    <motion.img
                        src={team1}
                        animate={{y:[50,70,50]}}
                        transition={{duration:5,repeat:Infinity}}
                        className="max-w-sm w-32 md:w-56 lg:w-64 rounded-3xl rounded-bl-none border-8 border-blue-700 border-r-0 border-t-0 shadow-2xl" />
                    <motion.img
                        src={team2}
                        animate={{x:[100,140,100]}}
                        transition={{duration:5,repeat:Infinity}}
                        className="max-w-sm w-32 mt-3 md:mt-0 mr-28 md:mr-0 md:w-56 lg:w-64 rounded-3xl rounded-br-none border-8 border-blue-700 border-l-0 border-t-0 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1
                    animate={{x:50}}
                    transition={{ duration: 4, delay: 1, ease: "linear" , repeat:Infinity }}
                     className="text-5xl font-bold">Latest <motion.span
                     animate={{color: ['#d400ff','#ff007f','#ff00ff']}}
                     transition={{duration:1.5,repeat:Infinity,}}
                     
                     >Jobs</motion.span> For You!</motion.h1>
                    <p className="py-6">
                    Discover top job opportunities tailored to your skills and goals. Browse, apply, and take the next step toward your dream career today!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;