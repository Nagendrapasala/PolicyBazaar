import {FaFacebookF,FaTwitter,FaLinkedin,FaYoutube} from "react-icons/fa"
const FooterMid=()=>
{
    return(
        <>
            <ul id="footermidchild">
                <li>Home</li>
                <li>About Us</li>
                <li>Sitemap</li>
                <li>Careers</li>
                <li>Legal & Admin Policies</li>
                <li>ISNP</li>
                <li>Insurance Companies</li>
                <li>Articles</li>
                <li>Contact Us</li>
                <li>Know Your Advisor</li>
                <li>Newsroom</li>
                <li>Security</li>
            </ul>
            <div id="footermidchildnext">
                <FaFacebookF size="20" color="white"/>
                <FaTwitter size="20" color="white"/>
                <FaLinkedin size="20" color="white"/>
                <FaYoutube size="20" color="white"/>
            </div>
        </>
    )
}
export default FooterMid