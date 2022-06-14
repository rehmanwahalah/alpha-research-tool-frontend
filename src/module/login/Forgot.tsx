import next from "next";
import Link from "next/link";

export default function Forgot(){
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
                        <legend>Forgot</legend>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" placeholder="Enter Your Email "/>
                        </div>
                        <Link href="/reset">
                            <a className="rt-btn rt-btn-lg rt-btnlogin">Reset Password</a>
                        </Link>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}