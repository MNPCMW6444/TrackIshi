import React, { useState, useContext } from "react";
import Option from "./authco/Option.js";
import Axios from "axios";
import domain from "../../util/domain";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

export default function AUTHCO() {
  const [navbar, setNavbar] = useState("gaf");
  const { getUser } = useContext(UserContext);
  const history = useHistory();

  async function logOut() {
    await Axios.get(`${domain}/user/logOut`);
    getUser();
    history.push("/login");
  }

  return (
    <>
      <br />
      <br />
      <div className="authcopage">
        <div className="navButtons">
          <button
            className={
              navbar === "nachsal" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("nachsal")}
          >
            ספר טלפונים
          </button>
          <button
            className={
              navbar === "fud" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("fud")}
          >
            עדכון פרטים אישיים
          </button>
          <button
            className={
              navbar === "unit" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("unit")}
          >
            תמונת מצב יחידתית
          </button>
          <button
            className={
              navbar === "opinions" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("opinions")}
          >
            הזנת חוו"דים
          </button>
          <button
            className={
              navbar === "opinionsa" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("opinionsa")}
          >
            אישור חוו"דים
          </button>

          <button className="navlogout" onClick={logOut}>
            התנתק
          </button>
        </div>
        <Option selected={navbar} />
      </div>
    </>
  );
}
