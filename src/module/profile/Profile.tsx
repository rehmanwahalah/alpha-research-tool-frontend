import next from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "../../component/header/Header";
import Sidebar from "../../component/sidebar/Sidebar";
import { selectUser } from "../../store/auth/selector";

export default function Profile() {
    const user = useSelector(selectUser);

    return (
        <Fragment>
            <Header />
            <Sidebar />
            <div className="rt-profile">
                <div className="rt-profileholder rt-projecttableholder">
                    <form className="rt-formtheme">
                        <fieldset>
                            <div className="rt-profilecontent">
                                <div className="rt-sectiontitle">
                                    <h2>Profile Settings</h2>
                                </div>
                                <div className="rt-profiledata">
                                    <figure className="rt-profileimg">
                                        <img src={user?.avatar ?  user?.avatar : "../../images/user.png"} alt="profile image" />
                                        {/* <figcaption>
                                            <div className="rt-inputfile">
                                                <label htmlFor="rt-changeprofileimg">
                                                    <i className="icon-bx_edit"></i>
                                                </label>
                                                <input type="file" id="rt-changeprofileimg" />
                                            </div>
                                        </figcaption> */}
                                    </figure>
                                    <div className="rt-profilecontentholder">
                                        <ul>
                                            <li>
                                                <span>Name</span>
                                                <span>{user?.name}</span>
                                            </li>
                                            <li>
                                                <span>Username</span>
                                                <span>{user?.username}</span>
                                            </li>
                                            <li>
                                                <span>Email</span>
                                                <span>{user?.email}</span>
                                            </li>
                                        </ul>
                                        {/* <div className="rt-btnholder">
                                            <Link href="/editprofile">
                                                <a className="rt-btn rt-btn-lg">Edit Profile</a>
                                            </Link>
                                            <Link href="javascript: void(0);">
                                                <a className="rt-btn rt-btn-lg rt-btnclear">Change Password</a>
                                            </Link>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="rt-notisetting">
                                <div className="rt-sectiontitle">
                                    <h2>Notification Settings</h2>
                                    <Link href="">
                                        <a>
                                            <i className="icon-bx_edit"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="rt-notisettingholder">
                                    <div className="rt-checkbox">
                                        <input type="checkbox" name="checkbox" id="rt-checkbox"/>
                                        <label htmlFor="rt-checkbox">
                                            twitter
                                            <span></span>
                                        </label>
                                    </div>
                                    <div className="rt-checkbox">
                                        <input type="checkbox" id="rt-checkboxone"/>
                                        <label htmlFor="rt-checkboxone">
                                            twitter
                                            <span></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}