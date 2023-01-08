import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Page4.css"
export const Page4 = () => {
  let navigate = useNavigate()
  return (
    <div>
         <div>
    <button>◀</button>
    <h1>Tell us about yourself</h1>
        </div>
    <h1>Fill personal details</h1>
    <div className='gender'>
        <button><h4>🙋🏻‍♂️</h4><h4>Male</h4></button>
        <button><h4>🙋🏽‍♀️</h4><h4>Female</h4></button>
    </div>
    <div className='page4_display'>
    
       <fieldset> <legend>Enter Full Name</legend><input type="text" placeholder={`Enter your name`} /></fieldset>
       <fieldset> <legend>Enter Mobile number</legend><input type="number" placeholder={`Enter mobile number`} /></fieldset>
    </div>

    <div>
        <h5>Your personal data is safe with us.</h5>
        <button onClick={()=>navigate('/plans')} >continue</button>
    </div>
    </div>
  )
}
