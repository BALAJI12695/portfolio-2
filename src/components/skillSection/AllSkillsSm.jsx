
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
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

const AllSkillsSm = () => {
  return (
    <motion.div 
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
    className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">{ skills?.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <item.icon className="text-7xl text-orange" />
        <p className=" text-center mt-4 text-white" >{item.skill}</p>
      </div>
    ))}</motion.div>
  )
}

export default AllSkillsSm