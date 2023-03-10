import { Route, Routes } from "react-router-dom";
import FinalCheckout from "../FinalCheckout/Checkout";
import OTP from "../FinalCheckout/OTP";
import Login from "../Login/LoginComp/Login";
import Data from "../Navbar/Data";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "../Home/Home";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lifeinsurance">
          <Route path="term-insurance">
            {Data.TermInsurance.map((ele) => {
              return <Route path={ele.path} />;
            })}
          </Route>
          <Route path="other-insurance">
            {Data.OtherInsurance.map((ele) => {
              return <Route path={ele.path} />;
            })}
          </Route>
          <Route path="investment-plans">
            {Data.InvestmentPlans.map((ele) => {
              return <Route path={ele.path} />;
            })}
          </Route>
          <Route path="health-insurance">
            {Data.HealthInsurance.map((ele) => {
              return <Route path={ele.path} />;
            })}
          </Route>
          <Route path="car-insurance">
            {Data.CarInsurance.map((ele) => {
              return <Route path={ele.path} />;
            })}
          </Route>
        </Route>
        <Route path="/renewal">
          <Route path="life-renewal" />
          <Route path="health-renewal" />
          <Route path="motor-renewal" />
          <Route path="two-wheeler-renewal" />
        </Route>
        <Route path="/claim">
          <Route path="new-claim" />
          <Route path="already-filed-claim" />
          <Route path="filing-claim" />
          <Route path="track-exising-claim" />
        </Route>
        <Route path="/support">
          <Route path="account">
            <Route path="policies" />
            <Route path="get-help" />
            <Route path="communication-preferences" />
            <Route path="advisor" />
          </Route>
          <Route path="contact">
            <Route path="whatsapp" />
            <Route path="stores" />
            <Route path="callback" />
          </Route>
        </Route>

        <Route
          path="/login"
          element={
            <ChakraProvider>
              <Login />
            </ChakraProvider>
          }
        ></Route>
        <Route path="checkout" element={<FinalCheckout />} />
        <Route path="otp" element={<OTP></OTP>} />
      </Routes>
    </div>
  );
};
export default AllRoutes;
