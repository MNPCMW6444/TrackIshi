import Axios from "axios";
import React, { useState, useEffect } from "react";
import domain from "../../../../util/domain";
import DetailsTable from "./Edit/DetailsTable";
import ClassesTable from "./Edit/ClassesTable";
import PersonDetails from "./Edit/PersonDetails";
import GradesTable from "./Edit/GradesTable";
import FgradeTable from "./Edit/FgradeTable";
import PotentialTable from "./Edit/PotentialTable";
import Paragraph from "../usefull/Paragraph";
import ErrorMessage from "../../../messages/ErrorMessage";

function EditOpinion(props) {
  const [newGrade, setNewGrade] = useState([4, "nelson"]);

  const OpinionRes = props.allOpinion;
  let wascrewm = OpinionRes.CrewM;

  let siginit = OpinionRes.Signed ? "כן" : "לא";
  let wasSigned = siginit;

  //TKUFA
  let tkufaNum = OpinionRes.Tkufa;
  let TkufaYear = tkufaNum % 2 === 0 ? tkufaNum / 2 : tkufaNum / 2 + 0.5;
  let tkufainYear = tkufaNum % 2 === 0 ? "2" : "1";
  let yearString = TkufaYear.toString();
  let countD = 0;
  for (let i = 0; i < 4 - yearString.length; i++) countD++;
  let addex = "";
  for (let i = 0; i < countD; i++) addex = addex + "0";
  let finilTkufa = tkufainYear + "." + addex + yearString;
  let wasTkufa = finilTkufa;

  //FILLDATE
  let finil = "DIDNOTDOWANAD";
  finil = OpinionRes.fillDate.substring(0, 10);
  const month = finil.substring(5, 7);
  const day = finil.substring(8, 10);
  const year = finil.substring(0, 4);
  finil = day + "/" + month + "/" + year;
  let wasFfilldate = finil;

  let wasMonthsno = OpinionRes.MonthsNo;

  let wasPosition = OpinionRes.Position;

  let wasC1 = OpinionRes.C1;

  let wasC2 = OpinionRes.C2;

  let wasC3 = OpinionRes.C3;

  let wasC4 = OpinionRes.C4;

  let wasCommander = OpinionRes.Commander;

  let wasAuthorizer = OpinionRes.Authorizer;

  let wasC5 = OpinionRes.C5;

  let wasC6 = OpinionRes.C6;

  let wasC7 = OpinionRes.C7;

  let wasC8 = OpinionRes.C8;

  let wasC9 = OpinionRes.C9;

  let wasM1 = OpinionRes.M1;

  let wasM2 = OpinionRes.M2;

  //PARAGRAPHS
  let tparr = OpinionRes.Tp;
  let fparr = OpinionRes.Fp;
  let tpp = "";
  let fpp = "";
  for (let i = 0; i < tparr.length; i++) tpp = tpp + tparr[i] + "\n";

  for (let i = 0; i < fparr.length; i++) fpp = fpp + fparr[i] + "\n";

  let wasTp = tpp;
  let wasFp = fpp;

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

      default:
        console.log("אתחול או שינוי לא מוכר");
        break;
    }
  }, [newGrade]);

  async function send() {
    const newData = {
      o1: nc1,
      o2: nc2,
      o3: nc3,
      o4: nc4,
      o5: nc5,
      o6: nc6,
      o7: nc7,
      o8: nc8,
      o9: nc9,
      fn: nf,
    };

    try {
      await Axios.put(
        `${domain}/opinion/editOpinion/${OpinionRes._id}`,
        newData
      );
      props.suc('חוו"ד ' + finilTkufa + " עדוכן בהצלחה!");
      const closeModal = props.forClosing;
      closeModal();
    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
        }
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
        {wasTkufa}:
      </h3>
      <br />
      <br /> <br />
      <h4 className="oh4">פרטי הקצין המוערך</h4>
      <br />
      <DetailsTable
        crewm={wascrewm}
        signed={wasSigned}
        tkufa={wasTkufa}
        filldate={wasFfilldate}
        monthsno={wasMonthsno}
        position={wasPosition}
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
      <h4 className="oh4">פרטי המאשר - מפקד יחידה</h4>
      <br />
      <h5 className="oh5">(ומעריך בתנאי שהבקר מוסמך...)</h5>
      <br />
      <PersonDetails
        ma={wasAuthorizer && wasAuthorizer.MA}
        darga={wasAuthorizer && wasAuthorizer.Rank}
        firstn={wasAuthorizer && wasAuthorizer.FirstName}
        lastn={wasAuthorizer && wasAuthorizer.LastName}
      />
      <br />
      <br /> <br />
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
      <PotentialTable grade={wasM2} />
      <br />
      <br /> <br />
      <h4 className="oh4">הערכה מילולית מסכמת:</h4> <br />
      <h5 className="oh5">יעדים לתקופה הקרובה:</h5>
      <br />
      <div className="opd">
        <Paragraph text={wasTp} />
      </div>
      <br />
      <h5 className="oh5">סיכום המשוב:</h5>
      <br />
      <div className="opd">
        <Paragraph text={wasFp} />
      </div>
      <br />
      <br />
      <br />
      <div className="OpinionSend">
        <button className="OpinionSendButton" onClick={send}>
          שלח {wasTkufa}
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

export default EditOpinion;
