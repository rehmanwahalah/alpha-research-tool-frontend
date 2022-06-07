import next from "next";
import Link from "next/link";
import { Fragment } from "react";
import Filter from "../../component/filter/Filter";
import Header from "../../component/header/Header";


const  Project = () => {
    return(
        <Fragment>
            <Header />
            <div className="rt-projects">
                <Filter />
                <div className="rt-projecttableholder">
                    <table className="rt-themetable">
                        <thead>
                            <tr>
                                <th>Project</th>
                                <th>Socials</th>
                                <th>Type </th>
                                <th>I.A. Count</th>
                                <th>Following</th>
                                <th>Followers</th>
                                <th>Tweets</th>
                                <th>24h Followers Change  </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="rt-userimage">
                                        <img src="../../images/1.png" />
                                        <span>Astersnft</span>
                                    </div>
                                </td>
                                <td>
                                    <ul className="rt-socialicon">
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/twitter.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/instagram.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/medium.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <a>
                                                    <img src="../../images/discord.svg" alt="social icon"/>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                                <td>PFP</td>
                                <td>42</td>
                                <td>4</td>
                                <td>2882</td>
                                <td>4</td>
                                <td className="rt-followerchange">
                                    <span>+652</span>
                                    <span>21.47%</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="rt-pagination">
                        <ul>
                            <li>
                                <Link href="">
                                    <a>
                                        <img src="../../images/arrowperivous.svg"/>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a className="rt-active">
                                        1
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        2
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        3
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        4
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        ...
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>
                                        <img src="../../images/arrownext.svg"/>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Project;