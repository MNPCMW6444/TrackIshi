import Axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import domain from "../../util/domain";

function Navbar() {
  const { user, getUser } = useContext(UserContext);

  async function logOut() {
    await Axios.get(`${domain}/auth/logOut`);
    await getUser();
  }

  return (
    <div className="navbar">
      <Link to="/">
        <h1>תיק אישי מקצועי</h1>
      </Link>
      {user === null ? (
        <>
          <Link to="/login">התחברות</Link>
          <Link to="/create">הוספת משתמש חדש</Link>
        </>
      ) : (
        user && (
          <button className="btn-logout" onClick={logOut}>
            התנתק
          </button>
        )
      )}
    </div>
  );
}

export default Navbar;
