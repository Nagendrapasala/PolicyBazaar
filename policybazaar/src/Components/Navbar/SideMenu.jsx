import { Link } from "react-router-dom"
import {CgNotes} from "react-icons/cg"
import {RiQuestionnaireLine} from "react-icons/ri"
import { FiPhoneCall } from "react-icons/fi"
import {BsFillPersonFill, BsWhatsapp} from "react-icons/bs"
import { FaStore, FaRegMoneyBillAlt } from "react-icons/fa"
import {SlCallIn} from "react-icons/sl"
import {SlEarphonesAlt} from "react-icons/sl"
import {FiSettings} from "react-icons/fi"
import {GrClose} from "react-icons/gr"
const SideMenu=({setdisplay})=>
{
    return(
        <div id="navsidebar">
            <GrClose onClick={()=>
            {
                setdisplay(false)
            }} />
            <div className="supportwrapper">
                <button className="supportbutton">My Account</button>
            </div>
            <div id="navmyaccount" >
                <div className="icontext">
                    <CgNotes size="20" color="green"/>
                    <Link to="/support/account/policies">Policies</Link>
                </div>
                <div className="icontext">
                    <RiQuestionnaireLine size="20" color="greenyellow"/>
                    <Link to="/support/account/get-help">Get help</Link>
                </div>
                <div className="icontext">
                    <FiPhoneCall size="20" color="skyblue" />
                    <Link to="/support/account/communication-preferences">Manage Communication Preferences</Link>
                </div>
                <div className="icontext">
                    <BsFillPersonFill size="20" color="blue" />
                    <Link to="/support/account/advisor">Verify your advisor</Link>
                </div>
            </div>
            <div className="supportwrapper">
                <button className="supportbutton">Contact Us</button>
            </div>
            <div id="navcontact">
                <div>
                    <BsWhatsapp size="20" color="lightgreen" className="contreacticons"/><br/>
                    <Link to="/support/contact/whatsapp">Connect on Whatsapp</Link>
                </div>
                <div>
                    <FaStore size="20" color="orange" className="contreacticons" /><br/>
                    <Link to="/support/contact/whatsapp">Stores near you</Link>
                </div>
                <div>
                    <SlCallIn size="20" color="blue" className="contreacticons"/><br/>
                    <Link to="/support/contact/whatsapp">Request a callback</Link>
                </div>
            </div>
            <div id="navinfodetails">
                <div className="icontext">
                    <SlEarphonesAlt size="20" color="lightgreen" />
                    <p>Sales: 1800-208-8787</p>
                </div>
                <div className="icontext">
                    <FiSettings size="20" color="blue" />
                    <p>Service: 1800-258-5970</p>
                </div>
                <div className="icontext">
                    <FaRegMoneyBillAlt size="20" color="orange" />
                    <p>Claims: 1800-258-5881</p>
                </div>
            </div>

        </div>
    )
}
export default SideMenu