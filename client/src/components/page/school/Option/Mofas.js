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
  const [res, setres] = useState();

  useEffect(() => {
    async function getit() {
      let r = (await Axios.get(`${domain}/mofa/getallmyn`)).data;
      r.filter((mof) => mof.MyCommander === "q3");
      setres(r);
    }
    getit();
  }, []);

  return (
    <div>
      <br />
      <table className="xotable">
        {res && res.length > 0 ? (
          <tr>
            {res.map((mofa) => (
              <tr>
                <td>{mofa._id}</td>
              </tr>
            ))}
          </tr>
        ) : (
          <tr className="xotr">
            <th className="xoth" style={{ width: "80%" }}>
              טוען...
            </th>
          </tr>
        )}
      </table>
      <br />
    </div>
  );
}
