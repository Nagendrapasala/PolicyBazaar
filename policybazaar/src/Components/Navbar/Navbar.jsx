import { Link } from "react-router-dom"
import "./Navbar.css"
import { FcCollapse, FcExpand } from 'react-icons/fc'
import Insurance from "./Insurance"
import Renew from "./Renew"
import Claim from "./Claim"
import { useState } from "react"
import {HiOutlineMenu} from "react-icons/hi"
import Support from "./Support"
import SideMenu from "./SideMenu"
const Navbar=()=>
{
    const[hoverstate,sethoverstate]=useState({IP:false,RP:false,Cl:false,Sup:false})
    const[display,setdisplay]=useState(false)
    return(
        <div style={{display:"flex",alignItems:"center"}}>
            <div>
                 <HiOutlineMenu onClick={()=>
                {
                    setdisplay(true)
                }} id="navmenu" size={30}/>
            </div>
        <div id="navparent" onMouseEnter={()=>sethoverstate({IP:false,RP:false,Cl:false,Sup:false})}>
            
            <div>
                <Link to="/"><img alt="policyimage" src="https://static.pbcdn.in/cdn/images/new-home/chlogopb.gif?v=1"/></Link>
            </div>
            <div>
                <div onMouseEnter={()=>sethoverstate({...hoverstate,IP:true,RP:false,Cl:false,Sup:false})}>
                    <Link>Insurance Products</Link>
                    {
                        hoverstate.IP?<FcCollapse size="20"/>:<FcExpand size="20"/>
                    }
                </div>
                <div onMouseEnter={()=>sethoverstate({...hoverstate,RP:true,IP:false,Cl:false,Sup:false})}>
                    <Link>Renew Your Policy</Link>
                    {
                        hoverstate.RP?<FcCollapse size="20"/>:<FcExpand size="20"/>
                    }
                </div>
                <div onMouseEnter={()=>sethoverstate({...hoverstate,Cl:true,IP:false,RP:false,Sup:false})}>
                    <Link>Claim</Link>
                    {
                        hoverstate.Cl?<FcCollapse size="20"/>:<FcExpand size="20"/>
                    }
                </div>
                <div onMouseEnter={()=>sethoverstate({...hoverstate,Sup:true,IP:false,RP:false,Cl:false})}>
                    <Link>Support</Link>
                    {
                        hoverstate.Sup?<FcCollapse size="20"/>:<FcExpand size="20"/>
                    }
                </div>
            </div>
            <div>
                <button onMouseEnter={()=>sethoverstate({IP:false,RP:false,Cl:false,Sup:false})}><Link to="/login">Sign in</Link></button>
            </div>
        </div>
        {display?<SideMenu setdisplay={setdisplay}/>:null}
        {hoverstate.IP?<Insurance />:null}
        {hoverstate.RP?<Renew />:null}
        {hoverstate.Cl?<Claim />:null}
        {hoverstate.Sup?<Support />:null}
        
        </div>
    )
}
export default Navbar