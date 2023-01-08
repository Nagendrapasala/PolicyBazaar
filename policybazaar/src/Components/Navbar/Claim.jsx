import { Link } from "react-router-dom"

const Claim=()=>
{
    return(
        <div id="navbarclaim">
            <Link to="/claim/new-claim">File a new Claim</Link><br/>
            <hr/>
            <Link to="/claim/already-filed-claim">Claim is already filed with the Insurer</Link><br/>
            <hr/>
            <Link to="/claim/filing-claim">Know more about filing claim</Link><br/>
            <hr/>
            <Link to="/claim/track-exising-claim">Track Existing Claim</Link><br/>
        </div>
    )
}
export default Claim