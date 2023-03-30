import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

import Logo100 from "../logos and fonts/Logo100";

export default function Loggingbar() {
  const { user } = useContext(UserContext);
  let role = "לא מוגדר";
  const [help, setHelp] = useState(false);
  const [helpt, setHelpt] = useState(false);

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
    case "S420":
      role = "מפקד הכשרה 420";
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
    setHelpt(false);
  }

  function toggleTextOFF() {
    setHelp(false);
    setHelpt(false);
  }

  return (
    <div className="loggingbar">
      <h1 className="mainHeader">
        {" "}
        <Logo100 resize={0.4} />{" "}
      </h1>
      {/* <h1 className="mainHeader">טרק אישי {//NOTRELEVANT user?(user.MA):("ריק") NOTRELEVANT//} </h1>*/}
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
                onClick={() => {
                  if (help) toggleTextOFF();
                  else toggleTextON();
                }}
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
                <>
                  {" "}
                  <div className="RolesHeader">
                    הסבר על סוגי המשתמשים והרשאותיהם:
                  </div>
                  <br /> <br />
                  <div className="Roleheader">מבצעים:</div>
                  <div className="Rolemeaning">
                    <ul>
                      <li>בעל גישה לספר טלפונים</li>{" "}
                      <li style={{ color: "Red" }}>
                        בעל יכולת שינוי הסיסמה שלו
                      </li>
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
                      <li style={{ color: "green" }}>
                        בעל יכולת שינוי הסיסמה שלו
                      </li>
                      <li>
                        בעל יכולת קריאת כל החוו"דים שלו, ממוצעים גפיים וממוצעים
                        קורסיים
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת קריאת כל המבחנים וההסמכות שלו
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="Roleheader">מפקד גף:</div>
                  <div className="Rolemeaning">
                    <ul>
                      <li>בעל גישה לספר טלפונים</li>
                      <li>בעל יכולת עריכת פרטים אישיים שלו</li>
                      <li style={{ color: "green" }}>
                        בעל יכולת שינוי הסיסמה שלו
                      </li>
                      <li>
                        בעל יכולת קריאת כל החוו"דים שלו, ממוצעים גפיים וממוצעים
                        קורסיים
                      </li>

                      <li style={{ color: "Red" }}>
                        {" "}
                        בעל יכולת חתימה על כל החוו"דים קיימים שלו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת קריאת כל המבחנים וההסמכות שלו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת לצפות בתמונת מצב גפית של גפו
                      </li>
                      <li>
                        בעל יכולת הזנת חוו"דים חדשים לכל אנשי הצוות הנמצאים תחת
                        פיקודו ושדירוגם המקצועי הינם א' או ב'
                      </li>
                      <li>
                        בעל יכולת עדכון חוו"דים קיימים לכל אנשי הצוות הנמצאים
                        תחת פיקודו ושדירוגם המקצועי הינם א' או ב'
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת ליצור ולעדכון מבחנים עבור כל אנשי הצוות
                        שנמצאים תחת פיקודו
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="Roleheader">מפקד יחידה:</div>
                  <div className="Rolemeaning">
                    <ul>
                      <li>בעל גישה לספר טלפונים</li>
                      <li>בעל יכולת עריכת פרטים אישיים שלו</li>
                      <li style={{ color: "green" }}>
                        בעל יכולת שינוי הסיסמה שלו
                      </li>
                      <li>
                        בעל יכולת קריאת כל החוו"דים שלו, ממוצעים גפיים וממוצעים
                        קורסיים
                      </li>

                      <li style={{ color: "Red" }}>
                        בעל יכולת קריאת כל המבחנים וההסמכות שלו
                      </li>
                      <li style={{ color: "Red" }}>
                        {" "}
                        בעל יכולת חתימה על כל החוו"דים קיימים שלו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת לצפות בתמונת מצב יחידתית של יחידתו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת לצפות בתמונת מצב גפית של כל גפי יחידתו
                      </li>
                      <li>
                        בעל יכולת הזנת חוו"דים חדשים לכל אנשי הצוות הנמצאים תחת
                        פיקודו ושדירוגם המקצועי הינם ג' או ד'
                      </li>
                      <li>
                        בעל יכולת עדכון חוו"דים קיימים לכל אנשי הצוות הנמצאים
                        תחת פיקודו ושדירוגם המקצועי הינם ג' או ד'
                      </li>
                      <li>
                        בעל יכולת אישור חוו"דים קיימים לכל אנשי הצוות הנמצאים
                        תחת פיקודו ושדירוגם המקצועי הינם א' או ב'
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת ליצור ולעדכון מבחנים עבור כל אנשי הצוות
                        שנמצאים תחת פיקודו
                      </li>
                    </ul>
                  </div>
                  <br />
                  <div className="Roleheader" style={{ color: "Red" }}>
                    מפקד הכשרה:
                  </div>
                  <div className="Rolemeaning" style={{ color: "Red" }}>
                    <ul>
                      <li style={{ color: "Red" }}>בעל גישה לספר טלפונים</li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת עריכת פרטים אישיים שלו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת שינוי הסיסמה שלו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת קריאת כל החוו"דים שלו, ממוצעים גפיים וממוצעים
                        קורסיים
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת חתימה על כל החוו"דים קיימים שלו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת קריאת כל המבחנים וההסמכות שלו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת לצפות בתמונת מצב קורסית של הכשרתו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת הזנת משובי הדרכה חדשים לכל החניכים הנמצאים תחת
                        פיקודו
                      </li>
                      <li style={{ color: "Red" }}>
                        בעל יכולת עדכון משובי הדרכה קיימים לכל החניכים הנמצאים
                        תחת פיקודו
                      </li>
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
                  <div
                    className="Roleheader"
                    style={{ color: "blue", fontSize: "13pt" }}
                  >
                    מקרא:
                  </div>
                  <div className="Rolemeaning">
                    <ul>
                      <li style={{ color: "black", fontSize: "8pt" }}>
                        שחור: קיים
                      </li>
                      <li style={{ color: "Red", fontSize: "8pt" }}>
                        אדום: טרם פותח
                      </li>
                      <li style={{ color: "green", fontSize: "8pt" }}>
                        ירוק: יתייתר אחרי פיתוח
                      </li>
                    </ul>
                  </div>
                  <br /> <br />
                </>
                {!helpt && (
                  <button
                    className="closeRoles"
                    style={{
                      backgroundColor: "blue",
                      fontSize: "15pt",
                      width: "15%",
                    }}
                    onClick={() => {
                      setHelpt(true);
                    }}
                  >
                    הצג טבלת סיכום
                  </button>
                )}
                {helpt && (
                  <>
                    <div className="RolesHeader">
                      טבלת סיכום סוגי המשתמשים והרשאותיהם בסיום פיתוח:
                    </div>
                    <br />
                    <table>
                      <tr>
                        <th className="stha">הרשאה</th>
                        <th className="stha">מבצעים</th>
                        <th className="stha">מנהל כח אדם</th>
                        <th className="stha">איש צוות</th>
                        <th className="stha">מפקד גף</th>
                        <th className="stha">מפקד יחידה</th>
                        <th className="stha">מפקד הכשרה</th>
                        <th className="stha">מנהל-על מערכת</th>
                      </tr>
                      <tr>
                        <td className="stda">צפייה בספר טלפונים</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">
                          עריכת פרטים אישיים של כל המשתמשים
                        </td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">עדכון פרטים אישיים עצמיים</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">שינוי סיסמה עצמי</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">קריאת חוו"דים וממוצעים</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">קריאת מבחנים והסמכות</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                      </tr>{" "}
                      <tr>
                        <td className="stda">חתימת חוו"דים</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">
                          יצירה ועדכון של חוו"דים לדרגי א+ב
                        </td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">
                          יצירה ועדכון של חוו"דים לדרגי ג+ד
                        </td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">אישור חוו"דים לדרגי א+ב</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">הזנת משובי הדרכה</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                        <td className="stda">V</td>
                      </tr>
                      <tr>
                        <td className="stda">עדכון כל נתון בבסיס הנתונים</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">X</td>
                        <td className="stda">V</td>
                      </tr>
                    </table>
                    <br />
                    <br />
                    <br />
                    <br />
                  </>
                )}
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
