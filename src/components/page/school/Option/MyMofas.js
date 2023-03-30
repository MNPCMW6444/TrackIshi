import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import NEWMOFA from "../../screw/Option/NEWMOFA";
import VIEWMOFA from "../../screw/Option/VIEWMOFA";
import Modal from "react-modal";
import SuccessMessage from "../../../messages/SuccessMessage";
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

export default function MyMofas(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [successMessage, setSuccessMessage] = useState(null);

  const [show, setShow] = useState(false);
  const [ssss, setssss] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();
  const [res2, setRes2] = useState();

  useEffect(() => {
    const getAllmofas = async () => {
      const allmofasRes = await Axios.get(`${domain}/mofa/${props.shel ? "getallhis/" + props.shel : "getallmy"}`);
      const allmofasRes2 = await Axios.get(`${domain}/mofa/${props.shel ? "getallhis/" + props.shel : "getallmy"}`);

      let allrrexport = (allmofasRes2.data);

      for (let i = 0; i < allrrexport.length; i++) {
        if(!allrrexport[i].IsDeleted){
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
            if (allrrexport[i] && allrrexport[i].isTest){
                if (allrrexport[i] && !allrrexport[i].מעבר_מבחן) {
                  allrrexport[i].מעבר_מבחן = allrrexport[i].isPass ? "כן" : "לא";
                }
              }
            
            //let long1 = allrrexport[i].M11.replace("\n"," ");
            //let long1 = '"' + allrrexport[i].M11 + '"';
            //let long1 = allrrexport[i].M11.split("\n").join(" ");

            if (allrrexport[i] && !allrrexport[i].שימור_גלישת_טקסט) {
            //     allrrexport[i].שימור_גלישת_טקסט = allrrexport[i] && long1;
            //     allrrexport[i].שימור_גלישת_טקסט = allrrexport[i] && allrrexport[i].M11;
                 allrrexport[i].שימור_גלישת_טקסט = allrrexport[i] && allrrexport[i].M11 && allrrexport[i].M11.split("\n").join(" ");
            }

            //let long2 = allrrexport[i].M21.replace("\n"," ");
            //let long2 = '"' + allrrexport[i].M21 + '"';
            //let long2 = allrrexport[i].M21.split("\n").join(" ");

            if (allrrexport[i] && !allrrexport[i].שיפור_גלישת_טקסט) {
            //     allrrexport[i].שיפור_גלישת_טקסט = allrrexport[i] && long2;
            //     allrrexport[i].שיפור_גלישת_טקסט = allrrexport[i] && allrrexport[i].M21;
                 allrrexport[i].שיפור_גלישת_טקסט = allrrexport[i] && allrrexport[i].M21 && allrrexport[i].M21.split("\n").join(" ");
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
        if (Object.keys(allrrexport[i]).length < 10)
          allrrexport.splice(i,1);
      }
 
      setRes2(allrrexport);

      let sortingres = allmofasRes.data;
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
      setRes(result);
      setReady(true);
    };
    getAllmofas();
  }, [ssss]);

  return ready ? (
    <div className="col">
      <br />
      <br />
      <br />
      <div style={{ textAlign: "center" }}>
        {" "}
        {
          <button
            onClick={() => {
              setModalData("new");
              openModal();
            }}
            style={{ backgroundColor: "green", fontSize: 40 }}
          >
            הזן מופע הדרכה חדש
          </button>
        }
      </div>
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          clear={() => setSuccessMessage(null)}
        />
      )}{" "}
      <br />
      <br />
      <div style={{ fontSize: "19pt", textAlign: "center" }}>
        {" "}
        <CSVLink data={res2}> ייצא את כל מופעי ההדרכה שלי ⬇️</CSVLink>
      </div>
      {props.shel ? (
        <h2 style={{ fontSize: 40 }}>רשימת כל מופעי ההדרכה שלו/ה:</h2>
      ) : (
        <h2 style={{ fontSize: 40 }}>רשימת כל מופעי ההדרכה שלי:</h2>
      )}
      <button
        style={{
          backgroundColor: "unset",
          color: "black",
          fontWeight: "900",
          fontSize: "12pt",
        }}
        onClick={null}
      >
        מקרא:
      </button>
      <button style={{ backgroundColor: "unset", width: "10px" }}></button>
      <button style={{ backgroundColor: "" }}>מופע הדרכה רגיל</button>
      <button style={{ backgroundColor: "unset", width: "10px" }}></button>
      <button style={{ backgroundColor: "#89c16E" }}>מבחן עובר</button>{" "}
      <button style={{ backgroundColor: "unset", width: "10px" }}></button>
      <button style={{ backgroundColor: "#E38383" }}>מבחן לא עובר</button>
      <br />
      <br />
      <br />
      <div className="mofastable">
        <table>
          <tr>
            <th
              style={{
                width: "3000px",
                border: "1px solid gray",
                padding: "11px",
                backgroundColor: "unset",
              }}
            >
              סדרה
            </th>
            <th
              style={{
                width: "7840px",
                border: "1px solid gray",
                padding: "11px",
                backgroundColor: "unset",
              }}
            >
              מספר
            </th>
            <th
              style={{
                width: "900px",
                border: "1px solid gray",
                padding: "11px",
                backgroundColor: "unset",
              }}
            >
              ממוצע מסכם
            </th>
          </tr>
          {res.map((onearray, i) => (
            <tr>
              <td
                style={{
                  border: "1px solid gray",
                  padding: "11px",
                  backgroundColor: "unset",
                  textAlign: "center",
                }}
              >
                {onearray[1][0].Emda}
              </td>
              <td
                style={{
                  border: "1px solid gray",
                  padding: "11px",
                  backgroundColor: "unset",
                }}
              >
                {onearray[1].map((mofa) => (
                  <>
                    <button
                      onClick={() => {
                        setModalData(mofa);
                        openModal();
                      }}
                      style={{
                        backgroundColor:
                          mofa.isTest && mofa.isPass
                            ? "#89c16E"
                            : mofa.isTest && !mofa.isPass
                            ? "#E38383"
                            : "",
                        fontSize: 33,
                      }}
                    >
                      {/*   {(mofa.Emda ? mofa.Emda : "*עמדה חסרה*") +
              " " + */}
                      {mofa.No ? mofa.No : "*מספר חסר*"}
                    </button>
                    {/* <br />
                  <br /> */}
                    <button
                      style={{ backgroundColor: "unset", width: "10px" }}
                    ></button>
                  </>
                ))}
              </td>
              <td
                onMouseOver={() => {
                  setShow(
                    [...Array(res.length).keys()].map((x) =>
                      x === i ? true : false
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
                {onearray[1][0].avgm1}

                <div
                  className={show[i] ? "mofavgsshow" : "mofavgs"}
                  style={{
                    paddingTop: "15px",
                    paddingRight: "15px",
                    paddingBottom: "15px",
                    paddingLeft: "15px",
                    top: props.h ? 300 + i * 69 : 400 + i * 69,
                    left: props.h ? "15%" : "25%",
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
                      {onearray[1][0].Emda}
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
                          {onearray[1][0].avgc1}
                        </td>
                        <td
                          style={{
                            border: "1px solid gray",
                            backgroundColor: "unset",
                            textAlign: "center",
                          }}
                        >
                          {onearray[1][0].avgc2}
                        </td>
                        <td
                          style={{
                            border: "1px solid gray",
                            backgroundColor: "unset",
                            textAlign: "center",
                          }}
                        >
                          {onearray[1][0].avgc3}
                        </td>
                        <td
                          style={{
                            border: "1px solid gray",
                            backgroundColor: "unset",
                            textAlign: "center",
                          }}
                        >
                          {onearray[1][0].avgc4}
                        </td>
                        <td
                          style={{
                            border: "1px solid gray",
                            backgroundColor: "unset",
                            textAlign: "center",
                          }}
                        >
                          {onearray[1][0].avgc5}
                        </td>
                        <td
                          style={{
                            border: "1px solid gray",
                            backgroundColor: "unset",
                            textAlign: "center",
                          }}
                        >
                          {onearray[1][0].avgc6}
                        </td>
                        <td
                          style={{
                            border: "1px solid gray",
                            backgroundColor: "unset",
                            textAlign: "center",
                          }}
                        >
                          {onearray[1][0].avgc7}
                        </td>
                        <td
                          style={{
                            border: "1px solid gray",
                            backgroundColor: "unset",
                            textAlign: "center",
                          }}
                        >
                          {onearray[1][0].avgc8}
                        </td>
                        <td
                          style={{
                            border: "1px solid gray",
                            backgroundColor: "unset",
                            textAlign: "center",
                          }}
                        >
                          {onearray[1][0].avgc9}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {props.shel
        ? !res[0] && (
            <>
              <h3>-אין לו/ה מופעי הדרכה-</h3> <br />
            </>
          )
        : !res[0] && (
            <>
              {" "}
              <h3>-אין לי מופעי הדרכה-</h3> <br />
            </>
          )}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalData === "new" ? (
          <NEWMOFA
            h={props.h}
            setDidupdated={closeModal}
            suc={setSuccessMessage}
            afterfinish={setssss}
          />
        ) : (
          <VIEWMOFA h={props.h} data={modalData}></VIEWMOFA>
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
