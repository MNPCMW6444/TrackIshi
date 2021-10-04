import Axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import domain from "../../util/domain";

function Test() {
  const [allData, allDatad] = useState("");

  const { getUser } = useContext(UserContext);

  const history = useHistory();

  async function create(e) {
    e.preventDefault();
    try {
        const res = await Axios.get(`${domain}/auth/getFullDetails`);
        allDatad(res.data.FirstName);
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
        }
      }
      return;
    }

    await getUser();
    history.push("/");
  }

  

  return (
    <div className="the-details">
        <p>{allData}</p>
        <p><button onClick={create}>refresh</button></p>
    </div>
  );
}

export default Test;