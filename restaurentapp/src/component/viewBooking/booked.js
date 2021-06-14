import React from "react";
import { Link } from "react-router-dom";

const Booked = () => {
  return (
    <>
      <div className="container-fluid messageContainer">
        <div className="message">
          <h1>Congratulations! Your Order is booked now.</h1>
          <div className="homeBtn">
            <Link to={"/"}>
              <button className="btn btn-warning">Go to HomePage</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Booked;
