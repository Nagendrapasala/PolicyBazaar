import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import lgnstl from "./Login.module.css";
import { CgCloseO } from "react-icons/cg";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
function Login() {
  const [page, setPage] = useState(true);
  const [navigateToHome, setNavigateToHome] = useState(false);
  const { isAuth } = useSelector((store) => store);
  const goBackToHome = () => {
    setNavigateToHome(true);
  };
  if (isAuth || navigateToHome) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={lgnstl.login_main}>
      <div className={lgnstl.login_container}>
        <div className={lgnstl.icon_div}>
          <CgCloseO
            onClick={() => {
              goBackToHome();
            }}
          />
        </div>
        <div className={lgnstl.logo_div}>
          <img
            src="https://static.pbcdn.in/cdn/images/new-home/logopb.svg?v=2"
            alt="logo"
          />
        </div>
        <div className={lgnstl.title_div}>
          <div>
            <img
              src="https://static.pbcdn.in/myaccount-cdn/images/login-illusion.png"
              alt=""
            />
          </div>
          <div>
            <h3>
              To {page ? "sign in" : "sign up"}, please enter your mobile number
            </h3>
          </div>
        </div>

        {page ? (
          <LoginForm />
        ) : (
          <SignupForm gotoPrevious={() => setPage(true)} />
        )}

        <div className={lgnstl.changepage}>
          <p>
            {page ? "First time user? " : "Already Signed up? "}
            <span className={lgnstl.spn} onClick={() => setPage(!page)}>
              {page ? "Sign up" : "Sign in"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;
