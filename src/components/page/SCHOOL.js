import React, { useState, useContext } from "react";
import Option from "./school/Option.js";
import Axios from "axios";
import domain from "../../util/domain";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function SCHOOL() {
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
            מופעי הדרכה חניכים
          </button>
          <button
            className={
              navbar === "mm" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("mm")}
          >
            מראה מקום
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
