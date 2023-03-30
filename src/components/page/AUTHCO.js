import React, { useState, useContext } from "react";
import Option from "./authco/Option.js";
import Axios from "axios";
import domain from "../../util/domain";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function AUTHCO() {
  const [navbar, setNavbar] = useState("gaf");
  const { getUser } = useContext(UserContext);
  const history = useNavigate();

  async function logOut() {
    await Axios.get(`${domain}/user/logOut`);
    getUser();
    history("/login");
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
            פרטים אישיים
          </button>
          <button
            className={
              navbar === "myopinions"
                ? "naveachbuttonselected"
                : "naveachbutton"
            }
            onClick={() => setNavbar("myopinions")}
          >
            חוו"דים מקצועיים
          </button>{" "}
          <button
            className={
              navbar === "opinions" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("opinions")}
          >
            הזנת חוו"ד
          </button>
          <button
            className={
              navbar === "opinionsa" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("opinionsa")}
          >
            אישור חוו"ד
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
