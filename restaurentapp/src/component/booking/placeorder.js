import React from "react";
import { Component } from "react";
import "./placeorder.css";
import { Link } from "react-router-dom";

const url = "https://restaurentapilive.herokuapp.com/placeorder";

class orderplace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurentName: this.props.match.params.name,
      name: "",
      email: "",
      phone: "",
      cost: sessionStorage.getItem("cost"),
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(this.props.history.push("/viewbooking"));
  };

  render() {
    return (
      <>
        <div className="container-fluid placeOrderSection">
          <div className="placeOrderContainer">
            <div className="card">
              <div className="card-header">
                <h2>Place your order here</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Restaurent Name</label>
                    <input
                      className="form-control"
                      value={this.state.restaurentName}
                      readOnly
                    />
                  </div>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Cost</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cost"
                      value={this.state.cost}
                      onChange={this.handleChange}
                    />
                  </div>
                  <Link to={"/booked"}>
                    <button
                      className="btn btn-success SubmitBtn"
                      onClick={this.handleSubmit}
                    >
                      Submit order
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default orderplace;
