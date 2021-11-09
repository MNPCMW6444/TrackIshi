import Axios from "axios";
import React, { useState } from "react";
import domain from "../../../../util/domain";
import DetailsTable from "./Edit/DetailsTable";
import ClassesTable from "./Edit/ClassesTable";
import PersonDetails from "./Edit/PersonDetails";
import GradesTable from "./Edit/GradesTable";
import FgradeTable from "./Edit/FgradeTable";
import PotentialTable from "./Edit/PotentialTable";
import Paragraph from "../usefull/Paragraph";

function EditOpinion(props) {
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
  const day = finil.substring(5, 7);
  const month = finil.substring(8, 10);
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
        c1={wasC1}
        c2={wasC2}
        c3={wasC3}
        c4={wasC4}
        c5={wasC5}
        c6={wasC6}
        c7={wasC7}
        c8={wasC8}
        c9={wasC9}
        allDATA={props.allDATA}
      />
      <br /> <br />
      <br />
      <h4 className="oh4">ציון מסכם:</h4>
      <br />
      <FgradeTable grade={wasM1} allDATA={props.allDATA} />
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
      <div className="OpinionClose">
        <button className="OpinionCloseButton" onClick={props.forClosing}>
          סגור את חוו"ד {wasTkufa}
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
      <br />
    </div>
  );
}

export default EditOpinion;
