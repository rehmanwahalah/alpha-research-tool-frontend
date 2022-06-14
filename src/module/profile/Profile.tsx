import next from "next";
import Link from "next/link";
import { Fragment } from "react";
import Header from "../../component/header/Header";
import Sidebar from "../../component/sidebar/Sidebar";

export default function Profile() {
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
                                        <img src="../../images/user.png" alt="profile image" />
                                        <figcaption>
                                            <div className="rt-inputfile">
                                                <label htmlFor="rt-changeprofileimg">
                                                    <i className="icon-bx_edit"></i>
                                                </label>
                                                <input type="file" id="rt-changeprofileimg" />
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <div className="rt-profilecontentholder">
                                        <ul>
                                            <li>
                                                <span>Name</span>
                                                <span>David San Fik</span>
                                            </li>
                                            <li>
                                                <span>Username</span>
                                                <span>davidminer</span>
                                            </li>
                                            <li>
                                                <span>Email</span>
                                                <span>David012@gmail.com</span>
                                            </li>
                                        </ul>
                                        <div className="rt-btnholder">
                                            <Link href="/editprofile">
                                                <a className="rt-btn rt-btn-lg">Edit Profile</a>
                                            </Link>
                                            <Link href="javascript: void(0);">
                                                <a className="rt-btn rt-btn-lg rt-btnclear">Change Password</a>
                                            </Link>
                                        </div>
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