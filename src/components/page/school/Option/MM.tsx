import { useState, useEffect } from "react";
import Axios from "axios";
import domain from "../../../../util/domain";
import MMform from "../../global/mm/MMform.tsx";
import Modal from "react-modal";
import Grid from "@mui/material/Grid";
import axios from "axios";

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

export default function MM() {
  const [res, setRes] = useState();
  const [resmm, setResmm] = useState();
  const [chosen, setChosen] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let allpeopleres;
    const getMyPeople = async () => {
      allpeopleres = await Axios.get(`${domain}/user/getmypeopleM`);
      setRes(allpeopleres.data);
    };
    const getTheirMMs = async () => {
      const mmres = [];
      allpeopleres.data.forEach(async (person) =>
        mmres.push((await axios.get(`${domain}/mm/allMMs/${person._id}`)).data)
      );
      setResmm(mmres);
    };
    getMyPeople().then(() => getTheirMMs());
  }, []);

  return (
    <div>
      <br />
      {res
        ? res.map((person, i) => (
            <button
              key={i}
              className={"OpinionOpen"}
              onClick={() => {
                openModal();
                setChosen(i);
              }}
            >
              {person.NickName}
            </button>
          ))
        : "טוען..."}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <Grid container></Grid>
          {resmm &&
            resmm[chosen] &&
            resmm[chosen].map((mm) => <div>{mm.what}</div>)}
          <MMform data={{}} closeForm={closeModal} />
        </div>
      </Modal>
    </div>
  );
}
