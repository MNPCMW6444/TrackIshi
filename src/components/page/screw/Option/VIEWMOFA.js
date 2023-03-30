import FgradeTable from "../../global/Opinions/ShowMy/FgradeTable";
import GradesTable from "../../global/Opinions/ShowMy/GradesTable";
import Paragraph from "../../global/usefull/Paragraph";
import CheckBox from "./CheckBox";
import domain from "../../../../util/domain";
import Axios from "axios";
import React, { useState, useContext } from "react";
import UserContext from "../../../../context/UserContext";

export default function VIEWMOFA(props) {
  const [deletef, setDeletef] = useState(false);
  const [mehak, setmehak] = useState("מחק מופע הדרכה זה");

  const { user } = useContext(UserContext);

  function justdeleteon() {
    setDeletef(true);
  }
  function justdeleteoff() {
    setDeletef(false);
  }

  async function deleteit() {
    setmehak("מוחק...");
    let res;
    try {
      res = await Axios.delete(`${domain}/mofa/${props.data._id}`);
    } catch (e) {}
    setmehak("לא נמחק... נסה לרענן את הדף לנסות שנית");
    if (res && res.data && res.data.res && res.data.res === "asd")
      setmehak("נמחק... לא יופיע יותר לאחר רענון הדף");
  }

  let date = "";
  try {
    let finil = "DIDNOTDOWANAD";
    finil = props.data.fillDate.substring(0, 10);
    const month = finil.substring(5, 7);
    const day = finil.substring(8, 10);
    const year = finil.substring(0, 4);
    finil = day + "/" + month + "/" + year;
    date = finil;
  } catch (err) {
    console.log(err);
  }

  let c = props.data.createdAt && props.data.createdAt.toString() || "";
  let cyear = c.substring(0, 4);
  let cmonth = c.substring(5, 7);
  let cday = c.substring(8, 10);
  let ctime = c.substring(11, 19);
  let created = cday + "/" + cmonth + "/" + cyear + " " + ctime;

  let test = props.data.isTest;
  let pass = props.data.isPass;

  return (
    <div className="odiv">
      {" "}
      <br /> <br /> <br /> <br /> <br />
      <h3 className="oh3">מופע הדרכה: </h3> <br /> <br />
      <h4 className="oh4">פרטים אישיים: </h4> <br />
      <table className="otable">
        <tr>
          <th className="oth">תאריך</th>
          <th className="oth">שם החניך/ה</th>
          <th className="oth">שם המדריך/ה</th>
          <th className="oth">סדרה</th>
          <th className="oth">מספר</th>
        </tr>
        <tr>
          <td className="otd">{date}</td>
          <td className="otd">
            {props.data.name
              ? props.data.name
              : props.h
              ? props.h.NickName
              : user.NickName}
          </td>
          <td className="otd">{props.data.MadName}</td>
          <td className="otd">{props.data.Emda}</td>
          <td className="otd">{props.data.No}</td>
        </tr>
        <br />
        <tr>
          <th colSpan="5" className="oth">
            סטטוס עמידה ביעדים
          </th>
        </tr>
        <tr>
          <th className="oth" colSpan="1">
            יעד 1{" "}
          </th>

          <td className="otd" colSpan="3">
            {props.data.X11 ? props.data.X11 : "*** לא הוזן ***"}
          </td>
          <td
            className="otd"
            colSpan="1"
            style={{ backgroundColor: props.data.X21 ? "#A9E18E" : "#F39393" }}
          >
            {/*  <CheckBox is={props.data.X21} -
           /> */}
            {props.data.X21 ? "כן" : "לא"}
          </td>
        </tr>{" "}
        <tr>
          <th className="oth" colSpan="1">
            יעד 2{" "}
          </th>

          <td className="otd" colSpan="3">
            {props.data.X12 ? props.data.X12 : "*** לא הוזן ***"}
          </td>
          <td
            className="otd"
            colSpan="1"
            style={{ backgroundColor: props.data.X22 ? "#A9E18E" : "#F39393" }}
          >
            {/*             <CheckBox is={props.data.X22} />
             */}{" "}
            {props.data.X22 ? "כן" : "לא"}
          </td>
        </tr>{" "}
        <tr>
          <th className="oth" colSpan="1">
            יעד 3{" "}
          </th>

          <td className="otd" colSpan="3">
            {props.data.X13 ? props.data.X13 : "*** לא הוזן ***"}
          </td>
          <td
            className="otd"
            colSpan="1"
            style={{ backgroundColor: props.data.X23 ? "#A9E18E" : "#F39393" }}
          >
            {/*             <CheckBox is={props.data.X23} />
             */}{" "}
            {props.data.X23 ? "כן" : "לא"}
          </td>
        </tr>
      </table>
      <br />
      <br />
      <br />
      <h4 className="oh4">משוב אישי (כהערכה כוללת): </h4>
      <br />
      <GradesTable
        c1={props.data.C1}
        c2={props.data.C2}
        c3={props.data.C3}
        c4={props.data.C4}
        c5={props.data.C5}
        c6={props.data.C6}
        c7={props.data.C7}
        c8={props.data.C8}
        c9={props.data.C9}
      />
      <br />
      <br /> <br />
      <h4 className="oh4">ציון מסכם לרמת הבקרה: </h4>
      <br />
      <FgradeTable grade={props.data.M1} />
      <br />
      <br />
      <br />
      <h4 className="oh4">מבחן: </h4>
      <br />
      <table className="otable">
        <tr>
          <td className="otd">האם המופע מהווה מבחן?</td>
          <td className="otd">
            {/*             <input type="checkbox" checked={test ? "checked" : ""}></input>
             */}{" "}
            {test ? "כן" : "לא"}{" "}
          </td>
        </tr>{" "}
        {test && (
          <tr>
            <td className="otd">האם המבחן עבר?</td>
            <td
              className="otd"
              style={{
                backgroundColor: pass ? "#A9E18E" : "#F39393",
              }}
            >
              {/*  <input
                type="checkbox"
                checked={pass ? "checked" : ""}
                onChange={() => {}}
             ></input> */}{" "}
              {pass ? "כן" : "לא"}
            </td>
          </tr>
        )}
      </table>
      <br />
      <br />
      <br />
      <h4 className="oh4">נקודות לשימור: </h4>
      <br />
      <div className="opd">
        <Paragraph
          text={props.data.M11 ? props.data.M11 : "*** לא הוזנו ***"}
        />
      </div>
      <br />
      <h4 className="oh4">נקודות לשיפור: </h4>
      <br />
      <div className="opd">
        <Paragraph
          text={props.data.M21 ? props.data.M21 : "*** לא הוזנו ***"}
        />
      </div>
      <br />
      <h4 className="oh4">סיכום: </h4>
      <br />
      <div className="opd">
        <Paragraph text={props.data.Mf ? props.data.Mf : "*** לא הוזן ***"} />
      </div>
      <br />
      <h4 className="opinionH4" style={{ textAlign: "center" }}>
        נשמר ב:
        <span className="lightero"> {created}</span>
      </h4>
      <br />
      <br /> <br />
      <br />{" "}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => justdeleteon()}
          style={{
            backgroundColor: "#E36363",
            fontSize: deletef ? "20pt" : "",
          }}
        >
          {mehak}
        </button>
      </div>
      <br /> <br />
      {deletef && (
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              fonמtSize: "20pt",
              backgroundColor: "unset",
              color: "black",
              fontWeight: "900",
              fontSize: "20pt",
            }}
          >
            בטוח?{" "}
          </button>
          <button
            tabIndex={-5}
            style={{ fontSize: "20pt", backgroundColor: "transparent" }}
            onClick={async () => deleteit()}
          ></button>
          <button
            style={{
              fontSize: "20pt",
              backgroundColor: "#E36363",
              width: "55px",
            }}
            onClick={async () => deleteit()}
          >
            כן
          </button>
          <button
            tabIndex={-5}
            style={{
              fontSize: "20pt",
              backgroundColor: "transparent",
            }}
            onClick={async () => deleteit()}
          ></button>
          <button
            style={{
              backgroundColor: "unset",
              color: "black",
              fontWeight: "900",
            }}
          ></button>
          <button
            onClick={() => justdeleteoff()}
            style={{
              fontSize: "20pt",
              backgroundColor: "#89c16E",
              width: "55px",
            }}
          >
            לא
          </button>
        </div>
      )}
      <br />
      <br />
      <br />
      <br /> <br />
      <br /> <br />
      <br />
    </div>
  );
}
