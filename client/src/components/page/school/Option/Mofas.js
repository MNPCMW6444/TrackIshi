import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import Modal from "react-modal";
import HisMOFAS from "../../screw/Option/MOFAS";
import { CSVLink } from "react-csv";
import { MultiSelect } from "react-multi-select-component";
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

function groupBy(sortingres, property) {
  let un = sortingres.reduce(function (memo, x) {
    if (!memo[x[property]]) {
      memo[x[property]] = [];
    }
    memo[x[property]].push(x);
    return memo;
  }, {});
  return un;
}

export default function Mofas(props) {
  let rararry = new Array();
  for (let i = 0; i < emdalist.length; i++) {
    rararry.push({ label: emdalist[i], value: emdalist[i] });
  }

  let rararryu = new Array(
    { value: "506", label: "506" },
    { value: "509", label: "509" },
    { value: "528", label: "528" }
  );
  let rararrym = new Array(
    { value: "mesima", label: "משימה" },
    { value: "taavura", label: "תעבורה" },
    { value: "versatili", label: "ורסטילי" },
    { value: "ha", label: "הכשרה" }
  );
  let rararryc = new Array();
  for (let i = 0; i < 1000; i++) {
    rararryc.push({ value: i, label: "" + i });
  }

  const [selected, setSelected] = useState(rararry);
  const [selectedunit, setSelectedunit] = useState(rararryu);
  const [selectedcourse, setSelectedcourse] = useState(rararryc);
  const [selectedmaslool, setSelectedmaslool] = useState(rararrym);

  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();
  const [resexport, setresexport] = useState();
  const [sdarot, setsdarot] = useState();
  const [resall, setResall] = useState();
  const [resallo, setResallo] = useState();
  const [shels, setshels] = useState();
  const [shelmi, setshelmi] = useState();
  const [shelmi2, setshelmi2] = useState();

  const [show, setShow] = useState(false);

  const [slist, setslist] = useState(new Array());
  const [slist2, setslist2] = useState(new Array());
  const [slistunit, setslistunit] = useState(rararryu);
  const [slistmaslool, setslistmaslool] = useState(rararrym);
  const [slistcourse, setslistcourse] = useState(rararryc);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function isinselected(emdaolo, selectedk) {
    if (selectedk)
      for (let i = 0; i < selectedk.length; i++) {
        if (selectedk[i].value === emdaolo) return true;
      }
    return false;
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    let resbeforefilter = resallo;
    let resafterfilter =
      resbeforefilter &&
      resbeforefilter.filter((mofa) => isinselected(mofa.Emda, selected));
    if (resbeforefilter && resafterfilter) setResall(resafterfilter);
    if (resallo) {
      let allr = resallo.filter((mofa) => isinselected(mofa.Emda, selected));
      let sdarotw = new Array();
      if (allr)
        for (let i = 0; i < allr.length; i++) {
          if (!allr[i].IsDeleted) sdarotw.push(allr[i].Emda);
        }
      if (sdarotw) sdarotw = [...new Set(sdarotw)];
      setsdarot(sdarotw);
    }
  }, [selected]);

  useEffect(() => {
    let resbeforefilter = res;
    let resafterfilter =
      resbeforefilter &&
      resbeforefilter.filter((person) =>
        isinselected(person.CourseNo, selectedcourse)
      );
    if (resbeforefilter && resafterfilter) setRes(resafterfilter);
    if (resallo) {
      let allr = resallo.filter((person) =>
        isinselected(person.CourseNo, selectedcourse)
      );
      let sdarotw = new Array();
      if (allr)
        for (let i = 0; i < allr.length; i++) {
          if (!allr[i].IsDeleted) sdarotw.push(allr[i].Emda);
        }
      if (sdarotw) sdarotw = [...new Set(sdarotw)];
      setsdarot(sdarotw);
    }
  }, [selectedcourse]);

  useEffect(() => {
    let resbeforefilter = res;
    let resafterfilter =
      resbeforefilter &&
      resbeforefilter.filter((person) =>
        isinselected(person.Maslool, selectedmaslool)
      );
    if (resbeforefilter && resafterfilter) setRes(resafterfilter);
    if (resallo) {
      let allr = resallo.filter((person) =>
        isinselected(person.Maslool, selectedmaslool)
      );
      let sdarotw = new Array();
      if (allr)
        for (let i = 0; i < allr.length; i++) {
          if (!allr[i].IsDeleted) sdarotw.push(allr[i].Emda);
        }
      if (sdarotw) sdarotw = [...new Set(sdarotw)];
      setsdarot(sdarotw);
    }
  }, [selectedmaslool]);

  useEffect(() => {
    let resbeforefilter = res;
    let resafterfilter =
      resbeforefilter &&
      resbeforefilter.filter((person) =>
        isinselected(person.Unit, selectedunit)
      );
    if (resbeforefilter && resafterfilter) setRes(resafterfilter);
    if (resallo) {
      let allr = resallo.filter((person) =>
        isinselected(person.Unit, selectedunit)
      );
      let sdarotw = new Array();
      if (allr)
        for (let i = 0; i < allr.length; i++) {
          if (!allr[i].IsDeleted) sdarotw.push(allr[i].Emda);
        }
      if (sdarotw) sdarotw = [...new Set(sdarotw)];
      setsdarot(sdarotw);
    }
  }, [selectedunit]);

  useEffect(() => {
    const getMyPeople = async () => {
      const allpeopleres = await Axios.get(`${domain}/user/getmypeopleM`);
      setRes(allpeopleres.data);
      const allrr = await Axios.get(`${domain}/mofa/getallmyn`);
      const allrr2 = await Axios.get(`${domain}/mofa/getallmyn`);
      let resbeforefilter = allrr.data;
      setResallo(allrr.data);
      setResall(resbeforefilter.filter((mofa) => isinselected(mofa.Emda)));
      let allrrexport = allrr2.data;

      for (let i = 0; i < allrrexport.length; i++) {
        if (!allrrexport[i].IsDeleted) {
          if (allrrexport[i] && !allrrexport[i].מספר_אישי) {
            allrrexport[i].מספר_אישי = allrrexport[i].sMA;
          }
          if (allrrexport[i] && !allrrexport[i].שם_פרטי) {
            allrrexport[i].שם_פרטי = allrrexport[i].sFirstName;
          }
          if (allrrexport[i] && !allrrexport[i].שם_משפחה) {
            allrrexport[i].שם_משפחה = allrrexport[i].sLastName;
          }
          if (allrrexport[i] && !allrrexport[i].קורס) {
            allrrexport[i].קורס = allrrexport[i].sCourseNo;
          }
          if (allrrexport[i] && !allrrexport[i].תאריך_מילוי) {
            let finil = "DIDNOTDOWANAD";
            finil = allrrexport[i] && allrrexport[i].fillDate.substring(0, 10);
            const month = finil.substring(5, 7);
            const day = finil.substring(8, 10);
            const year = finil.substring(0, 4);
            finil = day + "/" + month + "/" + year;
            allrrexport[i].תאריך_מילוי = finil;
          }
          if (allrrexport[i] && !allrrexport[i].עמדה) {
            allrrexport[i].עמדה = allrrexport[i].Emda;
          }
          if (allrrexport[i] && !allrrexport[i].מספר) {
            allrrexport[i].מספר = allrrexport[i].No;
          }
          if (allrrexport[i] && !allrrexport[i].מדריך) {
            allrrexport[i].מדריך = allrrexport[i].MadName;
          }
          if (allrrexport[i] && !allrrexport[i].יעד_1) {
            allrrexport[i].יעד_1 = allrrexport[i].X11;
          }
          if (allrrexport[i] && !allrrexport[i].סטטוס_1) {
            allrrexport[i].סטטוס_1 = allrrexport[i].X21 ? "כן" : "לא";
          }
          if (allrrexport[i] && !allrrexport[i].יעד_2) {
            allrrexport[i].יעד_2 = allrrexport[i].X12;
          }
          if (allrrexport[i] && !allrrexport[i].סטטוס_2) {
            allrrexport[i].סטטוס_2 = allrrexport[i].X22 ? "כן" : "לא";
          }
          if (allrrexport[i] && !allrrexport[i].יעד_3) {
            allrrexport[i].יעד_3 = allrrexport[i].X13;
          }
          if (allrrexport[i] && !allrrexport[i].סטטוס_3) {
            allrrexport[i].סטטוס_3 = allrrexport[i].X23 ? "כן" : "לא";
          }
          if (allrrexport[i] && !allrrexport[i].למידה) {
            allrrexport[i].למידה = allrrexport[i] && allrrexport[i].C1;
          }
          if (allrrexport[i] && !allrrexport[i].תכנון) {
            allrrexport[i].תכנון = allrrexport[i] && allrrexport[i].C2;
          }
          if (allrrexport[i] && !allrrexport[i].תפיסה_מרחבית) {
            allrrexport[i].תפיסה_מרחבית = allrrexport[i] && allrrexport[i].C3;
          }
          if (allrrexport[i] && !allrrexport[i].חלקש) {
            allrrexport[i].חלקש = allrrexport[i] && allrrexport[i].C4;
          }
          if (allrrexport[i] && !allrrexport[i].תקשורת) {
            allrrexport[i].תקשורת = allrrexport[i] && allrrexport[i].C5;
          }
          if (allrrexport[i] && !allrrexport[i].עומס) {
            allrrexport[i].עומס = allrrexport[i] && allrrexport[i].C6;
          }
          if (allrrexport[i] && !allrrexport[i].קבלת_החלטות) {
            allrrexport[i].קבלת_החלטות = allrrexport[i] && allrrexport[i].C7;
          }
          if (allrrexport[i] && !allrrexport[i].הפעלה) {
            allrrexport[i].הפעלה = allrrexport[i] && allrrexport[i].C8;
          }
          if (allrrexport[i] && !allrrexport[i].תחקור) {
            allrrexport[i].תחקור = allrrexport[i] && allrrexport[i].C9;
          }
          if (allrrexport[i] && !allrrexport[i].ציון_מסכם) {
            allrrexport[i].ציון_מסכם = allrrexport[i] && allrrexport[i].M1;
          }
          if (allrrexport[i] && !allrrexport[i].הוגדר_כמבחן) {
            allrrexport[i].הוגדר_כמבחן = allrrexport[i].isTest ? "כן" : "לא";
          }
          if (allrrexport[i] && allrrexport[i].isTest) {
            if (allrrexport[i] && !allrrexport[i].מעבר_מבחן) {
              allrrexport[i].מעבר_מבחן = allrrexport[i].isPass ? "כן" : "לא";
            }
          }

          if (allrrexport[i] && !allrrexport[i].שימור_גלישת_טקסט) {
            allrrexport[i].שימור_גלישת_טקסט =
              allrrexport[i] &&
              allrrexport[i].M11 &&
              allrrexport[i].M11.split("\n").join(" ");
          }
          if (allrrexport[i] && !allrrexport[i].שיפור_גלישת_טקסט) {
            allrrexport[i].שיפור_גלישת_טקסט =
              allrrexport[i] &&
              allrrexport[i].M21 &&
              allrrexport[i].M21.split("\n").join(" ");
          }
          if (allrrexport[i] && !allrrexport[i].סיכום) {
            allrrexport[i].סיכום = allrrexport[i].Mf;
          }
        }
        delete allrrexport[i].sMA;
        delete allrrexport[i].sFirstName;
        delete allrrexport[i].sLastName;
        delete allrrexport[i].sCourseNo;
        delete allrrexport[i].fillDate;
        delete allrrexport[i].Emda;
        delete allrrexport[i].No;
        delete allrrexport[i].MadName;
        delete allrrexport[i].X11;
        delete allrrexport[i].X21;
        delete allrrexport[i].X12;
        delete allrrexport[i].X22;
        delete allrrexport[i].X13;
        delete allrrexport[i].X23;
        delete allrrexport[i].C1;
        delete allrrexport[i].C2;
        delete allrrexport[i].C3;
        delete allrrexport[i].C4;
        delete allrrexport[i].C5;
        delete allrrexport[i].C6;
        delete allrrexport[i].C7;
        delete allrrexport[i].C8;
        delete allrrexport[i].C9;
        delete allrrexport[i].M1;
        delete allrrexport[i].isTest;
        delete allrrexport[i].isPass;
        delete allrrexport[i].M11;
        delete allrrexport[i].M21;
        delete allrrexport[i].Mf;
        delete allrrexport[i]._id;
        delete allrrexport[i].sNickName;
        delete allrrexport[i].sMaslool;
        delete allrrexport[i].sUnit;
        delete allrrexport[i].CrewM;
        delete allrrexport[i].name;
        delete allrrexport[i].IsDeleted;
        delete allrrexport[i].createdAt;
        delete allrrexport[i].updatedAt;
        delete allrrexport[i].__v;
      }

      for (let i = 0; i < allrrexport.length; i++) {
        if (Object.keys(allrrexport[i]).length < 10) allrrexport.splice(i, 1);
      }

      setresexport(allrrexport);

      setResall(allrr);
      let array = slist;
      let all = new Array();
      for (let i = 0; i < allpeopleres.data.length; i++) {
        const o = await Axios.get(
          `${domain}/mofa/getallhis/${allpeopleres.data[i].MA}`
        );
        let sortingres = o.data;

        for (let i = 0; i < sortingres.length; i++) {
          let exists = false;
          for (let j = 0; j < slist.length; j++)
            if (slist[j].value === sortingres[i].Emda) exists = true;
          if (!exists) {
            array.push({
              label: sortingres[i].Emda,
              value: sortingres[i].Emda,
            });
          }

          setslist(array);
          let newarray = new Array();
          for (let i = 0; i < emdalist.length; i++) {
            newarray.push({
              label: emdalist[i],
              value: emdalist[i],
            });
          }
          setslist2(newarray);
        }

        let grouped = groupBy(sortingres, "Emda"); // => {orange:[...], banana:[...]}
        var result = Object.keys(grouped).map((key) => [
          Number(key),
          grouped[key],
        ]);
        for (let i = 0; i < result.length; i++) {
          {
            let array = result[i][1];
            array.sort(function (a, b) {
              return a.No - b.No;
            });
            let summ1 = 0;
            let sumc1 = 0;
            let sumc2 = 0;
            let sumc3 = 0;
            let sumc4 = 0;
            let sumc5 = 0;
            let sumc6 = 0;
            let sumc7 = 0;
            let sumc8 = 0;
            let sumc9 = 0;
            for (let j = 0; j < array.length; j++) {
              summ1 = summ1 + array[j].M1;
              sumc1 = sumc1 + array[j].C1;
              sumc2 = sumc2 + array[j].C2;
              sumc3 = sumc3 + array[j].C3;
              sumc4 = sumc4 + array[j].C4;
              sumc5 = sumc5 + array[j].C5;
              sumc6 = sumc6 + array[j].C6;
              sumc7 = sumc7 + array[j].C7;
              sumc8 = sumc8 + array[j].C8;
              sumc9 = sumc9 + array[j].C9;
              array[0].avgm1 = Math.round((summ1 / array.length) * 100) / 100;
              array[0].avgc1 = Math.round((sumc1 / array.length) * 100) / 100;
              array[0].avgc2 = Math.round((sumc2 / array.length) * 100) / 100;
              array[0].avgc3 = Math.round((sumc3 / array.length) * 100) / 100;
              array[0].avgc4 = Math.round((sumc4 / array.length) * 100) / 100;
              array[0].avgc5 = Math.round((sumc5 / array.length) * 100) / 100;
              array[0].avgc6 = Math.round((sumc6 / array.length) * 100) / 100;
              array[0].avgc7 = Math.round((sumc7 / array.length) * 100) / 100;
              array[0].avgc8 = Math.round((sumc8 / array.length) * 100) / 100;
              array[0].avgc9 = Math.round((sumc9 / array.length) * 100) / 100;
            }
            result[i][1] = array;
          }
        }
        all.push(result);
      }
      setResall(all);
      let shelst = new Array(...allpeopleres.data);
      setshels(shelst);
      if (!ready) setReady(true);
    };
    if (!ready) getMyPeople();
  }, []);

  let k;
  if (resallo) if (resallo[0]) k = resallo[0];

  let resi;
  if (res && resall && resall.length > 0 && sdarot && k)
    resi = res.map((screw, i) =>
      sdarot.map(
        (sidra, j) =>
          resall[i] &&
          resall[i].length &&
          resall[i].map((data) => data[1][0].Emda === sidra && data[1][0].avgm1)
      )
    );

  let rs1 = new Array();

  let flagsarrayB = new Array();

  if (resi)
    for (let i = 0; i < resi.length; i++) {
      let flagsarray = new Array();

      for (let j = 0; j < resi[i].length; j++) {
        let flag = false;
        if (resi[i][j])
          for (let k = 0; k < resi[i][j].length; k++)
            if (resi[i][j][k]) flag = true;
        flagsarray.push(flag);
        if (!flag) resi[i][j] && resi[i][j].splice(j, 2);
      }
      flagsarrayB.push(flagsarray);
    }

  let mewresi = new Array();
  if (resi)
    for (let i = 0; i < resi.length; i++) {
      let arrw = new Array();
      for (let j = 0; j < resi[i].length; j++)
        if (flagsarrayB[i][j]) arrw.push(resi[i][j]);
      mewresi.push(arrw);
    }

  if (mewresi)
    for (let i = 0; i < mewresi.length; i++) {
      let newArray = new Array();
      for (let j = 0; j < mewresi[i].length; j++)
        for (let k = 0; k < mewresi[i][j].length; k++)
          if (mewresi[i][j][k]) newArray.push(mewresi[i][j][k]);
      rs1.push(newArray);
    }

  return ready ? (
    k ? (
      <div className="col">
        <br />
        <br />{" "}
        <CSVLink data={resexport}>
          {" "}
          ייצא את כל מופעי ההדרכה של האנשים שלי ⬇️
        </CSVLink>{" "}
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          סינון לפי סדרה:
        </div>{" "}
        <br />
        <div>
          <MultiSelect
            options={slist2}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        </div>
        <br />
        <div style={{}}>
          <div style={{ display: "inline-block", width: "30%" }}>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              סינון לפי קורס:
            </div>{" "}
            <br />
            <div>
              <MultiSelect
                options={slistcourse}
                value={selectedcourse}
                onChange={setSelectedcourse}
                labelledBy="Select"
              />
            </div>
          </div>
          <div style={{ display: "inline-block", width: "5%" }}></div>

          <div style={{ display: "inline-block", width: "30%" }}>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              סינון לפי מסלול:
            </div>{" "}
            <br />
            <div>
              <MultiSelect
                options={slistmaslool}
                value={selectedmaslool}
                onChange={setSelectedmaslool}
                labelledBy="Select"
              />
            </div>
          </div>
          <div style={{ display: "inline-block", width: "5%" }}></div>

          <div style={{ display: "inline-block", width: "30%" }}>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              סינון לפי יחידה:
            </div>{" "}
            <br />
            <div>
              <MultiSelect
                options={slistunit}
                value={selectedunit}
                onChange={setSelectedunit}
                labelledBy="Select"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <HisMOFAS shel={shelmi} h={shelmi2} />
        </Modal>
        <div className="mofastable">
          {" "}
          <table>
            <tbody>
              <tr>
                <th
                  style={{
                    border: "1px solid gray",
                    padding: "11px",
                    backgroundColor: "unset",
                  }}
                >
                  רשימת האנשים שלי
                </th>
                {sdarot &&
                  sdarot.length > 0 &&
                  sdarot.map((sidra) => (
                    <th
                      style={{
                        border: "1px solid gray",
                        padding: "11px",
                        backgroundColor: "unset",
                        width: "10000px",
                      }}
                    >
                      {sidra}
                    </th>
                  ))}
              </tr>
              {res.map((screw, i) => (
                <tr>
                  <td className="tdbutton">
                    <button
                      className={"OpinionOpen2"}
                      onClick={() => {
                        openModal();
                        setshelmi(screw.MA);
                        setshelmi2(screw);
                      }}
                    >
                      {screw.NickName}
                    </button>
                  </td>
                  {sdarot &&
                    sdarot.lengtn > 0 &&
                    sdarot.map((sidra, j) => (
                      <td
                        onMouseOver={() => {
                          setShow(
                            [...Array(resall.length).keys()].map((x) =>
                              x === j ? true : false
                            )
                          );
                        }}
                        onMouseLeave={() => {
                          setShow(false);
                        }}
                        style={{
                          border: "1px solid gray",
                          padding: "11px",
                          backgroundColor: "unset",
                          textAlign: "center",
                        }}
                      >
                        {resall[i].map((data) =>
                          data[1][0].Emda === sidra ? (
                            <span>{data[1][0].avgm1}</span>
                          ) : (
                            ""
                          )
                        )}
                      </td>
                    ))}
                </tr>
              ))}
              {/*  <tr>
              <th>ממוצע פשוט:</th>
              { {sdarot.map((sidra, j) => (
                <td
                  onMouseOver={() => {
                    setShow(
                      [...Array(resall.length).keys()].map((x) =>
                        x === j ? true : false
                      )
                    );
                  }}
                  onMouseLeave={() => {
                    setShow(false);
                  }}
                  style={{
                    border: "1px solid gray",
                    padding: "11px",
                    backgroundColor: "unset",
                    textAlign: "center",
                  }}
                >
                  
                </td>
              ))}}
              {resi.map((avg) => (
                <td
                  style={{
                    border: "1px solid gray",
                    padding: "11px",
                    backgroundColor: "unset",
                    textAlign: "center",
                  }}
                >
                  {avg}
                </td>
              ))}
            </tr> */}
              {/*  <tr>
              <th>ממוצע מעמיק:</th>
              <th>ממוצע...</th>
            </tr> */}
            </tbody>
          </table>
        </div>{" "}
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
      <h3>-אין לאנשיי מופעי הדרכה-</h3>
    )
  ) : (
    <div>
      טוען את כל האנשים שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז ייתכן
      שיש תקלה בשרת או בתקשורת איתו)
    </div>
  );
}
