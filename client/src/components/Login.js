import Axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";
import domain from "../util/domain";
import ErrorMessage from "./messages/ErrorMessage";

function Login() {
  const [formMA, setFormMA] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { getUser } = useContext(UserContext);
    
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    const loginData = {
      MA: formMA,
      password: formPassword,
    };

    try {
      await Axios.post(`${domain}/user/login`, loginData);
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
      <h2>כניסה</h2>
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          clear={() => setErrorMessage(null)}
        />
      )}
      <form className="form" onSubmit={login}>
        <label htmlFor="form-ma">מספר אישי</label>
        <input
          id="form-ma"
          type="number"
          value={formMA}
          onChange={(e) => setFormMA(e.target.value)}
        />

        <label htmlFor="form-password">סיסמה</label>
        <input
          id="form-password"
          type="password"
          value={formPassword}
          onChange={(e) => setFormPassword(e.target.value)}
        />
        
        <button className="btn-submit" type="submit">
          היכנס
        </button>
      </form>
      <p>
        אינך קיים במערכת?   בקש מהמפקד ליצור עבורך משתמש
      </p>
    </div>
  );
}

export default Login;