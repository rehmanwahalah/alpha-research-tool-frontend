import next from "next";
import Link from "next/link";
import { Fragment } from "react";
import Header from "../../component/header/Header";
import Sidebar from "../../component/sidebar/Sidebar";

export default function Editprofile() {
    return (
        <Fragment>
            <Header />
            <Sidebar />
            <div className="rt-profile ">
                <div className="rt-profileholder rt-editprofileholder rt-projecttableholder">
                    <form className="rt-formtheme">
                        <fieldset>
                            <div className="rt-profilecontent rt-editprofilrcontent">
                                <div className="rt-sectiontitle">
                                    <h2>Profile Settings</h2>
                                </div>
                                <div className="rt-editprofile">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" name="username" placeholder="davidminer" />
                                    </div>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" placeholder="David San Fik" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" name="email" placeholder="David012@gmail.com" />
                                    </div>
                                    <div className="rt-btnholder">
                                        <Link href="">
                                            <a className="rt-btn rt-btnclear">Cancel</a>
                                        </Link>
                                        <Link href="">
                                            <a className="rt-btn">Save Change</a>
                                        </Link>
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
                                        <label htmlFor="rt-checkbox">
                                            twitter
                                            <span></span>
                                        </label>
                                        <input type="checkbox" id="rt-checkbox"/>
                                    </div>
                                    <div className="rt-checkbox">
                                        <label htmlFor="rt-checkboxone">
                                            twitter
                                            <span></span>
                                        </label>
                                        <input type="checkbox" id="rt-checkboxone"/>
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