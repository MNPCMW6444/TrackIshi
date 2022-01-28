import Axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import FgradeTable from "../../global/Opinions/Edit/FgradeTable";
import GradesTable from "../../global/Opinions/Edit/GradesTable";
import UserContext from "../../../../context/UserContext";
import ErrorMessage from "../../../messages/ErrorMessage";
import domain from "../../../../util/domain";

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
  const [Emda, setEmda] = useState();
  const [No, setNo] = useState();
  const [x11, setx11] = useState();
  const [x12, setx12] = useState();
  const [x13, setx13] = useState();
  const [x21, setx21] = useState(false);
  const [x22, setx22] = useState(false);
  const [x23, setx23] = useState(false);
  const [c1, setc1] = useState();
  const [c2, setc2] = useState();
  const [c3, setc3] = useState();
  const [c4, setc4] = useState();
  const [c5, setc5] = useState();
  const [c6, setc6] = useState();
  const [c7, setc7] = useState();
  const [c8, setc8] = useState();
  const [c9, setc9] = useState();
  const [m1, setm1] = useState();
  const [m11, setm11] = useState();
  const [m21, setm21] = useState();
  const [mf, setmf] = useState();

  const [newGrade, setNewGrade] = useState([4, "nelson"]);

  function handleCheck1() {
    setx21(!x21);
  }

  function handleCheck2() {
    setx22(!x22);
  }

  function handleCheck3() {
    setx23(!x23);
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

      case "C9":
        setc9(newGrade[0]);
        break;

      case "final":
        setm1(newGrade[0]);
        break;

      default:
        console.log("אתחול או שינוי לא מוכר");
        break;
    }
  }, [newGrade]);

  async function send() {
    const newData = {
      isTest: false,
      fillDatep: date,
      CrewM: user,
      name: user.NickName,
      MadName: MadName,
      Emda: Emda,
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
      C9: c9,
      M1: m1,
      M11: m11,
      M21: m21,
      Mf: mf,
    };

    try {
      await Axios.post(`${domain}/mofa/createmofa`, newData);
      props.suc(" מופע ההדרכה נשמר בהצלחה! אם לא מופע יש לרענן את דף ");
      const setDidupdated = props.setDidupdated;
      setDidupdated();

      const closeModal = props.forClosing;
      closeModal();
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        } else setErrorMessage("כנראה שהזנת משהו שגוי, נסה להזין מחדש");
      } else console.log(err);
    }
    return;
  }

  async function send2() {
    const newData = {
      isTest: true,
      fillDatep: date,
      CrewM: user,
      name: user.NickName,
      MadName: MadName,
      Emda: Emda,
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
      C9: c9,
      M1: m1,
      M11: m11,
      M21: m21,
      Mf: mf,
    };

    try {
      await Axios.post(`${domain}/mofa/createmofa`, newData);
      props.suc(" מופע ההדרכה נשמר בהצלחה! אם לא מופי יש לרענן את דף ");
      const setDidupdated = props.setDidupdated;
      setDidupdated();

      const closeModal = props.forClosing;
      closeModal();
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        } else setErrorMessage("כנראה שהזנת משהו שגוי, נסה להזין מחדש");
      } else console.log(err);
    }
    return;
  }

  return (
    <div className="odiv">
      <br /> <br /> <br /> <br /> <br />
      <h3 className="oh3">מופע הדרכה: </h3> <br /> <br />
      <h4 className="oh4">פרטים אישיים: </h4> <br />
      <table className="otable" style={{ width: "60" }}>
        <tr>
          <th className="oth">תאריך</th>
          <th className="oth">שם החניך/ה</th>
          <th className="oth">שם המדריך/ה</th>
          <th className="oth">עמדה/סימולציה</th>
          <th className="oth">מס'</th>
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
              value={user.NickName}
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
            <input
              style={{ textAlign: "center", width: "95%" }}
              value={Emda}
              onChange={(e) => setEmda(e.target.value)}
            ></input>
          </td>
          <td className="otd" style={{ textAlign: "center", width: "90px" }}>
            <input
              style={{ textAlign: "center", width: "95%" }}
              value={No}
              onChange={(e) => setNo(e.target.value)}
            ></input>
          </td>
        </tr>
      </table>
      <br />
      <table className="otable" style={{ width: "60%" }}>
        <tr>
          <th colSpan="5" className="oth">
            סטטוס עמידה ביעדים
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
      <h4 className="oh4">משוב אישי (כהערכה כוללת): </h4>
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
        c9={c9}
        setnewgrade={setNewGrade}
      />
      <br />
      <br /> <br />
      <h4 className="oh4">ציון מסכם לרמת הבקרה: </h4>
      <br />
      <FgradeTable grade={m1} setnewgrade={setNewGrade} />
      <br />
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
          onChange={(e) => setm11(e.target.value)}
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
          onChange={(e) => setm21(e.target.value)}
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
        <button className="OpinionSendButton" onClick={send}>
          {" "}
          שמור{" "}
        </button>
        <button
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
          className="OpinionSendButton"
          style={{
            fontSize: "20pt",
          }}
          onClick={send2}
        >
          שמור כמבחן
        </button>
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
