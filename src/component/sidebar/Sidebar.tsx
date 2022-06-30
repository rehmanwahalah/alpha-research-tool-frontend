import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/auth/async.func";
import { selectUser } from "../../store/auth/selector";

export default function Sidebar() {
  const user = useSelector(selectUser);
  const dispatch:any = useDispatch()

  const handleLogout = async () => {
    dispatch(logout())
  };

  return (
    <aside className="rt-sidebarwrapper">
      <div className="rt-sidebar">
        <div className="rt-navigation">
          <nav className="rt-nav">
            <ul>
              {/* <li>
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
              </li> */}
              <li>
                <Link href="/project">
                  <a>
                    <i className="icon-Vector-1"></i>
                    <span>Projects</span>
                  </a>
                </Link>
              </li>
              {
                user?.roles.includes("admin") && 
              <li>
                <Link href="/user">
                  <a>
                    <i className="icon-Group-28485"></i>
                    <span>Users</span>
                  </a>
                </Link>
              </li>
              }
              {/* <li>
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
              </li> */}
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
  );
}
