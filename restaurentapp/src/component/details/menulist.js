import React from "react";
import "./details.css";

const menulist = (props) => {
  const rendermenu = ({ menudata }) => {
    if ({ menudata }) {
      return menudata.map((item) => {
        return (
          <>
            <div className="container  newMenuContainer">
              <div className="menuDetails">
                <center>
                  <h4>{item.type[0].name}</h4>
                </center>
                <div className="newMenuList">
                  <p>{item.type[0].menu[0].name}</p>
                  <p>{item.type[0].menu[0].price}</p>
                </div>
                <div className="newMenuList">
                  <p>{item.type[0].menu[1].name}</p>
                  <p>{item.type[0].menu[1].price}</p>
                </div>
                <div className="newMenuList">
                  <p>{item.type[0].menu[2].name}</p>
                  <p>{item.type[0].menu[2].price}</p>
                </div>
              </div>
              <div className="menuDetails">
                <center>
                  <h4>{item.type[1].name}</h4>
                </center>
                <div className="newMenuList">
                  <p>{item.type[1].menu[0].name}</p>
                  <p>{item.type[1].menu[0].price}</p>
                </div>
                <div className="newMenuList">
                  <p>{item.type[1].menu[1].name}</p>
                  <p>{item.type[1].menu[1].price}</p>
                </div>
                <div className="newMenuList">
                  <p>{item.type[1].menu[2].name}</p>
                  <p>{item.type[1].menu[2].price}</p>
                </div>
              </div>
              <div className="menuDetails">
                <center>
                  <h4>{item.type[2].name}</h4>
                </center>
                <div className="newMenuList">
                  <p>{item.type[2].menu[0].name}</p>
                  <p>{item.type[2].menu[0].price}</p>
                </div>
                <div className="newMenuList">
                  <p>{item.type[2].menu[1].name}</p>
                  <p>{item.type[2].menu[1].price}</p>
                </div>
                <div className="newMenuList">
                  <p>{item.type[2].menu[2].name}</p>
                  <p>{item.type[2].menu[2].price}</p>
                </div>
              </div>
            </div>
          </>
        );
      });
    }
  };
  return <>{rendermenu(props)}</>;
};
export default menulist;
