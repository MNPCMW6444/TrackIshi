import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import SCREW from "./page/SCREW";
import DIRECT from "./page/DIRECT";
import AUTHCO from "./page/AUTHCO";
import ADMIN from "./page/ADMIN";
import PAKMATS from "./page/PAKMATS";
import SCHOOL from "./page/SCHOOL";
import S420 from "./page/S420";
import KAHAD from "./page/KAHAD";
import { Link } from "react-router-dom";

export default function Page() {
  const { user } = useContext(UserContext);

  switch (user && user.Role) {
    case "SCREW":
      return (
        <div className="pageSwitcher">
          <SCREW />
        </div>
      );
    case "DIRECT":
      return (
        <div className="pageSwitcher">
          <DIRECT />
        </div>
      );
    case "AUTHCO":
      return (
        <div className="pageSwitcher">
          <AUTHCO />
        </div>
      );
    case "PAKMATS":
      return (
        <div className="pageSwitcher">
          <PAKMATS />
        </div>
      );
    case "S420":
      return (
        <div className="pageSwitcher">
          <S420 />
        </div>
      );
    case "SCHOOL":
      return (
        <div className="pageSwitcher">
          <SCHOOL />
        </div>
      );
    case "ADMIN":
      return (
        <div className="pageSwitcher">
          <ADMIN />
        </div>
      );
    case "KAHAD":
      return (
        <div className="pageSwitcher">
          <KAHAD />
        </div>
      );
    default:
      return (
        <div className="pageSwitcherThatisEmptybecuaseuser-is-balmaz">
          {/*           <p> מי זה? </p>
           */}{" "}
          <div style={{ fontSize: "20pt" }}>
            {" "}
            <Link to="/login">לחץ כאן להתחברות</Link>
          </div>
        </div>
      );
  }
}
