import {Route,Routes} from "react-router-dom"
const AllRoutes=()=>
{
    return(
        <div>
            <Routes>
                <Route path="/"></Route>
                <Route path="/lifeinsurance">
                    <Route path="term-insurance" />
                    <Route path="other-insurance" />
                    <Route path="investment-plans" />
                    <Route path="health-insurance" />
                    <Route path="car-insurance" />
                </Route>
                
                <Route path="/login">

                </Route>
            </Routes>
        </div>
    )
}
export default AllRoutes