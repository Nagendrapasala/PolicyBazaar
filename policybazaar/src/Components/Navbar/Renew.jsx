import { Link } from "react-router-dom"
import { FiUmbrella } from "react-icons/fi"
import { FaHeartbeat } from "react-icons/fa"
import { AiFillCar } from "react-icons/ai"
import {TbMotorbike} from "react-icons/tb"
const Renew=()=>
{
    return(
        <div id="navbarrenew">
            <div className="icontext">
                <FiUmbrella color="purple" size="20"/>
                <Link to="/renewal/life-renewal">Life Renewal</Link>
            </div>
            <hr/>
            <div className="icontext">
                <FaHeartbeat color="pink" size="20"/>
                <Link to="/renewal/health-renewal">Health Renewal</Link>
            </div>
            <hr/>
            <div className="icontext">
                <AiFillCar color="lightblue" size="20"/>
                <Link to="/renewal/motor-renewal">Motor Renewal</Link>
            </div>
            <hr/>
            <div className="icontext">
                <TbMotorbike color="orange" size="20"/>
                <Link to="/renewal/two-wheeler-renewal">Two Wheeler Renewal</Link>
            </div>
        </div>
    )
}
export default Renew