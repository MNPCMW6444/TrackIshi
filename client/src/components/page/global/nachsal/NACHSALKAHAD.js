import Axios from "axios";
import React, { useState, useEffect } from "react";
import domain from "../../../../util/domain";
import NACHSALTBKAHAD from "./nachsaltable/TACHSALTBKAHAD";
import ErrorMessage from "../../../messages/ErrorMessage";

export default function NACHSALKAHAD() {
  const [datas, setData] = useState();
  const [add, setAdd] = useState();

  const [errorMessage, setErrorMessage] = useState(null);

  const [in1, setIn1] = useState("");
  const [in2, setIn2] = useState("");
  const [in3, setIn3] = useState("");

  const [be, fun] = useState("yetto");

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const getQ = async () => {
      const res = await Axios.get(`${domain}/user/getNachsal`);
      setData(res.data);
      setReady(Math.random());
    };
    getQ();
  }, [be]);

  async function send() {
    let res2 = false;
    const newUSER = {
      iMA: in1,
      password: in3,
      passwordVerify: in3,
    };

    try {
      const res = await Axios.post(`${domain}/user/addnewCrewmByComm`, newUSER);
      res2 = res.data.res;
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
      } else console.log(err);
    }
    return res2;
  }

  return (
    ready && (
      <>
        <br />
        <br /> <br />
        {!add && (
          <div style={{ textAlign: "center" }}>
            <button
              onClick={() => {
                setAdd(true);
              }}
              style={{ fontSize: "25pt", textAlign: "center" }}
            >
              הוספת משתמשים חדשים
            </button>
          </div>
        )}
        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            clear={() => setErrorMessage(null)}
          />
        )}
        {add && (
          <div style={{}}>
            <h2 style={{ fontSize: "30pt", textAlign: "center" }}>
              טופס הוספת משתמש חדש:
            </h2>
            <br /> <br />
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%", textAlign: "center" }}>
                <h2>מספר אישי:</h2>
                <br />
                <h2>כינוי:</h2>
                <br />
                <h2>סיסמה ראשונית:</h2>
                <br />
              </div>
              <div style={{ width: "50%", float: "left", textAlign: "center" }}>
                <br />{" "}
                <input
                  onChange={(e) => {
                    setIn1(e.target.value);
                  }}
                  value={in1}
                  style={{
                    textAlign: "center",
                    fontSize: "18pt",
                    width: "70%",
                    height: "23px",
                  }}
                />
                <br /> <br />
                <br /> <br />
                <input
                  onChange={(e) => {
                    setIn2(e.target.value);
                  }}
                  value={in2}
                  style={{
                    textAlign: "center",
                    fontSize: "18pt",
                    width: "70%",
                    height: "23px",
                  }}
                />
                <br /> <br />
                <br /> <br />
                <input
                  onChange={(e) => {
                    setIn3(e.target.value);
                  }}
                  value={in3}
                  style={{
                    textAlign: "center",
                    fontSize: "18pt",
                    width: "30%",
                    height: "23px",
                  }}
                />{" "}
                <button
                  onClick={() => {
                    var result = "";
                    var characters =
                      /* "ABCDEFGHIJKLMNOPQRSTUVWXYZ4567890abcdefghijklmnopqrstuv" +*/ "wxyz123";
                    var charactersLength = characters.length;
                    for (var i = 0; i < 6; i++) {
                      result += characters.charAt(
                        Math.floor(Math.random() * charactersLength)
                      );
                    }
                    setIn3(result);
                  }}
                  style={{ width: "20%", fontSize: "18pt" }}
                >
                  צור קל
                </button>
                <button
                  onClick={() => {
                    var result = "";
                    var characters =
                      "ABCDEFGHIJKLMNOPQRSTUVWXYZ4567890abcdefghijklmnopqrstuv" +
                      "wxyz123";
                    var charactersLength = characters.length;
                    for (var i = 0; i < 10; i++) {
                      result += characters.charAt(
                        Math.floor(Math.random() * charactersLength)
                      );
                    }
                    setIn3(result);
                  }}
                  style={{ width: "20%", fontSize: "18pt" }}
                >
                  צור קשה
                </button>
              </div>
            </div>
            <br />
            <br />
            <br />
            <button
              className="footercancelbutton"
              onClick={() => {
                setAdd(false);
              }}
              style={{
                fontSize: "16pt",
                width: "300px",
                height: "50px",
              }}
            >
              בטל
            </button>
            <button
              style={{
                width: "87px",
                height: "50px",
                backgroundColor: "unset",
                cursor: "unset",
              }}
            ></button>
            <button
              onClick={async () => {
                if (await send()) {
                  setIn1("");
                  setIn2("");
                  setIn3("");
                } else {
                }
              }}
              style={{ fontSize: "16pt", width: "300px", height: "50px" }}
            >
              שמור והוסף משתמש חדש
            </button>
            <button
              style={{
                width: "87px",
                height: "50px",
                backgroundColor: "unset",
                cursor: "unset",
              }}
            ></button>
            <button
              onClick={async () => {
                if (await send()) {
                  setAdd(false);
                } else {
                }
              }}
              style={{ fontSize: "16pt", width: "300px", height: "50px" }}
            >
              שמור וחזור לספר טלפונים
            </button>
          </div>
        )}
        <br /> <br /> <br />
        {!add && <NACHSALTBKAHAD data={datas} fun={fun} key={ready} />}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    )
  );
}
