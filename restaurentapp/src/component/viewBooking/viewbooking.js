import React from "react";
import { Component } from "react";
import "./viewbooking.css";
import axios from "axios";

const url = "https://restaurentapilive.herokuapp.com/order";

class viewbooking extends Component {
  constructor() {
    super();

    this.state = {
      bookings: "",
    };
  }
  renderTable = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <>
            <tr>
              <td>{item._id}</td>
              <td>{item.restaurentName}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.cost}</td>
            </tr>
          </>
        );
      });
    }
  };
  render() {
    return (
      <>
        <div className="container-fluid viewBookingSection">
          <div className="tableSection">
            <div className="tableContainer">
              {/* <h4 className="tableInfo">check the data desktop version</h4> */}
              <table className="table table-striped table-responsive">
                <thead>
                  <tr>
                    <th>Order Id</th>
                    <th>Restaurent Name</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable(this.state.bookings)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
  componentDidMount() {
    axios.get(url).then((response) => {
      this.setState({ bookings: response.data });
    });
  }
}
export default viewbooking;
