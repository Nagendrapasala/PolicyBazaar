import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate,Navigate } from 'react-router-dom'
import { Health_action } from './Health_action'
import "./Right.css"

export const Family_right = () => {
    let navigate = useNavigate()
    const[details,setDetails] = React.useState({
        self:false,
        spouse:false,
        son:false,
        doughter:false,
        father:false,
        mother:false

    })
    let dispatch = useDispatch()
    function HandleChange(){
        Health_action(details,dispatch);
        // <Navigate to="/age" />
        navigate('/age')

    }
    // function Handleson(){
    //     let a;
    //     if(details.son.check){
    //         a=false
    //     }else {
    //         a=true
    //     }
    //     let b = {...details.son,check:a}
    //     setDetails({...details,son:b})
    // }
    // function Handledoughter(){
    //     let a;
    //     if(details.doughter.check){
    //         a=false
    //     }else {
    //         a=true
    //     }
    //     let b = {...details.doughter,check:a}
    //     setDetails({...details,doughter:b})
    // }
    // function Handlesoncountinc(){
    //     let a = details.son.count
    //     if(details.son.count>0)
    //     {
    //         ++a;
    //     }
    //     let b = {...details.son,count:a}
    //     // setDetails({...details,son:b})
    //     console.log(b)
    // }
    // function Handlesoncountdic(){
    //     let a = details.son.count
    //     if(details.son.count>0)
    //     {
    //         --a;
    //     }
    //     let b = {...details.son,count:a}
    //     setDetails({...details,son:b})
    // }
    // function Handledoughtercountinc(){
    //     let a = details.doughter.count
    //     if(details.doughter.count>0)
    //     {
    //         ++a;
    //     }
    //     let b = {...details.doughter,count:a}
    //     setDetails({...details,doughter:b})
    // }
    // function Handledoughtercountdic(){
    //     let a = details.doughter.count
    //     if(details.doughter.count>0)
    //     {
    //         --a;
    //     }
    //     let b = {...details.doughter,count:a}
    //     setDetails({...details,doughter:b})
    // }
    
  return (
    <div className='rightside_2'>
        <h1>Find top health insurance plans</h1>
        <h1>with up to 25% discount</h1>
        <form>
            <h3>Who would you like to insure?</h3>
            <div>
            <fieldset><div>
                <input onClick={()=>{details.self?setDetails({...details,self:false}):setDetails({...details,self:true});console.log(details)}}  name='self' type="checkbox" />
                <label>Self</label>
                </div>
                <div></div>
            </fieldset>
            <fieldset><div>
                <input onClick={()=>{details.spouse?setDetails({...details,spouse:false}):setDetails({...details,spouse:true})}} type="checkbox" />
                <label>Spouse</label></div>
                <div></div>
            </fieldset>
            <fieldset>
                <div><input onClick={()=>{details.son?setDetails({...details,son:false}):setDetails({...details,son:true})}} type="checkbox" />
                <label>Son</label></div>
                {/* <div><button disabled={details.son.check} onClick={Handlesoncountdic} >-</button> <span>{details.son.count}</span> <button disabled={details.son.check} onClick={Handlesoncountinc} >+</button></div> */}
            </fieldset>
            <fieldset>
                <div><input onClick={()=>{details.doughter?setDetails({...details,doughter:false}):setDetails({...details,doughter:true})}} type="checkbox" />
                <label>Daughter</label></div>
                {/* <div><button disabled={details.doughter.check} onClick={Handledoughtercountdic} >-</button> <span>{details.doughter.count}</span> <button disabled={details.doughter.check} onClick={Handledoughtercountinc} >+</button></div> */}
            </fieldset>
            <fieldset><div>
                <input onClick={()=>{details.father?setDetails({...details,father:false}):setDetails({...details,father:true})}} type="checkbox" />
                <label>Father</label></div>
                <div></div>
            </fieldset>
            <fieldset><div>
                <input onClick={()=>{details.mother?setDetails({...details,mother:false}):setDetails({...details,mother:true})}} type="checkbox" />
                <label>Mother</label></div>
                <div></div>
            </fieldset>
            </div>
        </form>
        <div className='cont'>
        <button className='continue' onClick={HandleChange} >Continue</button>
        <p>By clicking on “CONTINUE”, you agree to our Privacy Policy, Terms of Use & *Disclaimer</p></div>
    </div>
  )
}
