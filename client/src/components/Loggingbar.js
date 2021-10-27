import React, {useState, useContext} from 'react';
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

export default function Loggingbar() {
  
  const { user } = useContext(UserContext);
  let role = "לא מוגדר";
  const [help, setHelp] = useState(false);

  switch (user && user.Role){
    case "SCREW": role="איש צוות"; break;
    case "DIRECT": role="מפקד מקצועי (מפקד גף)"; break;
    case "AUTHCO": role="מפקד מאשר (מפקד יחידה)"; break;
    case "PAKMATS": role="מנהל כח אדם"; break;
    case "SCHOOL": role="מפקד הכשרה"; break;
    case "MALAM": role="מפקד מופעי כשירות"; break;
    case "ADMIN": role="מנהל-על-מערכת"; break;
    default:;
  }

  function toggleTextON() {
    setHelp(true);
  }

  function toggleTextOFF() {
    setHelp(false);
  }

  return (
    <div className="loggingbar">
      <h1 className="mainHeader">טרק אישי</h1>
      {user === null ? (
        <>
          <p>אינך מחובר למערכת, נא להתחבר</p>
          <Link to="/login">התחברות</Link>
        </>
      ) : (
        user && (
          <>
            <p>הנך מחובר <span style={{fontSize:"10pt"}}>/</span><span style={{fontSize:"13pt"}}>היית מחובר אחרון </span>למערכת כ{user.NickName} (מ.א. {user.MA}), ותפקידך במערכת הוא
              <button 
                onClick={help?toggleTextOFF:toggleTextON} 
                className="justALinkNotButton"
              >
                <span className={help?"":"justALinkLink"}>{role}</span>
                <span> </span>
                <span className="justALinkLink">{help && "[סגור הסבר]"}</span>
              </button>
            </p>
            {help && <div className="Roles">
              <div className="RolesHeader">הסבר על סוגי המשתמשים והרשאותיהם:</div>
              <br/>
              <div className="Roleheader">איש צוות:</div>
              <br/>
              <div className="Rolemeaning">בלההל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'הל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה דלגההל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה דהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה דה ד  'רקלעה ד בלה</div>
              <br/>
              <div className="Roleheader">איש צוות:</div>
              <br/>
              <div className="Rolemeaning">בלההל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה ד בלה</div>
              <br/>
              <div className="Roleheader">איש צוותצוות:</div>
              <br/>
              <div className="Rolemeaning">בלההל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה דהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה ד בלה</div>
              <br/>
              <div className="Roleheader">אישאיש צוות:</div>
              <br/>
              <div className="Rolemeaning">בלה בהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה דלעה דלה</div>
              <br/>
              <div className="Roleheader">איש צאישוות:</div>
              <br/>
              <div className="Rolemeaning">בלההל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה ד בלהל' הצ דלה דכלה לדכ הלדכ הלדגכ הלהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה ד' גהל 'לגה  'רקלעה דה</div>
              <br/>
              <div className="Roleheader">איש צוואישת:</div>
              <br/>
              <div className="Rolemeaning">בלה דגכל'קכ 'קכל 'קכ ל'קכ  קר קחרחה קהח גה גח הגכחה גכ גכ גכ גכח חגכ כ  כהח לנ 'לעה 'לעה ח'שג ה' גלעה 'לכה לכ הל רהח 'דגלה 'לר עהלקדר גהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה דלרה לד רעה בלה</div>
              <br/>
              <div className="Roleheader">איאישש צוות:</div>
              <br/>
              <div className="Rolemeaning">בלההל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה ד בהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'הל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל' הצ דלה דכלה לדכ הלדכ הלדגכ הל' גהל 'לגה  'רקלעה דהל 'לגה  'רקלעה דהל 'לגה  'רקלעה דה  'רקלעה דלה</div>
              <br/><br /><br />
              <button className="closeRoles" onClick={toggleTextOFF}>סגור</button>
              <br />
            </div>}
          </>
        )
      )}
    </div>
  );
}
