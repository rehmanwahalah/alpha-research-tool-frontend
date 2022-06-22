import next from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function Sidebar(){
    const {data: session} = useSession()
    console.log(session, "SIDE BAR")
    const router = useRouter();

    const handleLogout = async () => {
        await signOut()
        router.push("/")    
    }

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
                <button onClick={handleLogout} className="rt-btnlogout rt-btn">
                    <i className="icon-logout"></i>
                </button>
                {/* <Link href="/" onClick={() => {signOut()}}>
                    <a className="rt-btnlogout rt-btn">
                        <i className="icon-logout"></i>
                        <span>Logout</span>
                    </a>
                </Link> */}
            </div>
        </aside>
    )
}