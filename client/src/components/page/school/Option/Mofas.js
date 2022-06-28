import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import Modal from "react-modal";
import HisMOFAS from "../../screw/Option/MOFAS";
import { CSVLink } from "react-csv";
import emdalist from "../../../../util/emdalist";

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

export default function Mofas(props) {
  const [mofas, setmofas] = useState();
  const [people, setpeople] = useState();
  const [sdarot, setsdarot] = useState();

  useEffect(() => {
    async function getit() {
      let rp = (await Axios.get(`${domain}/user/getmypeopleM`)).data;
      setpeople(rp);
    }
    getit();
  }, []);

  useEffect(() => {
    async function getit() {
      let rm = (await Axios.get(`${domain}/mofa/getallmyn`)).data;
      let s = new Array();

      for (let i = 0; i < rm.length; i++)
        for (let j = 0; j < rm.length; j++) setmofas(rm);
    }
    getit();
  }, []);

  return (
    <div>
      <br />
      {people && people.length > 0 && mofas && mofas.length > 0 ? (
        <table className="xotable">
          {mofas.map((mofa) => (
            <tr>
              <td>{mofa._id}</td>
            </tr>
          ))}
          {people.map((person) => (
            <tr>
              <td>{person.NickName}</td>
            </tr>
          ))}
        </table>
      ) : (
        <h2>טוען...</h2>
      )}
      <br />
    </div>
  );
}
