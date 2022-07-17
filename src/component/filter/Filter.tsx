import next from "next";

export default function Filter(){
    return(
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
                                <input type="text" placeholder="min" />
                            </div>
                            <div className="rt-inputwidthfifty">
                                <input type="text" placeholder="max" />
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
                        <button className="rt-btn rt-btnclear">Clear All</button>
                        <button className="rt-btn">Apply Filters</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}