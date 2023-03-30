import React, { useState, useContext } from "react";
import Option from "./pakmats/Option.js";
import Axios from "axios";
import domain from "../../util/domain";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function PAKMATS() {
  const [navbar, setNavbar] = useState("home");
  const { user, getUser } = useContext(UserContext);
  const history = useNavigate();

  async function logOut() {
    await Axios.get(`${domain}/user/logOut`);
    history("/login");
  }

  return (
    <>
      <br />
      <br />
      <div className="SCREWpage">
        <div className="navButtons">
          <button
            className={
              navbar === "home" ? "naveachbuttonselected" : "naveachbutton"
            }
            onClick={() => setNavbar("home")}
          >
            ספר טלפונים
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
