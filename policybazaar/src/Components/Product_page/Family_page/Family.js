import React from 'react'
import "./Family.css"
import { Family_left } from './Family_left'
import { Family_right } from './Family_right'
import { WhyBuy } from '../Product_footer/WhyBuy'
import { Page2 } from '../Page_2/Page2'
import { Page3 } from '../Page_3/Page3'
import { Page4 } from '../Page_4/Page4'
// import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Outlet } from 'react-router-dom'
export const Family = () => {
  return (
    <>
    <div className='family_main'>
        <Family_left />
        {/* <Family_right /> */}
        {/* <Page2 /> */}
        {/* <Page3 /> */}
        {/* <Page4 /> */}
        
    <Outlet />
        
    </div>
    <div>
        {/* <WhyBuy /> */}
    </div>
    </>
  )
}
