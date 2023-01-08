import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { Userdetails } from './Action'
import "./Rightside.css"
export const RightSide = () => {
    const[data,setData] = React.useState({
        name:"",
        gender:"",
        date:"",
        number:""
    })
    let navigate = useNavigate()
    let dispatch = useDispatch();
    function HandleSubmit(e){
        Userdetails(data,dispatch)
        navigate('/plans')
    }
    function HandleData(e){
        setData({...data,[e.target.name] : e.target.value})
    }
  return (
    <div className='rightside'>
       <div><h1>₹1 Crore life cover starting at ₹490/month+</h1></div> 
       <div><p> Get an online discount of upto 10%#</p></div>
       <form>
        <input onChange={HandleData} value="male" for="name" name="gender" type="radio" />
        <label id='name'  >Male</label>
        <input onChange={HandleData} value="female"  name="gender" type="radio" />
        <label>Female</label>
        <fieldset>
        <legend>Your Name</legend>
            <input onChange={HandleData}   name="name" type="text" placeholder='Enter name' />
        </fieldset>
        <fieldset>
        <legend>Date Of Birth</legend>
            <input onChange={HandleData}   name="date" type='date'  />
        </fieldset>
        <fieldset>
        <legend>Mobile Number</legend>
            <input onChange={HandleData}  name="number" type='tel' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required placeholder='Enter Mobile Number' />
        </fieldset>
        <div className='buttontap'><button onClick={HandleSubmit} >View Free Quotes ➜</button></div>
       </form>
       <p>📋Only certified Policybazaar expert will assist you</p>
       <p>By clicking, you agree to our Privacy policy,Terms of Use & + Disclaimers</p>
    </div>
  )
}
