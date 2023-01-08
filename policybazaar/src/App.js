
import './App.css';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import FinalCheckout from './Components/FinalCheckout/Checkout';
import Footer from './Components/Footer/Footer';
import HomePage from "./Components/Home/Home";
import Navbar from './Components/Navbar/Navbar';
import {Product} from "./Components/Product_page/Insurance_page/Product.js"
import { Family } from './Components/Product_page/Family_page/Family';
import { Family_right } from './Components/Product_page/Family_page/Family_right'
// import { WhyBuy } from '../Product_footer/WhyBuy'
import { Page2 } from './Components/Product_page/Page_2/Page2'
import { Page3 } from './Components/Product_page/Page_3/Page3'
import { Page4 } from './Components/Product_page/Page_4/Page4'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Display_data } from './Components/Product_page/data/Display_data';
function App() {
  return (
    <div>
      <Navbar/> 
      <AllRoutes />
       <Footer />
   
        {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/health' element={<Family />} >
          <Route path='health' element={<Family_right />} />
          <Route path="age" element={<Page2 />} />
          <Route path='pincode' element={<Page3 />} />
          <Route path='contact' element={<Page4 />} />
          <Route path='*' element={<div>ERROR</div>} />
        </Route>
          <Route path='/plans' element={<Display_data />} />
          <Route path='/term' element={<Product />} />
        </Routes> */}

    </div>
  );
}

export default App;
