import { BsUmbrella } from "react-icons/bs"
import {AiOutlinePlusSquare} from "react-icons/ai"
import { FaHeartbeat } from 'react-icons/fa'
import {BiRupee} from "react-icons/bi"
import {AiTwotoneInsurance} from "react-icons/ai"
import FooterData from "./Data"
const FooterPlans=()=>
{
    return(
        <>
            <div>
            <div className="icontextfooter">
                    <BsUmbrella size="30" color="white"/>
                    <h4>Life Insurance</h4>
            </div>
            {
                FooterData["Life Insurance"].map((ele)=>
                {
                    return(
                        <li style={{listStyleType:"none",marginLeft:"45px"}}>{ele}</li>
                    )
                })
            }
            </div>
            <div>
            <div className="icontextfooter">
                    <AiOutlinePlusSquare size="30" color="white"/>
                    <h4>Other Insurance</h4>
            </div>
            {
                FooterData["Other Insurance"].map((ele)=>
                {
                    return(
                        <li style={{listStyleType:"none",marginLeft:"45px"}}>{ele}</li>
                    )
                })
            }
            </div>
            <div>
            <div className="icontextfooter">
                    <FaHeartbeat size="30" color="white"/>
                    <h4>Health Insurance</h4>
            </div>
            {
                FooterData["Health Insurance"].map((ele)=>
                {
                    return(
                        <li style={{listStyleType:"none",marginLeft:"45px"}}>{ele}</li>
                    )
                })
            }
            </div>
            <div>
            <div className="icontextfooter">
                    <BiRupee size="30" color="white"/>
                    <h4>Investment</h4>
            </div>
            {
                FooterData.Investment.map((ele)=>
                {
                    return(
                        <li style={{listStyleType:"none",marginLeft:"45px"}}>{ele}</li>
                    )
                })
            }
            </div>
            <div>
            <div className="icontextfooter">
                    <AiTwotoneInsurance size="30" color="white"/>
                    <h4>General Insurance</h4>
            </div>
            {
                FooterData["General Insurance"].map((ele)=>
                {
                    return(
                        <li style={{listStyleType:"none",marginLeft:"45px"}}>{ele}</li>
                    )
                })
            }
            </div>
        
        
        </>
    )
}
export default FooterPlans