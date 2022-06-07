import next from "next";
import Link from "next/link";

export default function Login(){
    return(
        <div className="rt-loginwrapper">
            <div className="rt-login">
                <strong className="rt-loginlogo">
                    <span>
                        <img src="../../images/logo.svg"/>
                    </span>
                </strong>
                <form className="rt-themeform rt-loginform">
                    <fieldset>
                        <legend>Login</legend>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" placeholder="Enter Your Email "/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="text" placeholder="......... "/>
                        </div>
                        <Link href="">
                            <a className="rt-forgotpassword">Forgot Password</a>
                        </Link>
                        <Link href="">
                            <a className="rt-btn rt-btn-lg rt-btnlogin">Login</a>
                        </Link>
                        <span className="rt-loginwith">or</span>
                        <Link href="">
                            <a className="rt-loginwithtwitter">
                                <img src="../../images/twitter.svg" alt="instagrm icon"/>
                                <span>Login With Twitter</span>
                            </a>
                        </Link>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}