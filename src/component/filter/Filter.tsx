import next from "next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { EProject } from "../../enums/project.enums";
import { projectActions } from "../../store/project/project";
import {
  selectApplyFilter,
  selectMaxFollowers,
  selectMinFollowers,
} from "../../store/project/selector";

export default function Filter({onHide}: any) {

  const dispatch = useDispatch();
  const sMinFollowers = useSelector(selectMinFollowers)
  const sMaxFollowers = useSelector(selectMaxFollowers)

  const [minFollowers, setMinFollowers] = useState(sMinFollowers);
  const [maxFollowers, setMaxFollowers] = useState(sMaxFollowers);

  const filter = useSelector(selectApplyFilter);

  const handleApplyFilter = () => {
    dispatch(projectActions.applyFilter(!filter));
    onHide()
  };

  const handleClearFilter = () => {
    dispatch(projectActions.clearFilter());
    onHide()
  };

  return (
    <div className="rt-filterholder">
      <form className="rt-formtheme">
        <fieldset>
          <legend>Filter</legend>
          {/* <div className="form-group">
                        <label>Type</label>
                        <div className="rt-filterinput">
                            <input type="text" placeholder="Any" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>First Tweet</label>
                        <div className="rt-filterinput">
                            <input type="text" placeholder="Type" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Twitter Created</label>
                        <div className="rt-filterinput">
                            <input type="text" placeholder="Type..." />
                        </div>
                    </div> */}
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
                  value={minFollowers}
                  onChange={(e: any) => {
                    setMinFollowers(e.target.value);
                    dispatch(
                      projectActions.updateFilter({
                        key: EProject.MINFOLLOWERS,
                        value: e.target.value,
                      })
                    );
                  }}
                  type="text"
                  placeholder="min"
                />
              </div>
              <div className="rt-inputwidthfifty">
                <input
                  value={maxFollowers}
                  onChange={(e: any) => {
                    setMaxFollowers(e.target.value);
                    dispatch(
                        projectActions.updateFilter({
                          key: EProject.MAXFOLLOWERS,
                          value: e.target.value,
                        })
                      );
                  }}
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
          {/* <div className="form-group">
                        <label>Following</label>
                        <div className="rt-filterinput">
                            <div className="rt-inputwidthfifty">
                                <input type="text" placeholder="min" />
                            </div>
                            <div className="rt-inputwidthfifty">
                                <input type="text" placeholder="max" />
                            </div>
                        </div>
                    </div> */}
          <div className="form-group">
            <label>24h Change</label>
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
            <label>7d Change</label>
            <div className="rt-filterinput">
              <div className="rt-inputwidthfifty">
                <input type="text" placeholder="min" />
              </div>
              <div className="rt-inputwidthfifty">
                <input type="text" placeholder="max" />
              </div>
            </div>
          </div>
          <div className="rt-btnholder rt-btnfilter">
            <button type="button" className="rt-btn rt-btnclear" onClick={handleClearFilter}>
              Clear All
            </button>
            <button type="button" className="rt-btn" onClick={handleApplyFilter}>
              Apply Filters
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
