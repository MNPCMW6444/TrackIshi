import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import domain from "../../util/domain";
import ErrorMessage from "../misc/ErrorMessage";
import "../auth/AuthForm.scss";

function UpdateFUD() {
  const [oldFUD, setOldFUD] = useState();
  const [ma, setMa] = useState(0);
  const [firstname, setFirstname] = useState("שם פרטי");
  const [errorMessage, setErrorMessage] = useState(null);

  const { getUser } = useContext(UserContext);

  const history = useHistory();

  async function getFUD() {
    const FUDRes = await Axios.get(`${domain}/auth/getFullDetails`);
    setOldFUD(FUDRes.data);
    try {if (oldFUD.FirstName) setFirstname(oldFUD.FirstName);} catch (err){}
    try {if (oldFUD.MA) setMa(oldFUD.MA);} catch (err){}
  }

  async function updatefud(e) {
    e.preventDefault();

    const updateFUDData = {
      firstname: firstname,
    };

    try {
      await Axios.put(`${domain}/auth/updateFullDetails`, updateFUDData);
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

  useEffect(() => {
    getFUD();
  });

  return (
    <div className="update-form">
      <h2>עדכון פרטים איישים למספר אישי {ma}</h2>
      <form className="form" onSubmit={updatefud}>
        <label htmlFor="form-firstname">שם פרטי</label>
        <input
          id="form-firstname"
          type="string"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <button className="btn-submit" type="submit">
          עדכן פרטים
        </button>
      </form>
      <p>
        בטל <Link to="/logout">וצא</Link>
      </p>
    </div>
  );
}

export default UpdateFUD;