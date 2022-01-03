import React, { useState, useContext } from "react";
import Option from "./screw/Option.js";
import Axios from "axios";
import domain from "../../util/domain";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

export default function SCREW() {
  const [navbar, setNavbar] = useState("home");
  const { user, getUser } = useContext(UserContext);
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
      <div className="SCREWpage">
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
              navbar === "home" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("home")}
          >
            תמונת מצב אישית
          </button>
          <button
            className={
              navbar === "allopinions"
                ? "naveachbuttonselected"
                : "naveachbutton"
            }
            onClick={() => setNavbar("allopinions")}
          >
            החוו"דים שלי
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
