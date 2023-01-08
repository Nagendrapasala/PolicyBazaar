import { Table, Thead } from '@chakra-ui/react'
import React from 'react'
import { Display_single_page } from './Display_single_page'
import hdfc from "./HDFC_Life_logo.webp"
import icici from "./ICICI_logo.webp"
import max from "./MAX_logo.png"
import tata from "./TATA_AIA_logo (1).png"
import "./Display.css"
import { useSelector } from 'react-redux'

export const Display_data = () => {
   
    let logo = useSelector((st)=>st.Term_Life_Insurance)
    let ref_ins = React.useRef(null)
    let ref_Cov = React.useRef(null)
    let ref_age = React.useRef(null)
    let ref_claim = React.useRef(null)
    const[data2,setData2] = React.useState(logo);
    function Handle_Cover(el){
        if(ref_Cov.current.value==""){
            setData2(logo)
        }else{
        let g = logo.filter((e)=>(e.life_cover==ref_Cov.current.value))
        setData2(g)
        }
    }
    function Handle_claim(el){
        if(ref_claim.current.value==""){
            setData2(logo)
        }else if(ref_claim.current.value==="L"){
        let g = logo
        g.sort((a,b)=>{ return a.clim_settled - b.clim_settled})
        setData2(g)
        }else {
            let g = logo
        g.sort((a,b)=>(b.clim_settled - a.clim_settled))
        setData2(g)
        }
    }
    function Handle_age(el){
        if(ref_age.current.value==""){
            setData2(logo)
        }else{
        let g = logo.filter((e)=>(e.cover_till_age.max_age==ref_age.current.value))
        setData2(g)
        }
    }
    function Handle_Insurance(el){
        if(ref_ins.current.value==""){
            setData2(logo)
        }else{
        let g = logo.filter((e)=>(e.insurer.name==ref_ins.current.value))
        setData2(g)
        }
    }
    function Handle_monthly(){

        setData2(logo)
    }
    function Handle_yearly(){
        let g = logo.map((e)=>{return {...e,premium:parseInt(e.premium)*12}})
        setData2(g)
    }
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Insurer <select ref={ref_ins} onChange={Handle_Insurance} name="cars" id="cars">
                    <option value="">All</option>
                    <option value="HDFC Life">HDFC Life</option>
                    <option  value="ICICI">ICICI</option>
                    <option value="MAX Life">MAX Life</option>
                    <option value="TATA AIA">TATA AIA</option>
                </select></th>
                    <th>Life Cover<select ref={ref_Cov} onChange={Handle_Cover} name="cars" id="cars">
                    <option value="">All</option>
                    <option value="50">50 Lac</option>
                    <option  value="55">55 Lac</option>
                    <option value="60">60 Lac</option>
                    <option value="70">70</option>
                </select></th>
                    <th>Cover till age<select ref={ref_age} onChange={Handle_age} name="cars" id="cars">
                    <option value="">All</option>
                    <option value="60">60 Yrs</option>
                    <option  value="70">70 Yrs</option>
                    <option value="80">80 Yrs</option>
                    <option value="90">90 Yrs</option>
                </select></th>
                    <th>Claim Settled
                    <select ref={ref_claim} onChange={Handle_claim} name="cars" id="cars">
                    <option value="">All</option>
                    <option value="L">L to H</option>
                    <option  value="H">H to L</option>
                </select>
                    </th>
                    <th>
                    <button onClick={Handle_monthly}>Pay Monthly</button>
                    <button onClick={Handle_yearly}>Pay Yearly</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <br />
            {data2.map((e)=>{ return (<>
                <Display_single_page er={e} />
                <br />
                </>
            )
            })}
            </tbody>
        </table>
    </div>
  )

}
