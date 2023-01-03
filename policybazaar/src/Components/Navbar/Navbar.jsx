import { Link } from "react-router-dom"
import "./Navbar.css"
import { RiArrowDropDownLine } from 'react-icons/ri'
const Navbar=()=>
{
    return(
        <div id="navparent">
            <div>
                <img src="https://static.pbcdn.in/cdn/images/new-home/chlogopb.gif?v=1"/>
            </div>
            <div>
                <div>
                    <Link>Insurance Products</Link>
                    <RiArrowDropDownLine size="40"/>
                </div>
                <div>
                    <Link>Renew Your Policy</Link>
                    <RiArrowDropDownLine size="40"/>
                </div>
                <div>
                    <Link>Claim</Link>
                    <RiArrowDropDownLine size="40"/>
                </div>
                <div>
                    <Link>Support</Link>
                    <RiArrowDropDownLine size="40"/>
                </div>
                
                
            </div>
            <div>
                <button><Link to="/login">Sign in</Link></button>
            </div>
        </div>
    )
}
export default Navbar