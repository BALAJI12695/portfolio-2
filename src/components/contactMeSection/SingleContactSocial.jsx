import React from 'react'

const SingleContactSocial = ({link,Icon}) => {
  return (
    <div className=' h-12 w-12 text-2xl text-orange border border-orange rounded-full p-3 flex items-center justify-center transition-all duration-500 hover:text-darkCyan hover:border-darkCyan hover:scale-110 '>
        <a href={link} className='cursor-pointer'>
            <Icon />
        </a>
    </div>
  )
}

export default SingleContactSocial;