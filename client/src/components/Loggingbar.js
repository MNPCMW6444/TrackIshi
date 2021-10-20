import Axios from "axios";
import React, { useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import domain from "../util/domain";

function Loginggbar() {
  const { user, getUser } = useContext(UserContext);
  const { help, setHelp } = useState(false);
  
  let role ="לא מוגדר";

  useEffect( () => {
    const doa = async () => {
      setHelp(!help);
    }
    doa();
  }, []);
  
  if (user)
    switch (user.Role) {
      case "SCREW": role="איש צוות"; break;
      case "ADMIN": role="  מלך"; break;
      default: role="לא מוגדר";
    }

  async function logOut() {
    await Axios.get(`${domain}/auth/logOut`);
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
            <p>הנך מחובר למערכת כ{user.NickName} (מ.א. {user.MA}), ותפקידך ע"פ רישומי המערכת הוא: <button onclick={null} className="justALink">{role}</button></p>
            <button className="btn-logout" onClick={logOut()}>
              התנתק
            </button>
            {help && <><p>help</p>
            <button onclick={null}>סגור</button></>}
          </>
        )
      )}
    </div>
  );
}

export default Loginggbar;