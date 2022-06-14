import next from "next";
// import img from "next/img";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";
// import Logo from "../../images/logo.svg"

export default function Header() {
    return (
        <header className="rt-header">
            <strong className="rt-logo">
                <Link href="/project">
                    <a>
                        <img src="../../images/logo.svg" alt="logo" />
                    </a>
                </Link>
            </strong>
            <div className="rt-addnavigation">
                <nav className="rt-nav">
                    <ul>
                        <li>
                            <Link href="">
                                <img src="../../images/q.svg" alt="question image" />
                            </Link>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                    <img src="../../images/bell.svg" alt="bell icon" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"></Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Dropdown>
                                <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                    <img src="../../images/user.png" alt="user avtar" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">connect Wallet</Dropdown.Item>
                                    <Dropdown.Item href="/profile">
                                        <i className="icon-setting"></i>
                                        <span>Settings</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <i className="icon-wallet"></i>
                                        <span>Wallet</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/">
                                        <i className="icon-logout"></i>
                                        <span>Logout</span>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}