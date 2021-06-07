import React from "react";
import { Component } from "react";
import "./listingArea.css";
import ListingRestaurent from "./listingRestaurent";
import CostFilter from "../filter/costFilter";
import SortFilter from "../filter/sortFilter";
import MealFilter from "../filter/mealtype";

const url = "https://restaurentapilive.herokuapp.com/restaurentinfo?mealtime=";

var limit = 5;

class listingArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurent: "",
      activePage: 1,
      totalNoOfItems: 1,
    };
  }
  setDataFilter = (sortdata) => {
    this.setState({ restaurent: sortdata });
  };
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="listingSection">
            <div className="row">
              <div className="col-md-3">
                <div className="filterSection">
                  <CostFilter
                    restPerCost={(data) => {
                      this.setDataFilter(data);
                    }}
                  />
                  <SortFilter
                    restPerSort={(data) => {
                      this.setDataFilter(data);
                    }}
                  />
                  <MealFilter
                    restPerMeal={(data) => {
                      this.setDataFilter(data);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-9">
                <div className="restListSection">
                  <ListingRestaurent
                    restaurentList={this.state.restaurent}
                    activePage={this.state.activePage}
                    limit={limit}
                    totalNoOfItems={this.state.totalNoOfItems}
                    pageNumber={(data) => {
                      this.setState({ activePage: data });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    var restid = this.props.match.params.id;
    fetch(`${url}${restid}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          restaurent: data.slice(0, data.length - 1),
          totalNoOfItems: data.length - 1,
        });
      });
  }
}
export default listingArea;
