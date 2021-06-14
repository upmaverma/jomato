import React from "react";
import { Link } from "react-router-dom";
import "./listingArea.css";
import Pagination from "react-js-pagination";

const renderRestaurentList = (props, data) => {
  if (data) {
    if (data.length > 0) {
      var limit = props.limit;
      var page = props.activePage;
      data = data.slice((page - 1) * limit, (page - 1) * limit + limit);
      return data.map((item) => {
        return (
          <>
            <div className="row">
              <div className="restListDisplay">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="imageDisplay">
                      <img
                        src={item.thumbnail}
                        alt="restaurent"
                        className="img-responsive restaurentImage"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="restListDetail">
                      <Link to={`/details/${item._id}`}>
                        <h2>{item.name}</h2>
                      </Link>
                      <p>{item.locality}</p>
                      <p>{item.address}</p>
                      <hr />
                      <p>
                        Meal Type :-
                        {item.time[0].name} {item.time[1].name}
                        {"   "}
                        {item.time[2].name}
                      </p>
                      <p>Average Cost for per person:- Rs. {item.cost}</p>
                      <p className="cuisineType">
                        Cuisine Type :- {item.type[0].name} {item.type[1].name}{" "}
                        {item.type[2].name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });
    } else {
      return (
        <>
          <center>
            <h1>No Data Found</h1>
          </center>
        </>
      );
    }
  } else {
    return (
      <>
        <div className="loader">
          <img
            src="https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif"
            alt="Loading"
            className="img-responsive loaderImage"
          />
        </div>
      </>
    );
  }
};

const handlePageChange = (props, pageNumber) => {
  props.pageNumber(pageNumber);
  var data = props.restaurent;
  renderRestaurentList(props, data);
};

const ListingDisplay = (props) => {
  return (
    <>
      {renderRestaurentList(props, props.restaurentList)}
      <div>
        <center>
          <Pagination
            activePage={props.activePage}
            itemsCountPerPage={props.limit}
            totalItemsCount={props.totalNoOfItems}
            pageRangeDisplayed={4}
            onChange={(pageNumber) => {
              handlePageChange(props, pageNumber);
            }}
          />
        </center>
      </div>
    </>
  );
};
export default ListingDisplay;
