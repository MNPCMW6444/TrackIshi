import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import Modal from "react-modal";
import HisMOFAS from "../../screw/Option/MOFAS";

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

export default function Opinions(props) {
  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();
  const [shels, setshels] = useState();
  const [shelmi, setshelmi] = useState();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    const getMyPeople = async () => {
      const allpeopleres = await Axios.get(`${domain}/user/getmypeople`);
      setRes(allpeopleres.data);
      let shelst = new Array(...allpeopleres.data);
      setshels(shelst);
      if (!ready) setReady(true);
    };
    if (!ready) getMyPeople();
  }, []);

  return ready ? (
    <div className="col">
      <h2>רשימת האנשים שלי:</h2>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <HisMOFAS shel={shelmi} />
      </Modal>
      {res.map((screw) => (
        <>
          <button
            className={"OpinionOpen"}
            onClick={() => {
              openModal();
              setshelmi(screw.MA);
            }}
          >
            {screw.NickName}
          </button>{" "}
          <br />
          <br />
        </>
      ))}
      {!res[0] && <h3>-אין לי אנשים-</h3>}
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
      <br />
      <br />
      <br />
      <br />
    </div>
  ) : (
    <div>
      טוען את כל האנשים שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז ייתכן
      שיש תקלה בשרת או בתקשורת איתו)
    </div>
  );
}
