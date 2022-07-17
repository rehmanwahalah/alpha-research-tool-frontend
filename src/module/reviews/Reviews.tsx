import next from "next";
import { Fragment, useEffect } from "react";
import Header from "../../component/header/Header";
import Filter from "../../component/filter/Filter";
import Sidebar from "../../component/sidebar/Sidebar";
import { selectCurrentProject } from "../../store/project/selector";
import { useSelector } from "react-redux";
import moment from "moment";
import { selectUser } from "../../store/auth/selector";

export default function Reviews() {
  const currentProject = useSelector(selectCurrentProject);
  const user = useSelector(selectUser);

  useEffect(() => {}, [currentProject]);

  console.log(user, "user=-=-=-=-");
  return (
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
            <img
              src={
                currentProject?.image
                  ? currentProject.image
                  : "../../images/01.png"
              }
            />
          </figure>
          <div className="rt-reviewhead">
            <div className="rt-reviewheading">
              <h2>
                {currentProject?.name
                  ? currentProject?.name
                  : currentProject?.title}
              </h2>
              <div className="rt-socialreview">
                <ul>
                  <li>
                    <span>Twitter created:</span>
                    <span>
                      {moment(currentProject?.createdDate).format(
                        "MMM DD, YYYY"
                      )}
                    </span>
                  </li>
                  <li>
                    <span>First Tweet:</span>
                    <span>
                      {moment(currentProject?.foundAt).format("MMM DD, YYYY")}
                    </span>
                  </li>
                </ul>
                <ul>
                  <span>BIO</span>: {currentProject?.bio}
                </ul>
              </div>
            </div>
            <div className="rt-reviewbody">
              <ul className="rt-reviewfilterdetail">
                <li>
                  <span>EB count: </span>
                  <span>{currentProject?.ebCount}</span>
                </li>
                <li>
                  <span>Notable Followers Count: </span>
                  <span>{currentProject?.notableFollowersCount}</span>
                </li>
                <li>
                  <span>Followers: </span>
                  <span>{currentProject?.followers}</span>
                </li>
              </ul>
              <ul className="rt-reviewfilterdetail">
                <li>
                  <span>24h: </span>
                  <span>{currentProject?.changes?._24h.count}</span>
                </li>
                <li>
                  <span>7d: </span>
                  <span>{currentProject?.changes?._7d.count}</span>
                </li>
                <li>
                  <span>Tweets: </span>
                  <span>{currentProject?.tweets}</span>
                </li>
                <li>
                  <span>Notable Followers: </span>
                  <span>{currentProject?.notableFollowers}</span>
                </li>
                {user?.roles.includes("admin") && (
                  <>
                    <li>
                      <span>EB Score: </span>
                      <span>{currentProject?.ebScore}</span>
                    </li>
                    <li>
                      <span>EBs: </span>
                      <span> {currentProject?.ebs}</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
