import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import Modal from "react-modal";
import HisMOFAS from "../../screw/Option/MOFAS";
import { CSVLink } from "react-csv";
import emdalist from "../../../../util/emdalist";
import Filters from "./Filters";
import { Table, TableBody } from "@mui/material";

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
  const [threedots, iii] = useState();
  let i = 0;
  let ii = [".", "..", "..."];
  const hh = () => {
    if (i < 3) i++;
    else i = 0;
    setTimeout(hh, 5000);
    iii(ii[i]);
    console.log(i);
  };
  /* setTimeout(hh,5000); */
  const [l, setl] = useState(false);
  const [reload, setreload] = useState(false);
  const [allowed, setallowed] = useState(false);
  const [new2, setnew] = useState(false);
  const [people2, setpeople2] = useState(false);

  const [mofas, setmofas] = useState();
  const [people, setpeople] = useState();
  const [sdarot, setsdarot] = useState();
  const [sdarotavgsperppl, setsdarotavgsperppl] = useState();
  const [filteredmofas, setfilteredmofas] = useState();
  const [filteredpeople, setfilteredpeople] = useState();
  const [filteredsdarot, setfilteredsdarot] = useState();
  const [filteredsdarotavgsperppl, setfilteredsdarotavgsperppl] = useState();
  const [indextoremove, setindextoremove] = useState();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [shel, setShel] = useState(false);
  const [h, seth] = useState(false);

  useEffect(() => {
    async function getit() {
      setl(true);
      setnew(false);
      let ppl = (await Axios.get(`${domain}/user/getmypeopleM`)).data;
      setpeople(ppl);
      setpeople2(ppl);
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
          avgofperson.push(Math.round(avg * 100) / 100);
        }
        sdtavgsperppl.push(avgofperson);
      }

      sdtavgsperppl =
        sdtavgsperppl &&
        sdtavgsperppl[0] &&
        sdtavgsperppl[0].map((_, colIndex) =>
          sdtavgsperppl.map((row) => row[colIndex])
        );
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

  function checkIfToRemove(index) {
    for (let i = 0; indextoremove && i < indextoremove.length; i++) {
      if (indextoremove[i] === index) return true;
    }
    return false;
  }

  return (
    <div>
      {allowed ? (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <HisMOFAS shel={shel} h={h} />
        </Modal>
      ) : (
        <div>טוען סננים</div>
      )}
      <br />
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
            indextoremove={indextoremove}
            setfilteredmofas={setfilteredmofas}
            setfilteredpeople={setfilteredpeople}
            setfilteredsdarot={setfilteredsdarot}
            setfilteredsdarotavgsperppl={setfilteredsdarotavgsperppl}
            setindextoremove={setindextoremove}
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

          <Table className="xotable">
            <TableBody>
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
              {filteredpeople &&
                typeof filteredpeople.map === "function" &&
                filteredpeople.length > 0 &&
                filteredpeople.map((person, i) => (
                  <tr>
                    <td
                      key={i + 2000}
                      className="otd"
                      onClick={() => {
                        openModal();
                        setShel(person.MA);
                        seth(person);
                      }}
                    >
                      {person.NickName}
                    </td>
                    {filteredsdarotavgsperppl &&
                      filteredsdarotavgsperppl.length > 0 &&
                      /* filteredsdarotavgsperppl[i] &&
                      filteredsdarotavgsperppl[i].length > 0 && */
                      filteredsdarotavgsperppl[i] &&
                      filteredsdarotavgsperppl[i].map((avg, j) => (
                        <td
                          style={{ display: checkIfToRemove(j) && "none" }}
                          key={j + 3000}
                          className="otd"
                        >
                          {avg || "-"}
                        </td>
                      ))}
                  </tr>
                ))}
            </TableBody>
          </Table>
        </>
      ) : (
        <>
          {l ? (
            <div style={{ display: "inine-block" }}>
              <span>
                <h2>בודק אילו מופעי הדרכה מוזנים לאנשיך... {threedots}</h2>
              </span>
              <div className="loader"></div>
            </div>
          ) : (
            /* "אין לך אנשים, לאנשיך אין מופעי הדרכה, סיננת את כולם או שיש תקלה תקשורת" */
            <>
              <div style={{ textAlign: "center" }}>
                <br />
                {!l && (
                  <button
                    onClick={() => {
                      setnew(true);
                    }}
                  >
                    אין לאנשיך מופעי הדרכה, לחץ כאן להזנת מופע הדרכה לאיש צוות
                  </button>
                )}
              </div>

              <div style={{ textAlign: "center" }}>
                <br />
                {!l && new2 && (
                  <div>
                    <Table className="otable">
                      <TableBody>
                        {people2.map((p, i) => (
                          <tr className="otr" key={i * 15}>
                            <td
                              className="otd"
                              key={i * 114}
                              onClick={() => {
                                openModal();
                                setShel(p.MA);
                                seth(p);
                              }}
                            >
                              {p.NickName}
                            </td>
                          </tr>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </>
          )}
        </>
      )}
      <br />
    </div>
  );
}
