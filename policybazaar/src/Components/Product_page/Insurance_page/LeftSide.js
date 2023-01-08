import React from 'react'
import family_insurance from "../Images/family_insurance.webp"
import rating_family_insurance from "../Images/rating_family_insurance.png"
import "./LeftSide.css"
export const LeftSide = () => {
  return (
    <div className='leftside'>
        <img src={family_insurance} alt="family_insurance_Photo" />
        <h3>WE ARE RATED</h3>
        <img className='rating' src={rating_family_insurance} alt="rating"/>
        <div className='ratings'>
            <div><h1>58.9 <span>million</span></h1><p>Registered Consumers</p></div>
            <div><h1>51</h1><p>Insurance Partners</p></div>
            <div><h1>24.6<span>million</span></h1><p>Policies Sold</p></div>
        </div>  
        <p>Policybazaar is one of India's largest digital insurance marketplaces</p>
    </div>
  )
}
