import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import Modal from "react-modal";
import HisMOFAS from "../../screw/Option/MOFAS";
import { CSVLink } from "react-csv";

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
  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();
  const [resexport, setresexport] = useState();
  const [sdarot, setsdarot] = useState();
  const [resall, setResall] = useState();
  const [shels, setshels] = useState();
  const [shelmi, setshelmi] = useState();
  const [shelmi2, setshelmi2] = useState();

  const [show, setShow] = useState(false);

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
      const allrr = await Axios.get(`${domain}/mofa/getallmyn`);

      let allrrexport = allrr.data;

      for (let i = 0; i < allrrexport.length; i++) {
        allrrexport[i].מספר_אישי = "allrrexport[i].sMA";
        //delete allrrexport[i].sMA;

        /*   if (a[i] && !a[i].תאריך_מילוי) {
            let finil = "DIDNOTDOWANAD";
            finil = a[i] && a[i].fillDate.substring(0, 10);
            const month = finil.substring(5, 7);
            const day = finil.substring(8, 10);
            const year = finil.substring(0, 4);
            finil = day + "/" + month + "/" + year;
            a[i].תאריך_מילוי = finil;
            delete a[i].fillDate;
          } */
      }

      setresexport(allrrexport);

      /*  let grouped = groupBy(all, "Emda"); // => {orange:[...], banana:[...]}
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
      } */
      let allr = allrr.data;
      let sdarotw = new Array();
      //debugger;
      if (allr)
        for (let i = 0; i < allr.length; i++) {
          if (!allr[i].IsDeleted) sdarotw.push(allr[i].Emda);
        }
      if (sdarotw) sdarotw = [...new Set(sdarotw)];
      setsdarot(sdarotw);
      setResall(allrr);

      let all = new Array();
      for (let i = 0; i < allpeopleres.data.length; i++) {
        const o = await Axios.get(
          `${domain}/mofa/getallhis/${allpeopleres.data[i].MA}`
        );
        let sortingres = o.data;
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
  if (resall) if (resall[0]) k = resall[0];
  /* let g;
  if (k) g = k[0][1][0];
  debugger; */

  /* let resi;
  let temp = 0;
  if (sdarot)
    for (let i = 0; i < sdarot.length; i++) {
      for (let j = 0; j < resall.length; j++) {
        if(resall[j] && resall[j] )
      }
    } */
  /*  let resi = new Array();
  if (res)
    for (let k = 0; k < res.length; k++) {
      if (sdarot)
        for (let sidra = 0; sidra < sdarot.length; sidra++) {
          let memofsid = 0;
          let count = 0;
          if (resall)
            for (let i = 0; i < resall.length; i++) {
              if (resall[k][i] && resall[k][i][1][0].Emda === sdarot[sidra]) {
                memofsid += resall[k][i][1][0].avgm1;
                count++;
                debugger;
              }
            }
          memofsid = memofsid / count;
          resi.push(memofsid);
        }
    }
  for (let i = 0; i < resi.length; i++) {
    if (!(resi[i] > -1)) resi.splice(i);
  } */

  /* 
  let resi;
  if (res && resall && sdarot && k)
    resi = res.map((screw, i) => (
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
        {sdarot.map((sidra, j) => (
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
                <span>
                  {data[1][0].avgm1}
                  {}
                </span>
              ) : (
                ""
              )
            )}
          </td>
        ))}
      </tr>
    ));

  let rs1 = new Array();

  if (resi)
    for (let rowsI = 0; rowsI < resi.length; rowsI++) {
      let row =
        resi[rowsI] &&
        resi[rowsI].props &&
        resi[rowsI].props.children &&
        resi[rowsI].props.children[1];

      let newRow = new Array();
      if (row)
        for (let column = 0; column < row.length; column++) {
          let td;
          td =
            row[column] &&
            row[column].props &&
            row[column].props.children &&
            row[column].props.children[0] &&
            row[column].props.children[0].props &&
            row[column].props.children[0].props.children;
          newRow.push(td);
        }
      rs1.push(newRow);
    } */

  let resi;
  if (res && resall && sdarot && k)
    resi = res.map((screw, i) =>
      sdarot.map((sidra, j) =>
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
        for (let k = 0; k < resi[i][j].length; k++)
          if (resi[i][j][k]) flag = true;
        flagsarray.push(flag);
        if (!flag) resi[i][j].splice(j, 2);
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

  if (mewresi) debugger;

  return ready ? (
    k ? (
      <div className="col">
        <br />
        <br />{" "}
        <CSVLink data={resexport}>
          {" "}
          ייצא את כל מופעי ההדרכה של האנשים שלי ⬇️
        </CSVLink>
        <br />
        <br />
        {/*        <h2>רשימת האנשים שלי:</h2>
         */}{" "}
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
              {sdarot.map((sidra) => (
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
              {/*  {k.map((data) => (
                <th>
                  {/*  {data.length > 0 && data[0].length > 0 && data[0][1].length > 0
                ? data[0][1][0].Emda
                : "-"} }
                </th> */}
              {/*  ))} */}
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
                {sdarot.map((sidra, j) => (
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
                        <span>
                          {data[1][0].avgm1}
                          {/*  <div
                            className={show[i] ? "mofavgsshow" : "mofavgs"}
                            style={{
                              paddingTop: "15px",
                              paddingRight: "15px",
                              paddingBottom: "15px",
                              paddingLeft: "15px",
                              top: 640 + i * 69,
                            }}
                          >
                            <div
                              style={{
                                textAlign: "center",
                                backgroundColor: "white",
                                borderRadius: "30px",
                                fontSize: "15pt",
                              }}
                            >
                              {"ממוצעים ב"}
                              <span
                                style={{
                                  fontWeight: "900",
                                }}
                              >
                                {data[1][0].Emda}
                              </span>
                              {", לפי הפרמטרים הבאים:"}
                            </div>
                            <div
                              style={{
                                backgroundColor: "#EEEEEE",
                                borderRadius: "30px",
                                paddingTop: "10px",
                                paddingRight: "10px",
                                paddingBottom: "10px",
                                paddingLeft: "10px",
                              }}
                            >
                              <table
                                style={{
                                  backgroundColor: "unset",
                                  textAlign: "center",
                                  border: "1px solid gray",
                                }}
                              >
                                <tr
                                  style={{
                                    backgroundColor: "unset",
                                    textAlign: "center",
                                    border: "1px solid gray",
                                  }}
                                >
                                  <th
                                    style={{
                                      border: "1px solid gray",
                                      padding: "5px",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    למידה
                                  </th>
                                  <th
                                    style={{
                                      border: "1px solid gray",
                                      padding: "5px",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    תכנון
                                  </th>
                                  <th
                                    style={{
                                      border: "1px solid gray",
                                      padding: "5px",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    תפיסה מרחבית
                                  </th>
                                  <th
                                    style={{
                                      border: "1px solid gray",
                                      padding: "5px",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    חלק"ש
                                  </th>
                                  <th
                                    style={{
                                      border: "1px solid gray",
                                      padding: "5px",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    תקשורת
                                  </th>
                                  <th
                                    style={{
                                      border: "1px solid gray",
                                      padding: "5px",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    עומס
                                  </th>
                                  <th
                                    style={{
                                      border: "1px solid gray",
                                      padding: "5px",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    קבלת החלטות
                                  </th>
                                  <th
                                    style={{
                                      border: "1px solid gray",
                                      padding: "5px",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    הפעלה
                                  </th>
                                  <th
                                    style={{
                                      border: "1px solid gray",
                                      padding: "5px",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    תחקור
                                  </th>
                                </tr>
                                <tr>
                                  <td
                                    style={{
                                      border: "1px solid gray",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data[1][0].avgc1}
                                  </td>
                                  <td
                                    style={{
                                      border: "1px solid gray",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data[1][0].avgc2}
                                  </td>
                                  <td
                                    style={{
                                      border: "1px solid gray",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data[1][0].avgc3}
                                  </td>
                                  <td
                                    style={{
                                      border: "1px solid gray",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data[1][0].avgc4}
                                  </td>
                                  <td
                                    style={{
                                      border: "1px solid gray",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data[1][0].avgc5}
                                  </td>
                                  <td
                                    style={{
                                      border: "1px solid gray",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data[1][0].avgc6}
                                  </td>
                                  <td
                                    style={{
                                      border: "1px solid gray",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data[1][0].avgc7}
                                  </td>
                                  <td
                                    style={{
                                      border: "1px solid gray",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data[1][0].avgc8}
                                  </td>
                                  <td
                                    style={{
                                      border: "1px solid gray",
                                      backgroundColor: "unset",
                                      textAlign: "center",
                                    }}
                                  >
                                    {data[1][0].avgc9}
                                  </td>
                                </tr>
                              </table>
                            </div>
                          </div> */}
                        </span>
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
      <h3>-אין לי אנשים-</h3>
    )
  ) : (
    <div>
      טוען את כל האנשים שלך מהשרת... (אם אתה מספיק לקרוא את ההודעה הזאת אז ייתכן
      שיש תקלה בשרת או בתקשורת איתו)
    </div>
  );
}
