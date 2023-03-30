import React, { useState } from "react";
import ShowMyOpinion from "./ShowMyOpinion";
import Modal from "react-modal";
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

export default function OpinionSumu(props) {
  let tkufaNum = props.opinion.Tkufa;
  let TkufaYear = tkufaNum % 2 === 0 ? tkufaNum / 2 : tkufaNum / 2 + 0.5;
  let tkufainYear = tkufaNum % 2 === 0 ? "2" : "1";
  let yearString = TkufaYear.toString();
  let countD = 0;
  for (let i = 0; i < 4 - yearString.length; i++) countD++;
  let addex = "";
  for (let i = 0; i < countD; i++) addex = addex + "0";
  let finilTkuda = tkufainYear + "." + addex + yearString;

  const [modalIsOpen, setIsOpen] = useState(false);

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
        <button className="OpinionOpen" onClick={openModal}>
          {finilTkuda}
        </button>
        <CSVLink data={[props.allDATA2[props.i]]} className="OpinionOpen">
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
          <ShowMyOpinion
            id={props.opinion._id}
            forClosing={closeModal}
            allDATA={props.allDATA}
          />
        </Modal>
      </div>
    </>
  );
}
