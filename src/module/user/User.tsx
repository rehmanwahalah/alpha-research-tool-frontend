import next from "next";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import Filter from "../../component/filter/Filter";
import Header from "../../component/header/Header";
import Sidebar from "../../component/sidebar/Sidebar";
import Button from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import React from "react";
import { Omit, BsPrefixProps } from "react-bootstrap/esm/helpers";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { adminService } from "../../services/admin.service";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { toast } from "react-toastify";

export function MyVerticallyCenteredModal(
  props: JSX.IntrinsicAttributes &
    Omit<
      Pick<
        React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLDivElement>,
          HTMLDivElement
        >,
        "key" | keyof React.HTMLAttributes<HTMLDivElement>
      > & {
        ref?:
        | ((instance: HTMLDivElement | null) => void)
        | React.RefObject<HTMLDivElement>
        | null
        | undefined;
      },
      BsPrefixProps<"div"> & ModalProps
    > &
    BsPrefixProps<"div"> &
    ModalProps & { children?: React.ReactNode }
) {
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

const User = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<any>>([]);
  const [searchValue, setSearchValue] = useState("");

  const [state, setState] = useState<any>({
    current_page: 1,
    pages: 1,
    per_page: 10,
    total_users: 0,
  });

  const getUsers = async (page = 1) => {
    try {
      setLoading(true);
      let res = await adminService.getUsers({
        page: page,
        resPerPage: state.per_page,
        search: searchValue,
      });
      setUsers(res?.data?.data?.users);
      setState({
        current_page: res?.data?.data?.current_page,
        pages: res?.data?.data?.pages,
        per_page: res?.data?.data?.per_page,
        total_users: res?.data?.data?.total_users,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handlePagination = (data: any) => {
    getUsers(data.selected + 1);
  };

  const blockUnblockUser = async (status: boolean, userId: number) => {
    try {
      const block =
        status === true
          ? await adminService.blockUser(userId)
          : await adminService.unBlockUser(userId);
      if (block.status === 200)
        toast.success(`You have ${status ? "blocked" : "un-blocked"} a user.`);
      const newArr: any = users.map((user: any) => {
        if (user._id === userId) {
          return { ...user, isActive: !status };
        }
        return user;
      });
      setUsers(newArr);
    } catch (error) {
      toast.error("Error!");
      console.log(error);
    }
  };

  function isLetter(str: any) {
    return (
      (str.length === 1 && str.match(/[a-z0-9]/i)) ||
      str.match(/\s/i) ||
      str.match(/\b/i)
    );
  }

  const handleChange = (event: any) => {
    if (event.target.value.length > 1) {
      if (isLetter(event.target.value)) setSearchValue(event.target.value);
    } else {
      setSearchValue("");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => getUsers(), 500);
    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="rt-projects">
        <Sidebar />
        <div className="rt-projecttableholder">
          <div className="rt-pagetitle">
            <h2>Users</h2>
            <h3>Total User = 566</h3>
          </div>
          <div className="rt-pagetop">
            <div className="rt-searchform">
              <form className="rt-formtheme">
                <fieldset>
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="search"
                      placeholder="search"
                    />
                    <Link href="">
                      <a>
                        <img src="../../images/search.svg" />
                      </a>
                    </Link>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="rt-userfilterdropdown">
              <Dropdown>
                <Dropdown.Toggle
                  variant=" rt-btndropdown"
                  id="dropdown-basic"
                >
                  <span>Select</span>
                  <i className="icon-arrowdown"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    All
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    Block
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    Unblock
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="rt-projecttable">
            <table className="rt-themetable">
              <thead>
                <tr>
                  <th>Join Date </th>
                  <th>Name </th>
                  <th>Email</th>
                  <th>Following</th>
                  <th>Followers</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.length > 0 &&
                  users.map((user: any) => (
                    <>
                      <tr>
                        <td>{moment(user.createdAt).format("L")}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.following > 0 ? user.following : 0}</td>
                        <td>{user.followers > 0 ? user.followers : 0}</td>
                        <td className="rt-userstatus"> <span> {user.isActive ? "Active" : "Blocked"}</span></td>
                        <td className="rt-actiondropdown">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant=" rt-btndropdown"
                              id="dropdown-basic"
                            >
                              <img
                                src="../../images/menu.png"
                                alt="menu icon"
                              />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item onClick={() => { blockUnblockUser(user.isActive, user._id) }} href="#/action-1">
                                {user.isActive ? "Block" : "un-block"}
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="rt-pagination">
          <ReactPaginate
            initialPage={0}
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={state.pages}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePagination}
            containerClassName={"pagination"}
            activeClassName={"rt-active"}
            activeLinkClassName={"rt-active"}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default User;
