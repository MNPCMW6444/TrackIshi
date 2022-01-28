import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import NEWMOFA from "./NEWMOFA";
import VIEWMOFA from "./VIEWMOFA";
import Modal from "react-modal";
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

export default function MOFAS() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [successMessage, setSuccessMessage] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();

  useEffect(() => {
    const getAllmofas = async () => {
      const allmofasRes = await Axios.get(`${domain}/mofa/getallmy`);
      let sortingres = allmofasRes.data;
      setRes(sortingres);
      setReady(true);
    };
    getAllmofas();
  }, []);

  return ready ? (
    <div className="col">
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          setModalData("new");
          openModal();
        }}
        style={{ backgroundColor: "green", fontSize: 40 }}
      >
        הזן מופע הדרכה חדש
      </button>
      <br />
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          clear={() => setSuccessMessage(null)}
        />
      )}{" "}
      <br />
      <h2 style={{ fontSize: 45 }}>רשימת כל מופעי ההדרכה שלי:</h2>
      {res.map((mofa) => (
        <>
          <button
            onClick={() => {
              setModalData(mofa);
              openModal();
            }}
            style={{ backgroundColor: mofa.isTest ? "blue" : "", fontSize: 33 }}
          >
            {(mofa.Emda ? mofa.Emda : "*עמדה חסרה*") +
              " " +
              (mofa.No ? mofa.No : "*מספר חסר*")}
          </button>
          <br />
          <br />
        </>
      ))}
      {!res[0] && <h3>-אין לי מופעי הדרכה-</h3>} <br />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalData === "new" ? (
          <NEWMOFA setDidupdated={closeModal} suc={setSuccessMessage} />
        ) : (
          <VIEWMOFA data={modalData}></VIEWMOFA>
        )}
      </Modal>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  ) : (
    <div>
      טוען את כל מופעי ההדרכה שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז
      ייתכן שיש תקלה בשרת או בתקשורת איתו) <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
