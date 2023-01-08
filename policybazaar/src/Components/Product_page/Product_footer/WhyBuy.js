import React from 'react'
import offordable from "./footer_images/offordable_price.png"
import premium from "./footer_images/premium.webp"
import timer from "./footer_images/timer.png"
import { Product_buy } from './Product_buy'
let arr = [
    {
        image:premium,
        title:"Platinum insurance partner",
        body:"Policybazaar is the largest partner for most Health Insurers and a Platinum partner, which means we prioritize your policy and claims to ensure treating them on priority"
    },
    {
        image:offordable,
        title:"Affordable options",
        body:"We make Health insurance more affordable for you through various monthly payment options and discounts provided by our Partners"
    },
    {
        image:timer,
        title:"30 minute claim support*",
        body:"Our Claim specialists will reach your hospital or home in 30 minutes to support your health insurance claim"
    }
]
export const WhyBuy = () => {
  return (
    <div className='footer1' >
        <h1>Why buy from Policybazaar?</h1>
        <div>
        {arr.map((e)=>(<Product_buy arr={e} />))}
        </div>
    </div>
  )
}
