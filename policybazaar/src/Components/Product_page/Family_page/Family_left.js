import React from 'react'
import Health_insu from "../Images/leftHeroImage.webp"
export const Family_left = () => {
  return (
    <div className='leftside'>
        <ul><span>Why buy from Policybazaar?</span>
            <li>30 minutes claim support*</li>
            <li>All Covid-19 Treatments covered</li>
            <li>Instant Purchase, No Medicals Required</li>
            <li>Tax Benefits upto ₹ 75,000 under Sec. 80D</li>
        </ul>
        <img className='leftside_img' src={Health_insu} alt="Health_insurance_plan" />
    </div>
  )
}
