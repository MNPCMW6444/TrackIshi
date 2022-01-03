import React, { useState } from "react";
import Modal from "react-modal";
import UpdateOpinions from "../Opinions/UpdateOpinions";

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

export default function OpenOpinion(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  let gray = "";
  let isauth = props.imauth === "auth";

  if (isauth) {
    if (!(props.shel.Dereg === "c" || props.shel.Dereg === "d")) {
      gray = "gray";
      customStyles.content.backgroundColor = "#DDDDDD";
    } else customStyles.content.backgroundColor = "#FFFFFF";
  } else {
    if (props.shel.Dereg === "c" || props.shel.Dereg === "d") {
      gray = "gray";
      customStyles.content.backgroundColor = "#DDDDDD";
    } else customStyles.content.backgroundColor = "#FFFFFF";
  }

  return (
    <>
      <div>
        <button className={"OpinionOpen" + gray} onClick={openModal}>
          {props.shel.NickName}
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
          <UpdateOpinions shel={props.shel} isGray={gray} />
        </Modal>
      </div>
    </>
  );
}
