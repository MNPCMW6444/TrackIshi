import EditOpinion from "./EditOpinion";
import ShowMyOpinion from "./ShowMyOpinion";
import Modal from "react-modal";
import React, { useState } from "react";
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

export default function EditOpinionButton(props) {
  Modal.setAppElement(document.getElementById("root"));

  const [modalIsOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <div>
        <button className="OpinionOpen" onClick={openModal} style={props.style}>
          {finilTkuda}
        </button>
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
              /* suc={setSuccessMessage}
              setDidupdated={props.setDidupdated} */
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
