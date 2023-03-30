import React, { useState, useContext } from "react";
import Option from "./s420/Option.js";
import Axios from "axios";
import domain from "../../util/domain";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function S420() {
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
      <div className="S420page">
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
            החוו"דים שלי
          </button>
          <button
            className={
              navbar === "mymofas" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("mymofas")}
          >
            מופעי הדרכה אישיים
          </button>
          <button
            className={
              navbar === "mofas" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("mofas")}
          >
            מופעי הדרכה 420
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
