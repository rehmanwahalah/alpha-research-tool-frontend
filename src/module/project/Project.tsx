import next from "next";
import Link from "next/link";
import { Fragment } from "react";
import Filter from "../../component/filter/Filter";
import Header from "../../component/header/Header";
import Sidebar from "../../component/sidebar/Sidebar";
import Button from 'react-bootstrap/Button';
import Modal, { ModalProps } from 'react-bootstrap/Modal';
import React from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from 'react-loader-spinner';


export function MyVerticallyCenteredModal(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
            <Filter />
        </Modal>
    );
}

const Project = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <Fragment>
            {/* <div className="rt-loader">
                <Circles
                    height="100"
                    width="100"
                    color='#0D96FD'
                    ariaLabel='loading'
                />
            </div> */}
            <Header />
            <div className="rt-projects">

                <Sidebar />
                <div className="rt-projecttableholder">
                    <div className="rt-pagetitle">
                        <h2>Project</h2>
                        <h3>Total Projects = 566</h3>
                    </div>
                    <div className="rt-pagetop">
                        <div className="rt-searchform">
                            <form className="rt-formtheme">
                                <fieldset>
                                    <div className="form-group">
                                        <input type="text" name="search" placeholder="search" />
                                        <Link href="">
                                            <a>
                                                <img src="../../images/search.svg" />
                                            </a>
                                        </Link>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="rt-pagefilterholder">
                            <Button variant=" " onClick={() => setModalShow(true)}>
                                <i className="icon-equalizer"></i>
                                <span>Filter</span>
                            </Button>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
                    <div className="rt-projecttable">
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                                                        <img src="../../images/twitter.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/instagram.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/medium.svg" alt="social icon" />
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="">
                                                    <a>
                                                        <img src="../../images/discord.svg" alt="social icon" />
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
                        {/* <figure className="rt-nodataimg">
                            <img src="../../images/nodata.webp" alt="no data" />
                        </figure> */}
                    </div>
                    <div className="rt-pagination">
                        <ul>
                            <li>
                                <Link href="">
                                    <a>
                                        <img src="../../images/arrowperivous.svg" />
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
                                        <img src="../../images/arrownext.svg" />
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