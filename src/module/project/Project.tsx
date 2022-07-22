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
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Circles } from "react-loader-spinner";
import { projectService } from "../../services/project.service";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { projectActions } from "../../store/project/project";
import Router from "next/router";
import { useSelector } from "react-redux";
import { selectApplyFilter, selectMaxEbCOunt, selectMaxFollowers, selectMinEbCOunt, selectMinFollowers } from "../../store/project/selector";

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
      <Filter onHide={props.onHide} />
    </Modal>
  );
}

const Project = () => {
  const dispatch = useDispatch();
  const applyFilter = useSelector(selectApplyFilter)
  const minEbcount = useSelector(selectMinEbCOunt)
  const maxEbcount = useSelector(selectMaxEbCOunt)
  const minFollowers = useSelector(selectMinFollowers)
  const maxFollowers = useSelector(selectMaxFollowers)

  const [modalShow, setModalShow] = React.useState(false);
  const [projects, setProjects] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>();
  const [searchValue, setSearchValue] = useState(""); 

  const [state, setState] = useState<any>({
    current_page: 1,
    pages: 1,
    per_page: 10,
    total_projects: 0,
  });

  const handleProjectSelect = (project: any) => {
    dispatch(projectActions.currentProjectDetails(project))
    Router.push("/review")
  }

  const getProjects = async (page = 1) => {
    try {
      setLoading(true);
      let res = await projectService.getAllProjects({
        page: page,
        resPerPage: state.per_page,
        search: searchValue,
        minFollowers: minFollowers,
        maxFollowers: maxFollowers
      });
      setProjects(res?.data?.data?.projects);
      setState({
        current_page: res?.data?.data?.current_page,
        pages: res?.data?.data?.pages,
        per_page: res?.data?.data?.per_page,
        total_projects: res?.data?.data?.total_projects,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // function isLetter(str: any) {
  //   return (
  //     (str.length === 1 && str.match(/[a-z0-9]/i)) ||
  //     str.match(/\s/i) ||
  //     str.match(/\b/i)
  //   );
  // }

  // const handleChange = (event: any) => {
  //   if (event.target.value.length > 1) {
  //     if (isLetter(event.target.value)) setSearchValue(event.target.value);
  //   } else {
  //     setSearchValue("");
  //   }
  // };

  const handlePagination = (data: any) => {
    getProjects(data.selected + 1);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => getProjects(), 500);
    return () => clearTimeout(timeoutId);
  }, [searchValue]);

  useEffect(() => {
    getProjects();
  }, [applyFilter]);

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
            <h3>Total Projects = {state.total_projects}</h3>
          </div>
          <div className="rt-pagetop">
            {/* <div className="rt-searchform">
              <form className="rt-formtheme">
                <fieldset>
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={handleChange}
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
            </div> */}
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
                  <th>Username</th>
                  <th>Eb count 
                    <span className="rt-arrowsort">
                      <button>
                        <i className="icon-arrow-up"></i>
                      </button>
                      <button>
                        <i className="icon-arrow-down"></i>
                      </button>
                    </span> 
                  </th>
                  <th>Notable Followers Count</th>
                  <th>Notable Followers</th>
                  <th>Followers</th>
                  <th>24h Followers Change </th>
                  <th>7d Followers Change </th>
                  <th>Tweets</th>
                </tr>
              </thead>
              <tbody>
                {projects &&
                  projects.length > 0 &&
                  projects.map((project: any) => (
                    <>
                      <tr>
                        <td>
                          <div onClick={()=>{handleProjectSelect(project)}} className="rt-userimage">
                            <img src="../../images/1.png" />
                            {/* <img src={project ? project.image : "../../images/1.png"} /> */}
                            <span title="enter project name">
                              {project.name ? project.name : project.title}
                            </span>
                          </div>
                        </td>
                        {/* <td><span>{project.bio}</span></td> */}
                        <td>
                          <span title="SajidAliAs">
                            <img src="../../images/twitter.svg" alt="" className="rounded-0"/>
                          </span>
                        </td>
                        <td>{project.ebCount}</td>
                        <td>{project.notableFollowersCount}</td>
                        <td>{project.notableFollowers}</td>
                        <td>{project.followers}</td>
                        {/* <td>{project.changes?._24h.count}</td> */}
                        <td className="rt-followerchange">
                          <span>{project.changes?._24h.count}</span>
                          <span>{project.changes?._24h.percent}%</span>
                        </td>
                        <td className="rt-followerchange">
                          <span>{project.changes?._7d.count}</span>
                          <span>{project.changes?._7d.percent}%</span>
                        </td>
                        <td>{project.tweets}</td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
            {/* <figure className="rt-nodataimg">
                            <img src="../../images/nodata.webp" alt="no data" />
                        </figure> */}
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

export default Project;
