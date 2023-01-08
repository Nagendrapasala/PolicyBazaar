import { FiUmbrella } from 'react-icons/fi'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'
import { FaPiggyBank } from 'react-icons/fa'
import { FaHeartbeat } from 'react-icons/fa'
import { AiFillCar } from 'react-icons/ai'
import { Link } from "react-router-dom"
import Data from "./Data"
const Insurance=()=>
{
    return(
        <div id="navbarinsuranceprod">
        <div>
            <div className="icontext">
                <FiUmbrella color="purple" size="20"/>
                <h3>Term Insurance</h3>
            </div>
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(typeof Data.TermInsurance)
                    Data.TermInsurance.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link to={`/lifeinsurance/term-insurance/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
        <div className="icontext">
                <HiOutlineSquares2X2 color="cyan" size="20"/>
                <h3>Other Insurance</h3>
            </div>
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(typeof Data.TermInsurance)
                    Data.OtherInsurance.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link to={`/lifeinsurance/other-insurance/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
        <div className="icontext">
                <FaPiggyBank color="orange" size="20"/>
                <h3>Investment Plans</h3>
            </div>
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(typeof Data.TermInsurance)
                    Data.InvestmentPlans.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link to={`/lifeinsurance/investment-plans/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
        <div className="icontext">
                <FaHeartbeat color="pink" size="20"/>
                <h3>Health Insurance</h3>
            </div>
            
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(typeof Data.TermInsurance)
                    Data.HealthInsurance.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link to={`/lifeinsurance/health-insurance/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div>
        <div className="icontext">
                <AiFillCar color="lightblue" size="20"/>
                <h3>Car Insurance</h3>
            </div>
            
            <ul style={{listStyleType:"none"}}>
                {
                    //console.log(typeof Data.TermInsurance)
                    Data.CarInsurance.map((ele,i)=>
                    {
                        return (
                            <li key={i}><Link to={`/lifeinsurance/car-insurance/${ele.path}`}>{ele.title}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
    )
}
export default Insurance