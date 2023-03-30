import Axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import FgradeTable from "../../global/Opinions/Edit/FgradeTable";
import GradesTable from "../../global/Opinions/Edit/GradesTable";
import UserContext from "../../../../context/UserContext";
import ErrorMessage from "../../../messages/ErrorMessage";
import domain from "../../../../util/domain";
import emdalist from "../../../../util/emdalist";

export default function NEWMOFA(props) {
  const [errorMessage, setErrorMessage] = useState(null);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  const { user } = useContext(UserContext);
  const [date, setdate] = useState(today);
  const [MadName, setMadName] = useState();
  const [Emdat, setEmdat] = useState();
  const [Emda, setEmda] = useState();
  const [No, setNo] = useState(1);
  const [x11, setx11] = useState();
  const [x12, setx12] = useState();
  const [x13, setx13] = useState();
  const [x21, setx21] = useState(false);
  const [x22, setx22] = useState(false);
  const [x23, setx23] = useState(false);
  const [test, settest] = useState(false);
  const [pass, setpass] = useState(false);
  const [c1, setc1] = useState();
  const [c2, setc2] = useState();
  const [c3, setc3] = useState();
  const [c4, setc4] = useState();
  const [c5, setc5] = useState();
  const [c6, setc6] = useState();
  const [c7, setc7] = useState();
  const [c8, setc8] = useState();
  const [c55, setc55] = useState();
  const [c9, setc9] = useState();
  const [m1, setm1] = useState();
  const [m11, setm11] = useState();
  const [m21, setm21] = useState();
  const [mf, setmf] = useState();
  const [m, setm] = useState("");

  const [autonum, setautonum] = useState(0);

  const [newGrade, setNewGrade] = useState([4, "nelson"]);

  function setma(value, who) {
    let lines = 1;
    if (value.substring(0, 3) != "1. ") value = "1. " + value;
    for (let i = 0; i < value.length - 1 && lines < 9; i++) {
      if (value.substring(i, i + 1) === "\n") {
        lines++;
        if (value.substring(i + 1, i + 4) != lines + ". ") {
          value =
            value.substring(0, i + 1) +
            lines +
            ". " +
            value.substring(i + 1, value.length); // was value.substring(i + 1, value.length); in 2022Q1 and dropped first letter of typing!!!
        }
      }
    }
    if (who === "1") setm11(value);
    if (who === "2") setm21(value);
    if (who === "3") setmf(value);
  }

  function handleCheck1() {
    setx21(!x21);
  }

  function handleCheck2() {
    setx22(!x22);
  }

  function handleCheck3() {
    setx23(!x23);
  }

  function handletest() {
    if (test) setpass(false);
    settest(!test);
  }

  function handlepass() {
    if (pass) setpass(!pass);
    else {
      if (m1 && m1 > 6) {
        setpass(!pass);
        setm("");
      } else {
        setpass(false);
        setm("לא ניתן להעביר מבחן עם ציון נמוך מממוצע (7)");
      }
    }
  }

  useEffect(() => {
    switch (newGrade[1]) {
      case "C1":
        setc1(newGrade[0]);
        break;

      case "C2":
        setc2(newGrade[0]);
        break;

      case "C3":
        setc3(newGrade[0]);
        break;

      case "C4":
        setc4(newGrade[0]);
        break;

      case "C5":
        setc5(newGrade[0]);
        break;

      case "C6":
        setc6(newGrade[0]);
        break;

      case "C7":
        setc7(newGrade[0]);
        break;

      case "C8":
        setc8(newGrade[0]);
        break;

      case "C55":
        setc55(newGrade[0]);
        break;

      case "C9":
        setc9(newGrade[0]);
        break;

      case "final":
        setm1(newGrade[0]);
        setpass(false);
        break;

      default:
        console.log("אתחול או שינוי לא מוכר");
        break;
    }
  }, [newGrade]);

  useEffect(() => {
    async function cautonum(u) {
      const res = await Axios.get(
        `${domain}/mofa/checknum/${u}/${
          (props && props.h && props.h.MA) || user.MA
        }`
      );

      setautonum(res.data.a + 1);
      setNo(res.data.a + 1);
    }
    cautonum(Emdat);
  }, [Emdat]);

  async function send() {
    let user2 = user;
    if (props.h) user2 = props.h;
    const newData = {
      isTest: test,
      isPass: pass,
      fillDatep: date,
      CrewM: user2,
      name: user2.NickName,
      MadName: MadName,
      Emda: !Emda && Emdat ? Emdat : Emda,
      No: No,
      X11: x11,
      X12: x12,
      X13: x13,
      X21: x21,
      X22: x22,
      X23: x23,
      C1: c1,
      C2: c2,
      C3: c3,
      C4: c4,
      C5: c5,
      C6: c6,
      C7: c7,
      C8: c8,
      C55: c55,
      C9: c9,
      M1: m1,
      M11: m11,
      M21: m21,
      Mf: mf,
    };

    try {
      await Axios.post(`${domain}/mofa/createmofa`, newData);
      props.suc(" מופע ההדרכה נשמר בהצלחה!");
      const setDidupdated = props.setDidupdated;
      setDidupdated();

      const aa = props.afterfinish;
      aa(Math.random());

      const closeModal = props.forClosing;
      closeModal();
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        } else
          setErrorMessage(
            "לא כל שדות החובה מלאים או שהוזן משהו שגוי, בדוק שוב"
          );
      } else console.log(err);
    }
    return;
  }

  return (
    <div className="odiv">
      <br /> <br /> <br /> <br /> <br />
      <h3 className="oh3">מופע הדרכה: </h3> <br /> <br />
      <h4 className="oh4">
        פרטים אישיים<sup className="must">*</sup>:{" "}
      </h4>{" "}
      <br />
      <table className="otable" style={{ width: "60" }}>
        <tr>
          <th className="oth">תאריך</th>
          <th className="oth">שם החניך/ה</th>
          <th className="oth">שם המדריך/ה</th>
          <th className="oth">סדרה</th>
          <th className="oth">מספר</th>
        </tr>
        <tr>
          <td className="otd" style={{ textAlign: "center", width: "90px" }}>
            <input
              style={{ textAlign: "center", width: "95%" }}
              value={date}
              onChange={(e) => setdate(e.target.value)}
            ></input>
          </td>
          <td className="otd" style={{ textAlign: "center", width: "90px" }}>
            <input
              style={{ textAlign: "center", width: "95%" }}
              value={props.h ? props.h.NickName : user.NickName}
            ></input>
          </td>
          <td className="otd" style={{ textAlign: "center", width: "90px" }}>
            <input
              style={{ textAlign: "center", width: "95%" }}
              value={MadName}
              onChange={(e) => setMadName(e.target.value)}
            ></input>
          </td>
          <td className="otd" style={{ textAlign: "center", width: "90px" }}>
            <select
              style={{ textAlign: "center", width: "150px" }}
              onChange={(e) => setEmdat(e.target.value)}
            >
              <option disabled selected value>
                {" "}
                -- בחר --{" "}
              </option>

              {emdalist.map((x) => (
                <option value={x}>{x}</option>
              ))}

              {/* <option value={"אחר, פרט:"}>{"אחר, פרט:"}</option> */}
            </select>
            {Emdat === "אחר, פרט:" && (
              <input
                style={{ textAlign: "center", width: "95%" }}
                value={Emda}
                onChange={(e) => setEmda(e.target.value)}
              ></input>
            )}
          </td>
          <td className="otd" style={{ textAlign: "center", width: "90px" }}>
            <input
              style={{ textAlign: "center", width: "95%" }}
              value={Emdat ? No : 0}
              defaultValue={Emdat ? autonum : 0}
              type="number"
              onChange={(e) => setNo(Math.abs(e.target.value))}
            ></input>
          </td>
        </tr>
      </table>
      <br />
      <table className="otable" style={{ width: "60%" }}>
        <tr>
          <th colSpan="4" className="oth" style={{ width: "90%" }}>
            סטטוס עמידה ביעדים<sup className="must">*</sup>
          </th>{" "}
          <th colSpan="4" className="oth" style={{ width: "10%" }}>
            כן/לא
          </th>
        </tr>

        <tr>
          <th className="oth" colSpan="1">
            יעד 1
          </th>
          <td className="otd" colSpan="3">
            <input
              style={{ textAlign: "center", width: "95%" }}
              value={x11}
              onChange={(e) => setx11(e.target.value)}
            ></input>
          </td>
          <td className="otd" colSpan="1">
            <input
              style={{ textAlign: "center", width: "95%" }}
              type="checkbox"
              checked={x21 ? "checked" : ""}
              onChange={() => {
                handleCheck1();
              }}
            ></input>
          </td>
        </tr>

        <tr>
          <th className="oth" colSpan="1">
            יעד 2
          </th>
          <td className="otd" colSpan="3">
            <input
              style={{ textAlign: "center", width: "95%" }}
              value={x12}
              onChange={(e) => setx12(e.target.value)}
            ></input>
          </td>
          <td className="otd" colSpan="1">
            <input
              style={{ textAlign: "center", width: "95%" }}
              type="checkbox"
              checked={x22 ? "checked" : ""}
              onChange={() => {
                handleCheck2();
              }}
            ></input>
          </td>
        </tr>

        <tr>
          <th className="oth" colSpan="1">
            יעד 3
          </th>
          <td className="otd" colSpan="3">
            <input
              style={{ textAlign: "center", width: "95%" }}
              value={x13}
              onChange={(e) => setx13(e.target.value)}
            ></input>
          </td>
          <td className="otd" colSpan="1">
            <input
              style={{ textAlign: "center", width: "95%" }}
              type="checkbox"
              checked={x23 ? "checked" : ""}
              onChange={() => {
                handleCheck3();
              }}
            ></input>
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <h4 className="oh4">
        משוב אישי (כהערכה כוללת)<sup className="must">*</sup>:{" "}
      </h4>
      <br />
      <GradesTable
        c1={c1}
        c2={c2}
        c3={c3}
        c4={c4}
        c5={c5}
        c6={c6}
        c7={c7}
        c8={c8}
        c55={c55}
        c9={c9}
        setnewgrade={setNewGrade}
      />
      <br />
      <br /> <br />
      <h4 className="oh4">
        ציון מסכם לרמת הבקרה<sup className="must">*</sup>:{" "}
      </h4>
      <br />
      <FgradeTable grade={m1} setnewgrade={setNewGrade} />
      <br />
      <br />
      <br />
      <h4 className="oh4">מבחן: </h4>
      <br />
      <table className="otable">
        <tr>
          <td className="otd">האם המופע מהווה מבחן?</td>
          <td className="otd">
            <input
              type="checkbox"
              checked={test ? "checked" : ""}
              onChange={() => {
                handletest();
              }}
            ></input>
          </td>
        </tr>{" "}
        {test && (
          <tr>
            <td className="otd">האם המבחן עבר?</td>
            <td className="otd">
              <input
                type="checkbox"
                checked={pass ? "checked" : ""}
                onChange={() => {
                  handlepass();
                }}
              ></input>
            </td>
          </tr>
        )}
      </table>
      <h3 style={{ textAlign: "center", color: "red" }}>{m}</h3>
      <br />
      <br />
      <h4 className="oh4">נקודות לשימור: </h4>
      <br />
      <div className="opd">
        <textarea
          className="opinionInputPara2"
          type="text"
          placeholder={""}
          value={m11}
          onChange={(e) => setma(e.target.value, "1")}
        />
      </div>
      <br />
      <h4 className="oh4">נקודות לשיפור: </h4>
      <br />
      <div className="opd">
        <textarea
          className="opinionInputPara2"
          type="text"
          placeholder={""}
          value={m21}
          onChange={(e) => setma(e.target.value, "2")}
        />
      </div>
      <br />
      <h4 className="oh4">סיכום: </h4>
      <br />
      <div className="opd">
        <textarea
          className="opinionInputPara2"
          type="text"
          placeholder={""}
          value={mf}
          onChange={(e) => setmf(e.target.value)}
        />{" "}
      </div>
      <br /> <br />
      <br /> <br />
      <br />
      <div style={{ textAlign: "Center" }}>
        <button className="OpinionSendButton" onClick={() => send()}>
          {" "}
          שמור{" "}
        </button>
        {/*  <button
          style={{
            backgroundColor: "unset",
            color: "black",
            fontSize: "27pt",
            fontWeight: "900",
          }}
        >
          או
        </button>
        <button
          className="Opinion`Send`Button"
          style={{
            fontSize: "20pt",
          }}
          onClick={`send`2}
        >
          שמור כמבחן
        </button> */}
      </div>
      <br /> <br />
      <br />
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          clear={() => setErrorMessage(null)}
        />
      )}
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
    </div>
  );
}
