import React from 'react'
import emailImg from '../../assets/email-image.png'
import ContactInfo from './ContactInfo'
import ContactSocial from './ContactSocial'

export const ContactMeRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
        <img className='max-w-[300px]' src={emailImg} alt="emailImg" />
        <ContactInfo />
        <ContactSocial />
    </div>
  )
}
