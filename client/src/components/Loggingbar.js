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
            <p>הנך מחובר <span style={{fontSize:"10pt"}}>/</span><span style={{fontSize:"13pt"}}>התחברת לאחרונה </span>למערכת כ{user.NickName} (מ.א. {user.MA}), ותפקידך במערכת הוא
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
              <div className="Roleheader">מנהל כח אדם:</div>
              <br/>
              <div className="Rolemeaning">בעל גישה לנכס"ל בלבד</div>
              <br/>
              <div className="Roleheader">איש צוות:</div>
              <br/>
              <div className="Rolemeaning">בעל גישה לתמונת מצב אישית, קריאת כל החוו"דים והמבחנים ועדכון פרטים אישיים</div>
              <br/>
              <div className="Roleheader">מקפד מקצועי שוטף:</div>
              <br/>
              <div className="Rolemeaning"></div>
              <br/>
              <div className="Roleheader">מפקד מאשר:</div>
              <br/>
              <div className="Rolemeaning"></div>
              <br/>
              <div className="Roleheader">מפקד הכשרה:</div>
              <br/>
              <div className="Rolemeaning"></div>
              <br/>
              <div className="Roleheader">מפקד מופע תורם כשירות:</div>
              <br/>
              <div className="Rolemeaning"></div>
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
