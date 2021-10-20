import React, {useContext} from 'react';
import UserContext from "../context/UserContext";
import SCREW from "./page/SCREW";
import DIRECT from "./page/DIRECT";
import AUTHCO from "./page/AUTHCO";
import PAKMATS from "./page/PAKMATS";
import SCHOOL from "./page/SCHOOL";
import MALAM from "./page/MALAM";
import ADMIN from "./page/ADMIN";

export default function Page() {
  
  const { user, getUser } = useContext(UserContext);

  switch (user && user.Role)
  {
    case "SCREW":
        return (
            <div className="pageSwitcher"><SCREW /></div>
            );
    case "DIRECT":
        return (
            <div className="pageSwitcher"><DIRECT /></div>
            );
    case "AUTHCO":
        return (
            <div className="pageSwitcher"><AUTHCO /></div>
            );
    case "PAKMATS":
        return (
            <div className="pageSwitcher"><PAKMATS /></div>
            );
    case "SCHOOL":
        return (
            <div className="pageSwitcher"><SCHOOL /></div>
            );
    case "MALAM":
        return (
            <div className="pageSwitcher"><MALAM /></div>
            );
    case "ADMIN":
        return (
            <div className="pageSwitcher"><ADMIN /></div>
            );
    default: return <div className="pageSwitcherThatisEmptybecuaseuser is balmaz"></div>;
    }
}