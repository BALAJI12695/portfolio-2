import React from 'react'
import subSkill from '../../assets/subSkill.jpg';

const SubSkill = () => {
  return (
    <div className='border-y-2 border-lightGrey relative'>
        <div className='absolute bg-gradient-to-r from-orange to-cyan opacity-50 w-full h-full '></div>
        <img src={subSkill} alt="subskills" />
    </div>
  )
}

export default SubSkill