import Link from "next/link";
import React, { Fragment } from "react";
import Header from "../../component/header/Header";
import Sidebar from "../../component/sidebar/Sidebar";

export default function Notifaction() {
    return (
        <Fragment>
            <Header />
            <Sidebar />
            <div className="rt-profile">
                <div className="rt-profileholder rt-notifactionholder rt-projecttableholder">
                    <form className="rt-formtheme">
                        <fieldset>
                            <div className="rt-profilecontent rt-notifactioncontent rt-editprofilrcontent">
                                <div className="rt-sectiontitle">
                                    <h2>Twitter Notifications</h2>
                                    <Link href="">
                                        <a>
                                            <i className="icon-bx_edit"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="rt-noticontentholder">
                                    <ul>
                                        <li>
                                            <span>Lorem Ipsum</span>
                                            <p>This is dummy text for websites or apps.</p>
                                        </li>
                                        <li>
                                            <span>Lorem Ipsum</span>
                                            <p>This is dummy text for websites or apps.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="rt-notisetting">
                                <div className="rt-sectiontitle">
                                    <h2>Discord Notifications</h2>
                                    <Link href="">
                                        <a>
                                            <i className="icon-bx_edit"></i>
                                        </a>
                                    </Link>
                                </div>
                                <div className="rt-noticontentholder">
                                    <ul>
                                        <li>
                                            <span>Lorem Ipsum</span>
                                            <p>This is dummy text for websites or apps.</p>
                                        </li>
                                        <li>
                                            <span>Lorem Ipsum</span>
                                            <p>This is dummy text for websites or apps.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </Fragment >
    )
}