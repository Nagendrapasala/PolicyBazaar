import { useState} from "react";
import {useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import lgnstl from "./Login.module.css";
import { CgCloseO } from "react-icons/cg";


function Login() {

  const [page, setPage] = useState(true);

  const { isAuth } = useSelector((store) => store.login);
  const navigate = useNavigate();


  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className={lgnstl.login_main}>
      <div className={lgnstl.login_container}>
        <div className={lgnstl.icon_div}>
          <CgCloseO
            onClick={() => {
              navigate("/");
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
