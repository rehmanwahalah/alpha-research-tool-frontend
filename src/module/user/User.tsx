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
import { Dropdown } from "react-bootstrap";

export function MyVerticallyCenteredModal(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
    return (
        <Modal
            {...props}
            size='md'
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

const User = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Fragment>
            <Header />
            <div className="rt-projects">

                <Sidebar />
                <div className="rt-projecttableholder">
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
                                    <th>Name </th>
                                    <th>Email</th>
                                    <th>Following</th>
                                    <th>Followers</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                                <tr>
                                    <td>john deo</td>
                                    <td>jd@gmail.com</td>
                                    <td>4</td>
                                    <td>2882</td>
                                    <td>Unblocked</td>
                                    <td className="rt-actiondropdown">
                                        <Dropdown>
                                            <Dropdown.Toggle variant=" rt-btndropdown" id="dropdown-basic">
                                                <img src="../../images/menu.png" alt="menu icon" />
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Block</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Unblock</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

export default User;