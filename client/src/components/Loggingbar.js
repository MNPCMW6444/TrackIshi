import React, {useState, useContext} from 'react';
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import domain from "../util/domain";
import Axios from "axios";

export default function Loggingbar() {
  
  const { user, getUser } = useContext(UserContext);
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

  async function logOut() {
    await Axios.get(`${domain}/user/logOut`);
    await getUser();
  }

  return (
    <div className="loggingbar">
      <Link to="/">
        <h1>תיק אישי מקצועי</h1>
      </Link>
      {user === null ? (
        <>
          <p>אינך מחובר למערכת, נא להתחבר</p>
          <Link to="/login">התחברות</Link>
        </>
      ) : (
        user && (
          <>
            <p>הנך מחובר למערכת כ{user.NickName} (מ.א. {user.MA}), ותפקידך ע"פ רישומי המערכת הוא <button onClick={help?toggleTextOFF:toggleTextON} className="justALink">{role+(help?" [סגור הסבר]":"")}</button></p>
            <button className="btn-logout" onClick={logOut}>
              התנתק
            </button>
            {help && <div>
              <h2>הסבר על סוגי המשתמשים והרשאותיהם:</h2>
              <h3>איש צוות:</h3>
              <h4>בלה בלה</h4>
              <h3>איש צוות:</h3>
              <h4>בלה בלה</h4>
              <h3>איש צוות:</h3>
              <h4>בלה בלה</h4>
              <h3>איש צוות:</h3>
              <h4>בלה בלה</h4>
              <h3>איש צוות:</h3>
              <h4>בלה בלה</h4>
              <h3>איש צוות:</h3>
              <h4>בלה בלה</h4>
              <h3>איש צוות:</h3>
              <h4>בלה בלה</h4>
              <button onClick={toggleTextOFF}>סגור</button>
            </div>}
          </>
        )
      )}
    </div>
  );
}
