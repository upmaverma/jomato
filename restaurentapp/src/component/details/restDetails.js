import axios from "axios";
import React from "react";
import { Component } from "react";
import { TabList, TabPanel, Tabs, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "./menulist";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const url = "https://restaurentapilive.herokuapp.com/rest";

var settings = {
  dots: true,
};

class details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurentDetails: "",
    };
  }

  renderMenu = (data) => {
    console.log(data);
    if (data) {
      return data.map((item) => {
        return (
          <>
            <div className="container-fluid detailSection">
              <div className="detailContainer container">
                <div className="detailContent">
                  <div className="card">
                    <div className="card-header">
                      <h2>{item.name}</h2>
                    </div>
                    <div className="gallerySection">
                      <Slider {...settings}>
                        <div className="galleryContainer">
                          <img
                            src={item.thumbnail}
                            alt="Restaurent"
                            className="img-responsive gallery"
                          />
                        </div>
                        <div className="galleryContainer">
                          <img
                            src={item.thumbnail2}
                            alt="Restaurent"
                            className="img-responsive gallery"
                          />
                        </div>
                      </Slider>
                    </div>

                    <div className="card-body">
                      <p className="card-text">Locality :- {item.locality}</p>
                      <p className="card-text">Address :- {item.address}</p>

                      <a
                        className="btn btn-success oderBtn"
                        href={`/booking/${item.name}`}
                      >
                        Proceed now
                      </a>
                      <div className="tabArea">
                        <Tabs>
                          <TabList>
                            <Tab>Overview</Tab>
                            <Tab>Contact</Tab>
                            <Tab>Menu</Tab>
                          </TabList>
                          <TabPanel>
                            <p className="overviewHeading">
                              about our restaurent
                            </p>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              'Content here, content here', making it look like
                              readable English. Many desktop publishing packages
                              and web page editors now use Lorem Ipsum as their
                              default model text, and a search for 'lorem ipsum'
                              will uncover many web sites still in their
                              infancy. Various versions have evolved over the
                              years, sometimes by accident, sometimes on purpose{" "}
                            </p>
                          </TabPanel>
                          <TabPanel>
                            <p className="contactHeading">Contact us :</p>
                            <p>
                              <FontAwesomeIcon
                                icon={["fas", "mobile-alt"]}
                                className="socialIcon"
                              />{" "}
                              : +91 {item.contact}
                            </p>
                            <p>
                              <FontAwesomeIcon
                                icon={["fab", "whatsapp"]}
                                className="socialIcon"
                              />{" "}
                              : +91 {item.contact}
                            </p>
                            <p>
                              <FontAwesomeIcon
                                icon={["far", "envelope-open"]}
                                className="socialIcon"
                              />{" "}
                              : abc@gmail.com
                            </p>
                          </TabPanel>
                          <TabPanel>
                            <div className="container menuContainer">
                              <div className="row">
                                <div className="col">
                                  <div className="menuList">
                                    <div className="col-sm-12">
                                      <Menu
                                        menudata={this.state.restaurentDetails}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel>
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });
    }
  };

  render() {
    return <>{this.renderMenu(this.state.restaurentDetails)}</>;
  }
  componentDidMount() {
    var restid = this.props.match.params.id;
    axios(`${url}/${restid}`).then((response) => {
      this.setState({ restaurentDetails: response.data });
      sessionStorage.setItem("cost", response.data[0].cost);
    });
  }
}

export default details;
