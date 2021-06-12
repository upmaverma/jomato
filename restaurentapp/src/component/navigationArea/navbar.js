import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

class navbar extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      imageurl: "",
    };
  }
  conditionalHeader = () => {
    if (
      sessionStorage.getItem("username") === null ||
      sessionStorage.getItem("username") === undefined
    ) {
      return (
        <>
          <Nav.Link href="https://github.com/login/oauth/authorize?client_id=8c39feb987bb5f41b63f">
            {" "}
            Login with github
          </Nav.Link>
        </>
      );
    } else {
      return (
        <>
          <span className="userDetail">
            <img
              src={this.state.imageurl}
              style={{ width: 40, height: 40 }}
              alt=""
            />
            {sessionStorage.getItem("username")}
          </span>
        </>
      );
    }
  };

  render() {
    return (
      <>
        <div className="navSection">
          <Navbar collapseOnSelect expand="lg" className="Navigation">
            <Navbar.Brand href="/">
              <h1 className="logo">Jomato</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto navbar link">
                {this.conditionalHeader()}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </>
    );
  }
  componentDidMount() {
    const code = this.props.location.search.split("=")[1];
    if (code) {
      let requestedData = {
        code: code,
      };
      fetch("https://logingithub.herokuapp.com/oauth", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestedData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          var user = data.login;
          var img = data.avatar_url;
          sessionStorage.setItem("username", user);
          sessionStorage.setItem("imageurl", img);
          this.setState({
            username: user,
            imageurl: img,
          });
        });
    }
  }
}

export default withRouter(navbar);
