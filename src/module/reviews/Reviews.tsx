import next from "next";
import { Fragment } from "react";
import Header from "../../component/header/Header";
import Filter from "../../component/filter/Filter";
import Sidebar from "../../component/sidebar/Sidebar";



export default function Reviews(){
    return(
        <Fragment>
            <Header />
            <Sidebar /> 
            <div className="rt-reviews rt-projects">
                {/* <Filter /> */}
                <div className="rt-review">
                    {/* <div className="rt-eyeicon">
                        <span>
                            <img src="../../images/eye.svg"/>
                        </span>
                    </div> */}
                    <figure className="rt-reviewimg">
                        <img src="../../images/01.png"/>
                    </figure>
                    <div className="rt-reviewhead">
                        <div className="rt-reviewheading">
                            <h2>Astersnft</h2>
                            <div className="rt-socialreview">
                                <ul>
                                    <li>
                                        <span>Twitter created:</span>
                                        <span>April 2022</span>
                                    </li>
                                    <li>
                                        <span>First Tweet:</span>
                                        <span>09 Apr 2022</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <span>
                                        <img src="../../images/twitter.svg" alt="social icon"/>
                                        </span>
                                        <span>842</span>
                                    </li>
                                    <li>
                                        <span>
                                        <img src="../../images/instagram.svg" alt="social icon"/>
                                        </span>
                                        <span>842</span>
                                    </li>
                                    <li>
                                        <span>
                                        <img src="../../images/medium.svg" alt="social icon"/>
                                        </span>
                                        <span>842</span>
                                    </li>
                                    <li>
                                        <span>
                                        <img src="../../images/discord.svg" alt="social icon"/>
                                        </span>
                                        <span>842</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="rt-reviewbody">
                            <ul className="rt-reviewfilterdetail">
                                <li>
                                    <span>IA CT: </span>
                                    <span>37</span>
                                </li>
                                <li>
                                    <span>Type:  </span>
                                    <span>P2E Game</span>
                                </li>
                                <li>
                                    <span>IA SCORE:  </span>
                                    <span>7/10</span>
                                </li>
                                <li>
                                    <span>Supply: </span>
                                    <span>TBA</span>
                                </li>
                            </ul>
                            <ul className="rt-reviewfilterdetail">
                                <li>
                                    <span>Team: </span>
                                    <span>Doxxed. Proven Track Record</span>
                                </li>
                                <li>
                                    <span>Roadmap/Utility: </span>
                                    <span>TBA</span>
                                </li>
                                <li>
                                    <span>Some Alpha:  </span>
                                    <span> The Co-Founders have worked on
                                        previously successful projects for mobile games. Staking
                                        and interesting tokenomics are mentioned in their
                                        Lite Paper
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}