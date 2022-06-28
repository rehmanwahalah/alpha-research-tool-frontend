import axios from "axios";
import next from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { env } from "process";
import { useDispatch } from "react-redux";
import TwitterLogin from "react-twitter-login";
import { baseURL } from "../../constants/env";
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
    window.location.href = env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3017/api/v1/auth/twitter'
    // window.location.href = `${env.NEXT_PUBLIC_API_ENDPOINT}/auth/twitter` || 'https://alpharesearchtool.herokuapp.com/api/v1/auth/twitter'
  };

  return (
    <div className="rt-loginwrapper">
      <div className="rt-login">
        <strong className="rt-loginlogo">
          <span>
            <img src="../../images/logo.svg" />
          </span>
        </strong>
        <form className="rt-themeform rt-loginform">
          <fieldset>
            {/* <legend>Login</legend> */}
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
                Login With Twitter
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
