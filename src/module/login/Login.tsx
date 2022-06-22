import next from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import TwitterLogin from "react-twitter-login";

export default function Login() {
    const {data: session} = useSession()

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
            {
                session ? <button className="rt-loginwithtwitter" onClick={() => {signOut()}}>logout</button> : <button className="rt-loginwithtwitter" onClick={() => {signIn()}}>Login With Twitter</button>
            }
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
