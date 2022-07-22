import Link from "next/link";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MyVerticallyCenteredModal } from "../../module/project/Project";
import { logout } from "../../store/auth/async.func";
import { selectUser } from "../../store/auth/selector";
import Accordion from 'react-bootstrap/Accordion';
import { EProject } from "../../enums/project.enums";
import { projectActions } from "../../store/project/project";
// import {
//   selectApplyFilter,
//   selectMaxFollowers,
//   selectMinFollowers,
// } from "../../store/project/selector";


export default function Sidebar() {
  const user = useSelector(selectUser);
  // const dispatch: any = useDispatch()

  const handleLogout = async () => {
    dispatch(logout())
  };
  function isLetter(str: any) {
    return (
      (str.length === 1 && str.match(/[a-z0-9]/i)) ||
      str.match(/\s/i) ||
      str.match(/\b/i)
    );
  }
  // const handleChange = (event: any) => {
  //   if (event.target.value.length > 1) {
  //     if (isLetter(event.target.value)) setSearchValue(event.target.value);
  //   } else {
  //     setSearchValue("");
  //   }
  // };
  // const dispatch = useDispatch();
  // const sMinFollowers = useSelector(selectMinFollowers)
  // const sMaxFollowers = useSelector(selectMaxFollowers)

  // const [minFollowers, setMinFollowers] = useState(sMinFollowers);
  // const [maxFollowers, setMaxFollowers] = useState(sMaxFollowers);

  // const filter = useSelector(selectApplyFilter);


  // const handleClearFilter = () => {
  //   dispatch(projectActions.clearFilter());
  //   onHide()
  // };

  return (
    <aside className="rt-sidebarwrapper">
      <div className="rt-sidebar">
        <div className="rt-sidebarsearchfilter">
          <div className="rt-searchform">
            <form className="rt-formtheme">
              <fieldset>
                <div className="form-group">
                  <input
                    type="text"
                    // onChange={handleChange}
                    name="search"
                    placeholder="search"
                  />
                  <Link href="">
                    <a>
                      <img src="../../images/search.svg" />
                    </a>
                  </Link>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    // onChange={handleChange}
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
          <div className="rt-sidebarfilterarea">
            <div className="rt-filterholder">
              <form className="rt-formtheme">
                <fieldset>
                  <legend className="mb-3">Filter</legend>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>EB Count</Accordion.Header>
                      <Accordion.Body>
                        <div className="form-group">
                          <label>EB Count</label>
                          <div className="rt-filterinput">
                            <div className="rt-inputwidthfifty">
                              <input type="text" placeholder="min" />
                            </div>
                            <div className="rt-inputwidthfifty">
                              <input type="text" placeholder="max" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Followers</label>
                          <div className="rt-filterinput">
                            <div className="rt-inputwidthfifty">
                              <input
                                // value={minFollowers}
                                // onChange={(e: any) => {
                                //   setMinFollowers(e.target.value);
                                //   dispatch(
                                //     projectActions.updateFilter({
                                //       key: EProject.MINFOLLOWERS,
                                //       value: e.target.value,
                                //     })
                                //   );
                                // }}
                                type="text"
                                placeholder="min"
                              />
                            </div>
                            <div className="rt-inputwidthfifty">
                              <input
                                // value={maxFollowers}
                                // onChange={(e: any) => {
                                //   setMaxFollowers(e.target.value);
                                //   dispatch(
                                //     projectActions.updateFilter({
                                //       key: EProject.MAXFOLLOWERS,
                                //       value: e.target.value,
                                //     })
                                //   );
                                // }}
                                type="text"
                                placeholder="max"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Tweets</label>
                          <div className="rt-filterinput">
                            <div className="rt-inputwidthfifty">
                              <input type="text" placeholder="min" />
                            </div>
                            <div className="rt-inputwidthfifty">
                              <input type="text" placeholder="max" />
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item</Accordion.Header>
                      <Accordion.Body>
                        <div className="form-group">
                          <label>EB Count</label>
                          <div className="rt-filterinput">
                            <div className="rt-inputwidthfifty">
                              <input type="text" placeholder="min" />
                            </div>
                            <div className="rt-inputwidthfifty">
                              <input type="text" placeholder="max" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Followers</label>
                          <div className="rt-filterinput">
                            <div className="rt-inputwidthfifty">
                              <input
                                // value={minFollowers}
                                // onChange={(e: any) => {
                                //   setMinFollowers(e.target.value);
                                //   dispatch(
                                //     projectActions.updateFilter({
                                //       key: EProject.MINFOLLOWERS,
                                //       value: e.target.value,
                                //     })
                                //   );
                                // }}
                                type="text"
                                placeholder="min"
                              />
                            </div>
                            <div className="rt-inputwidthfifty">
                              <input
                                // value={maxFollowers}
                                // onChange={(e: any) => {
                                //   setMaxFollowers(e.target.value);
                                //   dispatch(
                                //     projectActions.updateFilter({
                                //       key: EProject.MAXFOLLOWERS,
                                //       value: e.target.value,
                                //     })
                                //   );
                                // }}
                                type="text"
                                placeholder="max"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Tweets</label>
                          <div className="rt-filterinput">
                            <div className="rt-inputwidthfifty">
                              <input type="text" placeholder="min" />
                            </div>
                            <div className="rt-inputwidthfifty">
                              <input type="text" placeholder="max" />
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  {/* <div className="rt-btnholder"> */}
                    <button type="button" className="rt-btn rt-btn-lg mb-2 rt-btnclear">
                      Clear All
                    </button>
                    <button type="button" className="rt-btn rt-btn-lg">
                      Apply Filters
                    </button>
                  {/* </div> */}
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <button onClick={handleLogout} className="rt-btnlogout rt-btn">
          <i className="icon-logout"></i>
        </button>
      </div>
    </aside>
  );
}

function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

function setMinFollowers(value: any) {
  throw new Error("Function not implemented.");
}

function setMaxFollowers(value: any) {
  throw new Error("Function not implemented.");
}
// function isLetter(value: any) {
//   throw new Error("Function not implemented.");
// }

// function setSearchValue(value: any) {
//   throw new Error("Function not implemented.");
// }

// function setModalShow(arg0: boolean) {
//   throw new Error("Function not implemented.");
// }

// function selectMinFollowers(selectMinFollowers: any) {
//   throw new Error("Function not implemented.");
// }

// function selectMaxFollowers(selectMaxFollowers: any) {
//   throw new Error("Function not implemented.");
// }

// function useState(sMinFollowers: unknown): [any, any] {
//   throw new Error("Function not implemented.");
// }

// function selectApplyFilter(selectApplyFilter: any) {
//   throw new Error("Function not implemented.");
// }

// function onHide() {
//   throw new Error("Function not implemented.");
// }

// function dispatch(arg0: any) {
//   throw new Error("Function not implemented.");
// }

