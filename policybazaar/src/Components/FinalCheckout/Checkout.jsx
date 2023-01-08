import { useState } from "react"
import { Navigate } from "react-router-dom"
import "./Checkout.css"
import Credit from "./Credit"
import Debit from "./Debit"
import { useNavigate } from "react-router-dom"
const FinalCheckout=()=>
{
    const[card,setcard]=useState({debit:true,credit:false})
    const navigate=useNavigate()
    return(
        <div id="fcmaincont" style={{}}>
            <div id="fcparent">
                <div id="fcchild1">
                    <div className="fcicon" style={card.debit?{backgroundColor:"skyblue"}:null}>
                        <img src="https://cdn-icons-png.flaticon.com/512/4021/4021708.png"/>
                        <button style={card.debit?{backgroundColor:"skyblue"}:null} onClick={()=>
                        {
                            setcard({debit:true,credit:false})
                        }}>Debit Card</button>
                    </div>
                    <div className="fcicon" style={card.credit?{backgroundColor:"skyblue"}:null}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3596/3596091.png"/>
                        <button style={card.credit?{backgroundColor:"skyblue"}:null} onClick={()=>
                        {
                            setcard({debit:false,credit:true})
                        }}>Credit Card</button>
                    </div>
                    <div className="fcicon">
                        <img src="https://cdn-icons-png.flaticon.com/512/4519/4519104.png"/>
                        <button>Net Banking</button>
                    </div>
                    <div className="fcicon" style={{height:"60%"}}></div>
                    
                </div>
                <div style={{width:"100%"}}>
                    {
                        card.debit?<Debit />:null
                    }
                    {
                        card.credit?<Credit />:null
                    }
                </div>
            </div>
            <div id="fcchild2">
                <h2>Total Payable Amount:</h2><br/>
                <h5>Rs: </h5>
                <hr/><br/>
                <div style={{margin:"auto",width:"60%"}}>
                <button onClick={()=>
                {
                    console.log("Hi")
                    navigate("/otp")
                }}>Proceed To Pay</button>
                </div>
            </div>
        </div>
    )
}
export default FinalCheckout