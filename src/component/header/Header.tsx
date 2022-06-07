import next from "next";
// import img from "next/img";
import Link from "next/link";
// import Logo from "../../images/logo.svg"

export default function Header (){
    return(
        <header className="rt-header">
            <strong className="rt-logo">
                <Link href="">
                    <a>
                        <img src="../../images/logo.svg" alt="logo"/>
                    </a>
                </Link>
            </strong>
            <div className="rt-searchform">
                <form className="rt-formtheme">
                    <fieldset>
                        <div className="form-group">
                            <input type="text" name="search" placeholder="search" />
                            <Link href="">
                                <a>
                                    <img src="../../images/search.svg"/>
                                </a>
                            </Link>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div className="rt-navigation">
                <nav className="rt-nav">
                    <ul>
                        <li>
                            <Link href="">
                                <a className="rt-active">Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a>Reviews</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                                <a className="rt-connect">Connect</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="">
                            <a className="rt-profile">
                                    <img src="../../images/user.png" alt="user avtar"/>
                                    <span>ted.eth</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}