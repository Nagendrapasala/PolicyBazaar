import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Page3.css"
export const Page3 = () => {
  let navigate = useNavigate()
  return (
    <div>
         <div>
    <button>◀</button>
    <h1>Where do you live?</h1>
        </div>
    <h1>Select a city</h1>
    <div className='page3_display'>
    
       <fieldset> <legend>Enter City or PIN Code</legend><input type="text" placeholder={`Enter city`} /></fieldset>
        
    </div>
    <div>
        <button onClick={()=>navigate('/contact')} >continue</button>
    </div>
    </div>
  )
}
