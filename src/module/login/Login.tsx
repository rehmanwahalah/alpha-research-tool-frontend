import axios from "axios";
import next from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Router, {  useRouter } from "next/router";
import { env } from "process";
import { useDispatch } from "react-redux";
import TwitterLogin from "react-twitter-login";
import { backendUrl, baseURL } from "../../constants/env";
import { authService } from "../../services/auth.service";
import { loginUser } from "../../store/auth/async.func";

export default function Login() {
  const dispatch: any = useDispatch();
  const router = useRouter();

  // const {data: session} = useSession()

  // if(session?.user?.email) {
  //   dispatch(loginUser(session?.user,router))
  // }

  const socialLogin = async () => {
    // window.location.href = 'http://localhost:3017/api/v1/auth/twitter'
    // window.location.href = 'https://alpharesearchtool.herokuapp.com/api/v1/auth/twitter'
    window.location.href = backendUrl
  };

  return (
    <div className="rt-loginwrapper">
      <div className="rt-login">
        <strong className="rt-loginlogo">
          <span>
            <img src="../../images/loginlogo.svg" />
          </span>
        </strong>
        <form className="rt-themeform rt-loginform">
          <fieldset>
            <legend>be early join us</legend>
            {/* <div className="form-group">
              <label>Email</label>
              <input type="text" placeholder="Enter Your Email " />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="text" placeholder="......... " />
            </div>
            <Link href="/forgot">
              <a className="rt-forgotpassword">Forgot Password</a>
            </Link>
            <Link href="/project">
              <a className="rt-btn rt-btn-lg rt-btnlogin">Login</a>
            </Link> */}
            {/* <span className="rt-loginwith">or</span> */}
            <div className="rt-checkbox rt-checkboxterm">
              {/* <input type="checkbox" id="checkbox" name="checkbox" /> */}
              <label htmlFor="checkbox" className="text-center">
                <p>By clicking the button below, you agree to</p>
                <p>Alpha research Tools <Link href="/terms-and-conditions"><a>Terms of services</a></Link> and <Link href="/privacy-policy"> Privacy policy</Link>.</p>
              </label>
            </div>
            {false ? (
              <button
                className="rt-loginwithtwitter"
                onClick={() => {
                  signOut();
                }}
              >
                logout
              </button>
            ) : (
              <button
                className="rt-loginwithtwitter"
                type="button"
                onClick={() => {
                  socialLogin();
                }}
              >
                <i className="icon-twitter"></i>
                <span>Login With Twitter</span>
              </button>
            )}
            {/* <TwitterLogin
              authCallback={authHandler}
              consumerKey={"VTRKajJwV1h6bUlHTmlMOFN1SUk6MTpjaQ"}
              consumerSecret={"yvY2UtND-Acnb_IyuR-PGTEIHKQNg8NZXGu_urY0nrOcmTh4tx"}
            /> */}
            {/* <Link href="">
                            <a className="rt-loginwithtwitter">
                                <img src="../../images/twitter.svg" alt="instagrm icon"/>
                                <span>Login With Twitter</span>
                            </a>
                        </Link> */}
          </fieldset>
        </form>
      </div>
    </div>
  );
}
