import next from "next";
import Link from "next/link";

export default function Sidebar(){
    return(
        <aside className="rt-sidebarwrapper">
            <div className="rt-sidebar">
                <div className="rt-navigation">
                    <nav className="rt-nav">
                        <ul>
                            <li>
                                <Link href="/project">
                                    <a>
                                        <i className="icon-Vector"></i>
                                        <span>Dashboard</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/project">
                                    <a>
                                        <i className="icon-Group"></i>
                                        <span>Rankings</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/project">
                                    <a>
                                        <i className="icon-Vector-1"></i>
                                        <span>Projects</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/review">
                                    <a>
                                        <i className="icon-Group-28485"></i>
                                        <span>Reviews</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/project">
                                    <a>
                                        <i className="icon-Group-28486"></i>
                                        <span>Orders</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/project">
                                    <a>
                                        <i className="icon-Group-28487"></i>
                                        <span>Blogs</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Link href="/">
                    <a className="rt-btnlogout rt-btn">
                        <i className="icon-logout"></i>
                        <span>Logout</span>
                    </a>
                </Link>
            </div>
        </aside>
    )
}