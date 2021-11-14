import NewOpinion from "./NewOpinion";
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

export default function NewOpinionButton(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const [successMessage, setSuccessMessage] = useState(null);

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
        <button
          className="OpinionOpen"
          style={{ backgroundColor: "green" }}
          onClick={openModal}
        >
          {'הזן חוו"ד חדש'}
        </button>
      </div>
      <br />
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <NewOpinion forClosing={closeModal} suc={setSuccessMessage} />
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
