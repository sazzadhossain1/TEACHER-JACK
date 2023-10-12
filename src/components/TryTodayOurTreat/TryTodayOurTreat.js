import React from "react";
import "./TryTodayOurTreat.css";

const TryTodayOurTreat = () => {
  return (
    <div className="tryTodayTreat-parent-div">
      <div>
        <h1 className="tryToday">Try Today. Our Treat.</h1>
        <p className="tryTodayTreat-p">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          numquam quas quos, harum consectetur minima ad, eveniet dicta, quia
          earum mollitia!
        </p>
        <form className="tryTodayTreat-from" action="">
          <div>
            <div className="lable-flex-div">
              <label htmlFor=""></label>
              <input
                className="tryTodayTreat-input"
                type="text"
                placeholder="Enter mobile number"
              />
              <button className="getStarted">Get Started</button>
            </div>
          </div>
        </form>
        <p className="tryTodayTreat-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolor
          quibusdam labore accusamus.
        </p>
      </div>
    </div>
  );
};

export default TryTodayOurTreat;
