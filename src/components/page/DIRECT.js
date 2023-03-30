import React, { useState, useContext } from "react";
import Option from "./direct/Option.js";
import Axios from "axios";
import domain from "../../util/domain";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Direct() {
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
      <div className="Directpage">
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
              navbar === "mofas" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("mofas")}
          >
            מופעי הדרכה
          </button>
          {/*  <button
            className={
              navbar === "arc" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("arc")}
          >
            ניהול משתמשים
          </button> */}
          <button className="navlogout" onClick={logOut}>
            התנתק
          </button>
        </div>
        <Option selected={navbar} />
      </div>
    </>
  );
}
