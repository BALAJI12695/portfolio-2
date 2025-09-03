import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center '>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>
        I’m Balaji, a web developer instructor with a passion for teaching
        and coding. I specialize in React and front-end development, helping
        students build real-world projects and master modern web technologies. 
        With a background as an English language trainer, I also focus on enhancing communication and career skills.
        Outside of coding, I enjoy continuous learning and
        sharing knowledge to inspire others to achieve their goals.
        </p>
        <button className=' border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer sm:self-center md:self-start text-white hover:text-cyan' >My Projects</button>
    </div>
  )
}

export default AboutMeText