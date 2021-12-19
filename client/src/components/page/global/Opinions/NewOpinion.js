//now do this

import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import domain from "../../../../util/domain";
import DetailsTable from "./New/DetailsTable";
import ClassesTable from "./New/ClassesTable";
import PersonDetails from "./New/PersonDetails";
import GradesTable from "./New/GradesTable";
import FgradeTable from "./New/FgradeTable";
import PotentialTable from "./New/PotentialTable";
import Paragraph from "../usefull/Paragraph";
import UserContext from "../../../../context/UserContext";
import ErrorMessage from "../../../messages/ErrorMessage";

function NewOpinion(props) {
  const [newGrade, setNewGrade] = useState([4, "nelson"]);

  const OpinionRes = { CrewM: props.shel };
  let wascrewm = OpinionRes.CrewM;
  let siginit = OpinionRes.Signed ? "כן" : "לא";
  let wassigned = "לא";

  //TKUFA
  let today = new Date();
  let thisYear = today.getFullYear();
  let thisMonth = today.getMonth() + 1;
  let tkufaNum = thisYear * 2;
  if (thisMonth < 7) tkufaNum--;
  let TkufaYear = tkufaNum % 2 === 0 ? tkufaNum / 2 : tkufaNum / 2 + 0.5;
  let tkufainYear = tkufaNum % 2 === 0 ? "2" : "1";
  let yearString = TkufaYear.toString();
  let countD = 0;
  for (let i = 0; i < 4 - yearString.length; i++) countD++;
  let addex = "";
  for (let i = 0; i < countD; i++) addex = addex + "0";
  let finilTkufa = tkufainYear + "." + addex + yearString;
  let wastkufa = finilTkufa;

  //FILLDATE

  let wasfilldate = today.getDate() + "/" + thisMonth + "/" + thisYear;

  let wasmonthsno = "";

  let wasposition = "";

  let wasC1 = 11;

  let wasC2 = 11;

  let wasC3 = 11;

  let wasC4 = 11;

  let wasCommander = useContext(UserContext).user;

  let wasC5 = 11;

  let wasC6 = 11;

  let wasC7 = 11;

  let wasC8 = 11;

  let wasC9 = 11;

  let wasM1 = 11;

  let wasM2 = 11;

  //PARAGRAPHS
  let tparr = 11;
  let fparr = 11;
  let tpp = "הקלד פה את היעדים לתקופה הקרובה באופן חופשי";
  let fpp = 'הקלד פה את סיכום החוו"ד באופן חופשי';
  for (let i = 0; i < tparr.length; i++) tpp = tpp + tparr[i] + "\n";

  for (let i = 0; i < fparr.length; i++) fpp = fpp + fparr[i] + "\n";

  let wasTp = tpp;
  let wasFp = fpp;

  const [signed, fsigned] = useState(wassigned);
  const [tkufa, ftkufa] = useState(wastkufa);
  const [filldate, ffilldate] = useState(wasfilldate);
  const [monthsno, fmonthsno] = useState(wasmonthsno);
  const [position, fposition] = useState(wasposition);

  const [nc1, setNc1] = useState(wasC1);
  const [nc2, setNc2] = useState(wasC2);
  const [nc3, setNc3] = useState(wasC3);
  const [nc4, setNc4] = useState(wasC4);
  const [nc5, setNc5] = useState(wasC5);
  const [nc6, setNc6] = useState(wasC6);
  const [nc7, setNc7] = useState(wasC7);
  const [nc8, setNc8] = useState(wasC8);
  const [nc9, setNc9] = useState(wasC9);

  const [nf, setNf] = useState(wasM1);
  const [np, setNp] = useState(wasM2);

  const [ntp, setNtp] = useState("");
  const [nfp, setNfp] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    switch (newGrade[1]) {
      case "fi":
        setNf(newGrade[0]);
        break;

      case "C1":
        setNc1(newGrade[0]);
        break;

      case "C2":
        setNc2(newGrade[0]);
        break;

      case "C3":
        setNc3(newGrade[0]);
        break;

      case "C4":
        setNc4(newGrade[0]);
        break;

      case "C5":
        setNc5(newGrade[0]);
        break;

      case "C6":
        setNc6(newGrade[0]);
        break;

      case "C7":
        setNc7(newGrade[0]);
        break;

      case "C8":
        setNc8(newGrade[0]);
        break;

      case "C9":
        setNc9(newGrade[0]);
        break;

      case "final":
        setNf(newGrade[0]);
        break;

      case "pot":
        setNp(newGrade[0]);
        break;

      default:
        console.log("אתחול או שינוי לא מוכר");
        break;
    }
  }, [newGrade]);

  async function send() {
    let tkufaintext = tkufa;
    let year = parseInt(tkufa.substring(2, tkufa.length)) - 1;
    let tkufanum = tkufaintext[0] === "1" ? year * 2 + 1 : year * 2 + 2;
    if (
      tkufaintext[1] !== "." ||
      tkufaintext[0] !== "1" ||
      tkufaintext[0] !== "2"
    )
      tkufanum = "חרא עליך";
    const newData = {
      CrewM: props.shel._id,
      gSigned: signed,
      Tkufa: tkufanum,
      gfillDate: filldate,
      MonthsNo: monthsno,
      Position: position,
      C1: nc1,
      C2: nc2,
      C3: nc3,
      C4: nc4,
      C5: nc5,
      C6: nc6,
      C7: nc7,
      C8: nc8,
      C9: nc9,
      M1: nf,
      M2: np,
      Tp: ntp,
      Fp: nfp,
    };

    try {
      await Axios.post(`${domain}/opinion/createOpinion`, newData);
      props.suc('חוו"ד ' + finilTkufa + " נשמר בהצלחה!");
      const closeModal = props.forClosing;
      closeModal();
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        } else
          setErrorMessage(
            "כנראה שהזנת תאריך או תקופה שלא בפורמט, נסה להזין בדומה לפוומט האוטומטי"
          );
      } else console.log(err);
    }
    return;
  }

  return (
    <div className="odiv">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h3 className="oh3">
        טופס מישוב והערכה לרמת הבקרה של {wascrewm && wascrewm.NickName} - תקופה{" "}
        {wastkufa}:
      </h3>
      <br />
      <br /> <br />
      <h4 className="oh4">פרטי הקצין המוערך</h4>
      <br />
      <DetailsTable
        wascrewm={wascrewm}
        wassigned={wassigned}
        signed={signed}
        fsigned={fsigned}
        wastkufa={wastkufa}
        tkufa={tkufa}
        ftkufa={ftkufa}
        wasfilldate={wasfilldate}
        filldate={filldate}
        ffilldate={ffilldate}
        wasmonthsno={wasmonthsno}
        monthsno={monthsno}
        fmonthsno={fmonthsno}
        wasposition={wasposition}
        position={position}
        fposition={fposition}
      />
      <br />
      <ClassesTable
        maslool={wascrewm && wascrewm.Maslool}
        sooghatsava={wascrewm && wascrewm.SoogHatsava}
        dereg={wascrewm && wascrewm.Dereg}
      />
      <br />
      <br /> <br />
      <h4 className="oh4">פרטי המעריך - מפקד גף</h4>
      <br />
      <PersonDetails
        ma={wasCommander && wasCommander.MA}
        darga={wasCommander && wasCommander.Rank}
        firstn={wasCommander && wasCommander.FirstName}
        lastn={wasCommander && wasCommander.LastName}
      />
      <br />
      <br /> <br /> <br />
      <h4 className="oh4">הערכת תכונות בקרה:</h4>
      <br />
      <GradesTable
        c1={nc1}
        c2={nc2}
        c3={nc3}
        c4={nc4}
        c5={nc5}
        c6={nc6}
        c7={nc7}
        c8={nc8}
        c9={nc9}
        allDATA={props.allDATA}
        setnewgrade={setNewGrade}
      />
      <br /> <br />
      <br />
      <h4 className="oh4">ציון מסכם:</h4>
      <br />
      <FgradeTable
        setnewgrade={setNewGrade}
        grade={nf}
        allDATA={props.allDATA}
      />
      <br />
      <br /> <br />
      <h4 className="oh4">פוטנציאל להובלה:</h4>
      <br />
      <PotentialTable
        grade={np}
        allDATA={props.allDATA}
        setnewgrade={setNewGrade}
      />
      <br />
      <br /> <br />
      <h4 className="oh4">הערכה מילולית מסכמת:</h4> <br />
      <h5 className="oh5">יעדים לתקופה הקרובה:</h5>
      <br />
      <div className="opd">
        <textarea
          className="opinionInputPara"
          type="text"
          placeholder={wasTp}
          value={ntp}
          onChange={(e) => setNtp(e.target.value)}
        />
      </div>
      <br />
      <h5 className="oh5">סיכום המשוב:</h5>
      <br />
      <div className="opd">
        <textarea
          className="opinionInputPara"
          type="text"
          placeholder={wasFp}
          value={nfp}
          onChange={(e) => setNfp(e.target.value)}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="OpinionSend">
        <button className="OpinionSendButton" onClick={send}>
          שלח {wastkufa}
        </button>
        <br /> <br />
        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            clear={() => setErrorMessage(null)}
          />
        )}
      </div>
      <br />
      <div className="OpinionClose">
        <button className="OpinionCloseButton" onClick={props.forClosing}>
          סגור מבלי לשמור
        </button>
      </div>
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
    </div>
  );
}

export default NewOpinion;
