import React from 'react'
import "./Page2.css"
import {useSelector,useDispatch} from "react-redux"
import { Navigate, useNavigate } from 'react-router-dom'
export const Page2 = () => {
    let data = useSelector((st)=> st.user_health_insurance)
    let s = Object.keys(data)
    let navigate = useNavigate()
  return (
    <div>
        <div>
    <button>◀</button>
    <h1>How old is the member?</h1>
        </div>
    <h1>Select age</h1>
    <div className='page2_display'>
    {s.map((key,value)=>{
       if(data[key]==true){return <fieldset> <legend>{key}</legend><input type="number" min='18' max='100' key={value} placeholder={`Enter ${key} age`} /></fieldset>}
        
    })}
    </div>
    <div>
        <button onClick={()=>navigate('/pincode')} >continue</button>
    </div>
    </div>
  )
}
