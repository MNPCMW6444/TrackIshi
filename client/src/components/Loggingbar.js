import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Loggingbar() {
  const { user } = useContext(UserContext);
  let role = "לא מוגדר";
  const [help, setHelp] = useState(false);

  switch (user && user.Role) {
    case "SCREW":
      role = "איש צוות";
      break;
    case "DIRECT":
      role = "מפקד גף";
      break;
    case "AUTHCO":
      role = "מפקד יחידה";
      break;
    case "PAKMATS":
      role = "מבצעים";
      break;
    case "KAHAD":
      role = "מנהל כח אדם";
      break;
    case "SCHOOL":
      role = "מפקד הכשרה";
      break;
    case "???":
      role = "???";
      break;
    case "ADMIN":
      role = "מנהל-על מערכת";
      break;
    default:
  }

  function toggleTextON() {
    setHelp(true);
  }

  function toggleTextOFF() {
    setHelp(false);
  }

  return (
    <div className="loggingbar">
      <h1 className="mainHeader">טרק אישי {/*user?(user.MA):("ריק")*/}</h1>
      {user === null ? (
        <>
          <p>אינך מחובר למערכת, נא להתחבר</p>
          <Link to="/login">התחברות</Link>
        </>
      ) : (
        user && (
          <>
            {/*{user === null ? ( */}
            <p>
              הנך מחובר <span style={{ fontSize: "10pt" }}>/</span>
              <span style={{ fontSize: "13pt" }}>התחברת לאחרונה </span>למערכת כ
              {user.NickName} (מ.א. {user.MA}), ותפקידך במערכת הוא
              <button
                onClick={help ? toggleTextOFF : toggleTextON}
                className="justALinkNotButton"
              >
                <span className={help ? "" : "justALinkLink"}>{role}</span>
                <span> </span>
                <span className="justALinkLink">{help && "[סגור הסבר]"}</span>
              </button>
            </p>
            {/*):(<br />)} */}
            {help && (
              <div className="Roles">
                <div className="RolesHeader">
                  הסבר על סוגי המשתמשים והרשאותיהם:
                </div>
                <br /> <br />
                <div className="Roleheader">מבצעים:</div>
                <div className="Rolemeaning">
                  <ul>
                    <li>בעל גישה לספר טלפונים</li>
                  </ul>
                </div>
                <br />
                <div className="Roleheader" style={{ color: "Red" }}>
                  מנהל כח אדם:
                </div>
                <div className="Rolemeaning" style={{ color: "Red" }}>
                  <ul>
                    <li>בעל גישה לספר טלפונים</li>
                    <li>בעל יכולת עריכת פרטים אישיים של כולם</li>
                  </ul>
                </div>
                <br />
                <div className="Roleheader">איש צוות:</div>
                <div className="Rolemeaning">
                  <ul>
                    <li>בעל גישה לספר טלפונים</li>
                    <li>בעל יכולת עריכת פרטים אישיים שלו</li>
                    <li>בעל יכולת קריאת כל החוו"דים שלו</li>
                    <li style={{ color: "Red" }}>
                      בעל יכולת קריאת כל המבחנים וההסמכות שלו
                    </li>
                    <li>
                      בעל גישה לתמונת מצב אישית, קריאת כל החוו"דים ועדכון פרטים
                    </li>
                  </ul>
                </div>
                <br />
                <div className="Roleheader">מפקד גף:</div>
                <div className="Rolemeaning">
                  <ul>
                    <li>
                      asdasdfsdfsfds sd sdsd dasdfsd sd sd csdfsdfsdfsdsdfsdfsd
                    </li>
                  </ul>
                </div>
                <br />
                <div className="Roleheader">מפקד יחידה:</div>
                <div className="Rolemeaning">
                  <ul>
                    <li>asdasd sd asdasda as sd ssd sd sd sd dsa</li>
                  </ul>
                </div>
                <br />
                <div className="Roleheader" style={{ color: "Red" }}>
                  מפקד הכשרה:
                </div>
                <div className="Rolemeaning" style={{ color: "Red" }}>
                  <ul>
                    <li>awdawdawd</li>
                  </ul>
                </div>
                <br />
                <div className="Roleheader" style={{ color: "Red" }}>
                  מנהל-על מערכת:
                </div>
                <div className="Rolemeaning" style={{ color: "Red" }}>
                  <ul>
                    <li>יכול לעדכן כל פרט בבסיס הנתונים</li>
                  </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <button className="closeRoles" onClick={toggleTextOFF}>
                  סגור
                </button>
                <br />
              </div>
            )}
          </>
        )
      )}
    </div>
  );
}
