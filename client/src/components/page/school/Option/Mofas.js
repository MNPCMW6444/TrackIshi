import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import Modal from "react-modal";
import HisMOFAS from "../../screw/Option/MOFAS";
import { CSVLink } from "react-csv";
import emdalist from "../../../../util/emdalist";
import Filters from "./Filters";

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
  const [sdarotavgsperppl, setsdarotavgsperppl] = useState();

  useEffect(() => {
    async function getit() {
      let ppl = (await Axios.get(`${domain}/user/getmypeopleM`)).data;
      setpeople(ppl);

      let mofas = (await Axios.get(`${domain}/mofa/getallmyn`)).data;
      setmofas(mofas);
    }
    getit();
  }, []);

  useEffect(() => {
    if (
      people &&
      people.length &&
      people.length > 0 &&
      mofas &&
      mofas.length &&
      mofas.length > 0
    ) {
      let sdrt = new Array();
      for (let i = 0; i < mofas.length; i++) {
        let notthere = true;
        for (let j = 0; j < sdrt.length; j++)
          if (sdrt[j] == mofas[i].Emda) notthere = false;
        if (notthere) sdrt.push(mofas[i].Emda);
      }
      setsdarot(sdrt);
      let sdtavgsperppl = new Array();
      for (let i = 0; i < sdrt.length; i++) {
        let avgofperson = new Array();
        for (let k = 0; k < people.length; k++) {
          let avg = 0;
          let count = 0;
          for (let j = 0; j < mofas.length; j++) {
            if (mofas[j].Emda === sdrt[i] && mofas[j].sMA === people[k].MA) {
              avg += mofas[j].M1;
              count++;
            }
          }
          avg /= count;
          avgofperson.push(avg);
        }
        sdtavgsperppl.push(avgofperson);
      }
      setsdarotavgsperppl(sdtavgsperppl);
    }
  }, [mofas, people]);

  return (
    <div>
      <br />
      <Filters
        mofas={mofas}
        people={people}
        sdarot={sdarot}
        sdarotavgsperppl={sdarotavgsperppl}
        setmofas={setmofas}
        setpeople={setpeople}
        setsdarot={setsdarot}
        setsdarotavgsperppl={setsdarotavgsperppl}
      />
      <br />
      {people &&
      people.length &&
      people.length > 0 &&
      sdarotavgsperppl &&
      sdarotavgsperppl.length &&
      sdarotavgsperppl.length > 0 &&
      mofas &&
      mofas.length &&
      mofas.length > 0 &&
      sdarot &&
      sdarot.length &&
      sdarot.length > 0 ? (
        <table className="xotable">
          <tr>
            <th className="oth">איש צוות</th>
            {sdarot &&
              sdarot.length > 0 &&
              sdarot.map((sidra) => <th className="oth">{sidra}</th>)}
          </tr>
          {people.map((person, i) => (
            <tr>
              <td className="otd">{person.NickName}</td>
              {sdarotavgsperppl[i].map((avg) => (
                <td className="otd">{avg || "-"}</td>
              ))}
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
