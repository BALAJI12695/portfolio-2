import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px] '>
        <p className='text-orange font-bold uppercase text-3xl font-nunito text-center '>Since 2023</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo number={0} text={'years'} />
            <p className=' text-bold text-6xl text-lightBrown'> - </p>
            <ExperienceInfo number={1} text={'years'} />
        </div>
        <p className='text-center text-white'> Passionate about building dynamic and user-friendly web applications using the MERN stack (MongoDB, Express.js, React, Node.js).</p>
            <ExperienceInfo number='Dev' text={'MERN Stack'} />
    </div>
  )
}

export default ExperienceTopLeft