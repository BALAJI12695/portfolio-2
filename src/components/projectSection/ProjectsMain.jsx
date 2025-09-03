import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import projectImg1 from '../../assets/website-img-1.jpg'
import projectImg2 from '../../assets/website-img-2.webp'
import projectImg3 from '../../assets/website-img-3.jpg'
import projectImg4 from '../../assets/website-img-4.jpg'
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
    {name:'Dewi',
    year:'Dec 2024',
    align:'right',
    image:projectImg1,
    link:'https://balaji12695.github.io/Dewi/',
    },
      {
    name: "Siri Event Management",
    year: "Sept2022",
    align: "left",
    image: projectImg2,
    link: "https://sites.eziosolutions.com/sri-event-management/",
  },
  {
    name: "Dreamzil",
    year: "Jan2023",
    align: "right",
    image: projectImg3,
    link: "https://www.dreamzil.in",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: projectImg4,
    link: "https://balaji12695.github.io/Dewi/",
  },
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4 '>
      <motion.div
       variants={fadeIn("up", 0.2)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0 }}>
       <ProjectsText />
      </motion.div>
       <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {projects?.map((item, index) => (
            <SingleProject key={index} name={item.name} year={item.year} align={item.align} img={item.image} link={item.link} />
        ))}
       </div>
    </div>
  )
}

export default ProjectsMain  




