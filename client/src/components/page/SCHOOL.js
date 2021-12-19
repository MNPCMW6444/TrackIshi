import React, { useState, useContext } from "react";
import Option from "./school/Option.js";
import Axios from "axios";
import domain from "../../util/domain";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

export default function SCHOOL() {
  const [navbar, setNavbar] = useState("gaf");
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
      <div className="Schoolpage">
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
              navbar === "gaf" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("gaf")}
          >
            תמונת מצב צוערים
          </button>
          <button
            className={
              navbar === "opinions" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("opinions")}
          >
            הזנת סימולציות
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
