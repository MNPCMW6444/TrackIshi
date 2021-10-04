import Axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import domain from "../../util/domain";
import ErrorMessage from "../misc/ErrorMessage";
import "../auth/AuthForm.scss";

function updateFUD() {
  const [oldFUD, setOldFUD] = useState("");
  const [firstname, setFirstname] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { getUser } = useContext(UserContext);

  const history = useHistory();

  async function getFUD() {
    const FUDRes = await Axios.get(`${domain}/auth/getFullDetails`);
    setOldFUD(FUDRes.data.FirstName);
  }

  async function updateFUD(e) {
    e.preventDefault();

    const updateFUDData = {
      firstname: firstname,
    };

    try {
      await Axios.post(`${domain}/auth/updateFullDetails`, updateFUDData);
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
      }
      return;
    }

    await getUser();
    history.push("/");
  }

  return (
    <div className="auth-form">
      <h2>עדכון פרטים איישים למספר אישי {updateFUD.}</h2>
      <form className="form" onSubmit={create}>
        <label htmlFor="form-ma">מספר אישי</label>
        <input
          id="form-ma"
          type="number"
          value={formMA}
          onChange={(e) => setFormMA(e.target.value)}
        />

        <label htmlFor="form-password">בחר סיסמה</label>
        <input
          id="form-password"
          type="password"
          value={formPassword}
          onChange={(e) => setFormPassword(e.target.value)}
        />

        <label htmlFor="form-passwordVerify">אמת סיסמה</label>
        <input
          id="form-passwordVerify"
          type="password"
          value={formPasswordVerify}
          onChange={(e) => setFormPasswordVerify(e.target.value)}
        />

        <button className="btn-submit" type="submit">
          צור משתמש חדש
        </button>
      </form>
      <p>
        משתמש קיים? <Link to="/login">היכנס</Link>
      </p>
    </div>
  );
}

export default updateFUD;