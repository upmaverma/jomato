import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./quicksearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const url = "https://restaurentapilive.herokuapp.com/mealtime";

class quicksearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mealtime: "",
    };
  }
  renderMenuTime = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <Link to={`listing/${item._id}`}>
              <div className="mealCard">
                <div className="card" key={item._id}>
                  <img
                    src={item.pic}
                    className="card-img-top img-responsive menuTimePic"
                    alt="food"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    <p className="card-text">
                      enjoy the delicious {item.name} with our special offers
                    </p>
                    <button className="btn btn-warning">{item.name}</button>
                  </div>
                </div>
              </div>
            </Link>
          </>
        );
      });
    }
  };
  render() {
    return (
      <>
        <div className="conatiner-fluid quicksearchContent">
          <h2 className="quickSectionHeading">
            Quick Search{" "}
            <FontAwesomeIcon
              icon={["fas", "search"]}
              className="quickSearchIcon"
            />
          </h2>
          <p className="quickSectionPara">
            Choose the best meals according to your own best mealtime
            <span>
              {" "}
              <FontAwesomeIcon icon={["far", "clock"]} className="socialIcon" />
            </span>
          </p>
          <div className="container mealtimeContainer">
            <div className="mealCardContainer">
              {this.renderMenuTime(this.state.mealtime)}
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    axios.get(url).then((response) => {
      this.setState({ mealtime: response.data });
    });
  }
}
export default quicksearch;
