import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import SingleSkill from './SingleSkill';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
    {skill:'HTML',icon:FaHtml5},
    {skill:'CSS',icon:IoLogoCss3},
    {skill:'Javascript',icon:TbBrandJavascript},
    {skill:'React',icon:RiReactjsLine},
    {skill:'Node.JS',icon:IoLogoNodejs},
    {skill:'Express.JS',icon:SiExpress},
    {skill:'MongoDB',icon:SiMongodb},
    {skill:'Python',icon:FaPython},
    {skill:'Mysql',icon:TbBrandMysql},
    {skill:'Bootstrap',icon:FaBootstrap},
    {skill:'Tailwind',icon:RiTailwindCssFill},
    // {skill:'Redux',icon:TbBrandRedux},
]

const AllSkills = () => {
  return (
    <div className='flex jutify-center items-center gap-2 relative max-w-[1200px] mx-auto'>
        {skills?.map((item, index) => (
         <motion.div 
         key={index} 
         variants={fadeIn("up", index * 0.2)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0 }}
         >
           <SingleSkill text={item.skill} imgSvg={<item.icon />} />
         </motion.div>
    
        ))}
    </div>
  )
}

export default AllSkills