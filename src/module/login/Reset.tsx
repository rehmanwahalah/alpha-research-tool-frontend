import next from "next";
import Link from "next/link";

export default function Reset(){
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
                        <legend>Reset Password</legend>
                        <div className="form-group">
                            <label>New Password</label>
                            <input type="text" placeholder="......... "/>
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input type="text" placeholder="......... "/>
                        </div>
                        <Link href="">
                            <a className="rt-btn rt-btn-lg rt-btnlogin">Submit</a>
                        </Link>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}