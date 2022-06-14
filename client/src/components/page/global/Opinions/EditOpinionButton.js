import EditOpinion from "./EditOpinion";
import ShowMyOpinion from "./ShowMyOpinion";
import Modal from "react-modal";
import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import SuccessMessage from "../../../messages/SuccessMessage";
import { CSVLink } from "react-csv";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "25%",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    maxHeight: "100vh",
  },
};

export default function EditOpinionButton(props) {
  const [res, setRes] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenRO, setIsOpenRO] = useState(false);

  const [successMessage, setSuccessMessage] = useState(null);

  let tkufaNum = props.allDATA.Tkufa;
  let TkufaYear = tkufaNum % 2 === 0 ? tkufaNum / 2 : tkufaNum / 2 + 0.5;
  let tkufainYear = tkufaNum % 2 === 0 ? "2" : "1";
  let yearString = TkufaYear.toString();
  let countD = 0;
  for (let i = 0; i < 4 - yearString.length; i++) countD++;
  let addex = "";
  for (let i = 0; i < countD; i++) addex = addex + "0";
  let finilTkuda = tkufainYear + "." + addex + yearString;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function openModalRO() {
    setIsOpenRO(true);
  }

  function afterOpenModalRO() {}

  function closeModalRO() {
    setIsOpenRO(false);
  }

  let a;
  if (props.allDATA) a = JSON.parse(JSON.stringify(props.allDATA));

  if (a && a.CrewM) {
    if (a && !a.מספר_אישי) {
      a.מספר_אישי = a && a.CrewM && a.CrewM.MA;
    }
    if (a && !a.דרגה) {
      a.דרגה = a && a.CrewM && a.CrewM.Rank;
    }
    if (a && !a.שם_פרטי) {
      a.שם_פרטי = a && a.CrewM && a.CrewM.FirstName;
    }
    if (a && !a.שם_משפחה) {
      a.שם_משפחה = a && a.CrewM && a.CrewM.LastName;
      delete a.CrewM;
    }
    if (a && !a.נחתם) {
      a.נחתם = a && a.Signed ? "כן" : "לא";
      delete a.Signed;
    }
    if (a && !a.אושר_מפקד_יחידה) {
      a.אושר_מפקד_יחידה = a && a.wasMyAuthApped ? "כן" : "לא";
      delete a.wasMyAuthApped;
    }
    if (a && !a.תקופה) {
      let tkufaNum = a.Tkufa;
      let TkufaYear = tkufaNum % 2 === 0 ? tkufaNum / 2 : tkufaNum / 2 + 0.5;
      let tkufainYear = tkufaNum % 2 === 0 ? "2" : "1";
      let yearString = TkufaYear.toString();
      let countD = 0;
      for (let i = 0; i < 4 - yearString.length; i++) countD++;
      let addex = "";
      for (let i = 0; i < countD; i++) addex = addex + "0";
      let finilTkufa = tkufainYear + "." + addex + yearString;
      a.תקופה = finilTkufa;
      delete a.Tkufa;
    }
    if (a && !a.תאריך_מילוי) {
      let finil = "DIDNOTDOWANAD";
      finil = a && a.fillDate.substring(0, 10);
      const month = finil.substring(5, 7);
      const day = finil.substring(8, 10);
      const year = finil.substring(0, 4);
      finil = day + "/" + month + "/" + year;
      a.תאריך_מילוי = finil;
      delete a.fillDate;
    }
    if (a && !a.למידה) {
      a.למידה = a && a.C1;
      delete a.C1;
    }
    if (a && !a.תכנון) {
      a.תכנון = a && a.C2;
      delete a.C2;
    }
    if (a && !a.תפיסה_מרחבית) {
      a.תפיסה_מרחבית = a && a.C3;
      delete a.C3;
    }
    if (a && !a.חלקש) {
      a.חלקש = a && a.C4;
      delete a.C4;
    }
    if (a && !a.תקשורת) {
      a.תקשורת = a && a.C5;
      delete a.C5;
    }
    if (a && !a.עומס) {
      a.עומס = a && a.C6;
      delete a.C6;
    }
    if (a && !a.קבלת_החלטות) {
      a.קבלת_החלטות = a && a.C7;
      delete a.C7;
    }
    if (a && !a.הפעלה) {
      a.הפעלה = a && a.C8;
      delete a.C8;
    }
    if (a && !a.תחקור) {
      a.תחקור = a && a.C9;
      delete a.C9;
    }
    if (a && !a.ציון_מסכם) {
      a.ציון_מסכם = a && a.M1;
      delete a.M1;
    }
    if (a && !a.יעדים) {
      a.יעדים = a && a.Tp;
      delete a.Tp;
    }
    if (a && !a.סיכום) {
      a.סיכום = a && a.Fp;
      delete a.Fp;
    }
    if (a && !a.ממשב_מספר_אישי) {
      a.ממשב_מספר_אישי = a && a.wasMyEvaMA;
      delete a.wasMyEvaMA;
    }
    if (a && !a.ממשב_דרגה) {
      a.ממשב_דרגה = a && a.wasMyEvaRank;
      delete a.wasMyEvaRank;
    }
    if (a && !a.ממשב_שם_פרטי) {
      a.ממשב_שם_פרטי = a && a.wasMyEvaFirstName;
      delete a.wasMyEvaFirstName;
    }
    if (a && !a.ממשב_שם_משפחה) {
      a.ממשב_שם_משפחה = a && a.wasMyEvaLastName;
      delete a.wasMyEvaLastName;
    }
    delete a._id;
    delete a.MonthsNo;
    delete a.Position;
    delete a.wasRank;
    delete a.wasDereg;
    delete a.wasMaslool;
    delete a.wasSoogHatsava;
    delete a.wasUnit;
    delete a.wasMyAuthMA;
    delete a.wasMyAuthRank;
    delete a.wasMyAuthLastName;
    delete a.wasMyAuthFirstName;
    delete a.M2;
    delete a.createdAt;
    delete a.updatedAt;
    delete a.__v;
    delete a.Commander;
    delete a.Authorizer;
  }

  useEffect(() => {
    const getAllOpinions = async () => {
      const allOpinionsRes = await Axios.get(
        `${domain}/opinion/getallmy2/${props.allDATA.CrewM.MA}`
      );
      let sortingres = allOpinionsRes.data;
      sortingres = sortingres.sort((s1, s2) => {
        return s2.Tkufa - s1.Tkufa;
      });

      setRes(sortingres);
    };
    getAllOpinions();
  }, []);

  return (
    <>
      <div>
        <button
          className="OpinionOpen"
          style={props.style}
          onClick={openModalRO}
        >
          {finilTkuda}
        </button>
        <button
          className="plusrpencil"
          style={{ fontSize: "24pt" }}
          onClick={openModal}
        >
          ✏️
        </button>
        <CSVLink onClick={openModal} data={[a]} className="OpinionOpen">
          ⬇️
        </CSVLink>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {props.isGray === "gray" ? (
            <ShowMyOpinion
              id={props.allDATA._id}
              allDATA={props.allDATA}
              forClosing={closeModal}
              suc={setSuccessMessage}
              setDidupdated={props.setDidupdated}
              isGray={props.isGray}
            />
          ) : (
            <EditOpinion
              allOpinion={props.allDATA}
              forClosing={closeModal}
              suc={setSuccessMessage}
              setDidupdated={props.setDidupdated}
            />
          )}
        </Modal>
      </div>
      <div>
        <Modal
          isOpen={modalIsOpenRO}
          onAfterOpen={afterOpenModalRO}
          onRequestClose={closeModalRO}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ShowMyOpinion
            id={props.allDATA._id}
            forClosing={closeModalRO}
            allDATA={res}
          />
        </Modal>
      </div>

      {successMessage && (
        <>
          {" "}
          <br />
          <SuccessMessage
            message={successMessage}
            clear={() => setSuccessMessage(null)}
          />
        </>
      )}
    </>
  );
}
