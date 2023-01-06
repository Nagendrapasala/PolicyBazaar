import AE from "./Images/AmericanExpress.jpg"
import Visa from "./Images/Visa.jpg"
import Rupay from "./Images/Rupay.jpg"
import MasterCard from "./Images/MasterCard.jpg"
import Paytm from "./Images/Paytm.jpg"
import Netbanking from "./Images/NetBanking.jpg"
const FooterEnd=()=>
{
    return(
        <>
            <div style={{display:"flex",justifyContent:"space-between",marginBottom:"20px"}}>
                <h4>Payment Methods</h4>
                <h4>Secured With</h4>
            </div>
            <div id="footerendparent">
                <div id="footerchildend">
                    <div className="footerendicons">
                        <img src={Visa} />
                    </div>
                    <div className="footerendicons">
                        <img src={AE}/>
                    </div>
                    <div className="footerendicons">
                        <img src={Rupay} />
                    </div>
                    <div className="footerendicons">
                        <img src={MasterCard} />
                    </div>
                    <div className="footerendicons">
                        <img src={Paytm} />
                    </div>
                </div>
                <div className="footerendicons" style={{float:"right"}}>
                    <img src="https://static.pbcdn.in/cdn/images/webp/pcidss.webp" alt="" />
                </div>
            </div>
        </>
    )
}
export default FooterEnd