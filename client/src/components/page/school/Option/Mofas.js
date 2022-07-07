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
  const [l, setl] = useState(false);
  const [reload, setreload] = useState(false);
  const [allowed, setallowed] = useState(false);

  const [mofas, setmofas] = useState();
  const [people, setpeople] = useState();
  const [sdarot, setsdarot] = useState();
  const [sdarotavgsperppl, setsdarotavgsperppl] = useState();
  const [filteredmofas, setfilteredmofas] = useState();
  const [filteredpeople, setfilteredpeople] = useState();
  const [filteredsdarot, setfilteredsdarot] = useState();
  const [filteredsdarotavgsperppl, setfilteredsdarotavgsperppl] = useState();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [shel, setShel] = useState(false);

  useEffect(() => {
    async function getit() {
      setl(true);
      let ppl = (await Axios.get(`${domain}/user/getmypeopleM`)).data;
      setpeople(ppl);
      setfilteredpeople(ppl);
      let mfs = (await Axios.get(`${domain}/mofa/getallmyn`)).data;
      setl(false);
      setmofas(mfs);
      setfilteredmofas(mfs);
      let sdrt = new Array();
      for (let i = 0; i < mfs.length; i++) {
        let notthere = true;
        for (let j = 0; j < sdrt.length; j++)
          if (sdrt[j] == mfs[i].Emda) notthere = false;
        if (notthere) sdrt.push(mfs[i].Emda);
      }
      setsdarot(sdrt);
      setfilteredsdarot(sdrt);

      let sdtavgsperppl = new Array();
      for (let i = 0; i < sdrt.length; i++) {
        let avgofperson = new Array();
        for (let k = 0; k < ppl.length; k++) {
          let avg = 0;
          let count = 0;
          for (let j = 0; j < mfs.length; j++) {
            if (mfs[j].Emda === sdrt[i] && mfs[j].sMA === ppl[k].MA) {
              avg += mfs[j].M1;
              count++;
            }
          }
          avg /= count;
          avgofperson.push(avg);
        }
        sdtavgsperppl.push(avgofperson);
      }
      setfilteredsdarotavgsperppl(sdtavgsperppl);
      setsdarotavgsperppl(sdtavgsperppl);
    }
    getit();
    setallowed(true);
  }, [reload]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <br />
        {!l && (
          <button
            onClick={() => {
              setallowed(false);
              setreload(Math.random());
            }}
          >
            רענן
          </button>
        )}
      </div>

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
        sdarot.length > 0 &&
        !l && (
          <Filters
            allowed={allowed}
            mofas={mofas}
            people={people}
            sdarot={sdarot}
            sdarotavgsperppl={sdarotavgsperppl}
            filteredmofas={filteredmofas}
            filteredpeople={filteredpeople}
            filteredsdarot={filteredsdarot}
            filteredsdarotavgsperppl={filteredsdarotavgsperppl}
            setfilteredmofas={setfilteredmofas}
            setfilteredpeople={setfilteredpeople}
            setfilteredsdarot={setfilteredsdarot}
            setfilteredsdarotavgsperppl={setfilteredsdarotavgsperppl}
          />
        )}

      {filteredpeople &&
      filteredpeople.length &&
      filteredpeople.length > 0 &&
      filteredsdarotavgsperppl &&
      filteredsdarotavgsperppl.length &&
      filteredsdarotavgsperppl.length > 0 &&
      filteredmofas &&
      filteredmofas.length &&
      filteredmofas.length > 0 &&
      filteredsdarot &&
      filteredsdarot.length &&
      filteredsdarot.length > 0 &&
      !l ? (
        <>
          <br />

          {allowed ? (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <HisMOFAS shel={shel} />
            </Modal>
          ) : (
            <div>טוען סננים</div>
          )}
          <br />
          <table className="xotable">
            <tbody>
              <tr>
                <th className="oth">איש צוות</th>
                {filteredsdarot &&
                  filteredsdarot.length > 0 &&
                  filteredsdarot.map((sidra, i) => (
                    <th key={i + 1000} className="oth">
                      {sidra}
                    </th>
                  ))}
              </tr>
              {filteredpeople.map((person, i) => (
                <tr>
                  <td
                    key={i + 2000}
                    className="otd"
                    onClick={() => {
                      openModal();
                      setShel(person.MA);
                    }}
                  >
                    {person.NickName}
                  </td>
                  {filteredsdarotavgsperppl[i].map((avg, j) => (
                    <td key={j + 3000} className="otd">
                      {avg || "-"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h2>
          {l ? (
            <div style={{ display: "inine-block" }}>
              <span>בודק אילו מופעי ההדרכה מוזנים לאנשייך... </span>
              <div className="loader"></div>
            </div>
          ) : (
            "אין לך אנשים, לאנשיך אין מופעי הדרכה, סיננת את כולם או שיש תקלה תקשורת"
          )}
        </h2>
      )}
      <br />
    </div>
  );
}
