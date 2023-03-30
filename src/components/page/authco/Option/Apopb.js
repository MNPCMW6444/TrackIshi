import React, { useState } from "react";
import ShowMyOpinion from "../../global/Opinions/ShowMyOpinion";
import Modal from "react-modal";
import Axios from "axios";
import domain from "../../../../util/domain";

import SuccessMessage from "../../../messages/SuccessMessage";

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

export default function Apopb(props) {
  const [successMessage, setSuccessMessage] = useState(null);

  let tkufaNum = props.is.Tkufa;
  let TkufaYear = tkufaNum % 2 === 0 ? tkufaNum / 2 : tkufaNum / 2 + 0.5;
  let tkufainYear = tkufaNum % 2 === 0 ? "2" : "1";
  let yearString = TkufaYear.toString();
  let countD = 0;
  for (let i = 0; i < 4 - yearString.length; i++) countD++;
  let addex = "";
  for (let i = 0; i < countD; i++) addex = addex + "0";
  let finilTkufa = tkufainYear + "." + addex + yearString;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [didheread, setDidheread] = useState(false);

  const [text, settext] = useState(null);

  function openModal() {
    setDidheread(true);
    setIsOpen(true);
  }

  function appit() {
    if (didheread) {
      settext("מאשר...");
      approve(props.is._id);
    } else settext('נדרש לקרוא את החוו"ד על מנת לאשר אותו');
  }

  async function approve(id) {
    let res = await Axios.get(`${domain}/opinion/approve/${id}`);
    settext(res.data.answer ? "אושר!" : "אירעה שגיאה במהלך האישור");
    if (res.data.answer)
      setSuccessMessage(
        'חוו"ד ' +
          finilTkufa +
          " של " +
          props.is.CrewM.NickName +
          " אושר בהצלחה ולא יופיע יותר ברשימה זו!"
      );
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
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
      <button className="OpinionOpen" style={{ backgroundColor: "black" }}>
        {'חוו"ד ' + finilTkufa + " של " + props.is.CrewM.NickName + ": "}
      </button>{" "}
      <button className="OpinionOpen" onClick={openModal}>
        {"קרא"}
      </button>{" "}
      <button
        className="OpinionOpen"
        style={{ backgroundColor: didheread ? "green" : "gray" }}
        onClick={appit}
      >
        {"אשר"}
      </button>
      <button
        className="OpinionOpen"
        style={{ backgroundColor: "unset", color: "red" }}
      >
        {text}
      </button>{" "}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <ShowMyOpinion id={props.is._id} forClosing={closeModal} />
      </Modal>
    </div>
  );
}
