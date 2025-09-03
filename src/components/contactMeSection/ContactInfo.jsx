import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLocationOutline } from 'react-icons/io5'
import SingleInfo from './SingleInfo'

const ContactInfo = () => {
  return (
    <div className='flex flex-col text-white gap-4'>

        <SingleInfo text={'balaji12695@gmail.com'} Image={HiOutlineMail } />
        <SingleInfo text={'8778938137'} Image={  FiPhone } />
        <SingleInfo text={'Singanallur, Coimbatore - 641005 '} Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo