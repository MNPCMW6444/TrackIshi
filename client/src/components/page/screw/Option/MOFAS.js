import React, { useEffect, useState } from "react";
import domain from "../../../../util/domain";
import Axios from "axios";
import NEWMOFA from "./NEWMOFA";
import VIEWMOFA from "./VIEWMOFA";
import Modal from "react-modal";
import SuccessMessage from "../../../messages/SuccessMessage";

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

export default function MOFAS(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState();
  const [successMessage, setSuccessMessage] = useState(null);

  const [show, setShow] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  const [ready, setReady] = useState(false);
  const [res, setRes] = useState();

  useEffect(() => {
    const getAllmofas = async () => {
      const allmofasRes = await Axios.get(
        `${domain}/mofa/${props.shel ? "getallhis/" + props.shel : "getallmy"}`
      );
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
  }, []);

  return ready ? (
    <div className="col">
      <br />
      <br />
      <br />
      {!props.shel && (
        <button
          onClick={() => {
            setModalData("new");
            openModal();
          }}
          style={{ backgroundColor: "green", fontSize: 40 }}
        >
          הזן מופע הדרכה חדש
        </button>
      )}
      <br />
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          clear={() => setSuccessMessage(null)}
        />
      )}{" "}
      <br />
      {props.shel ? (
        <h2 style={{ fontSize: 45 }}>רשימת כל מופעי ההדרכה שלו/ה:</h2>
      ) : (
        <h2 style={{ fontSize: 45 }}>רשימת כל מופעי ההדרכה שלי:</h2>
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
      <table
        style={
          {
            /* marginLeft: "auto", marginRight: "auto" */
          }
        }
      >
        <tr>
          <th
            style={{
              width: "350px",
              border: "1px solid",
              padding: "11px",
              backgroundColor: "unset",
            }}
          >
            עמדה/סימולציה
          </th>
          <th
            style={{
              width: "700px",
              border: "1px solid",
              padding: "11px",
              backgroundColor: "unset",
            }}
          >
            מספר
          </th>
          <th
            style={{
              width: "80px",
              border: "1px solid",
              padding: "11px",
              backgroundColor: "unset",
            }}
          >
            ממוצע מסכם
          </th>
        </tr>
        {res.map((onearray) => (
          <tr>
            <td
              style={{
                border: "1px solid",
                padding: "11px",
                backgroundColor: "unset",
              }}
            >
              {onearray[1][0].Emda}
            </td>
            <td
              style={{
                border: "1px solid",
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
                setShow(true);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
              style={{
                border: "1px solid",
                padding: "11px",
                backgroundColor: "unset",
              }}
            >
              {onearray[1][0].avgm1}
              {show && (
                <table>
                  <tr>
                    <td>למידה</td>
                    <td>תכנון</td>
                    <td>תפיסה מרחבית</td>
                    <td>חלק"ש</td>
                    <td>תקשורת</td>
                    <td>עומס</td>
                    <td>קבלת החלטות</td>
                    <td>הפעלה</td>
                    <td>תחקור</td>
                  </tr>
                  <tr>
                    <td>{onearray[1][0].avgc1}</td>
                    <td>{onearray[1][0].avgc2}</td>
                    <td>{onearray[1][0].avgc3}</td>
                    <td>{onearray[1][0].avgc4}</td>
                    <td>{onearray[1][0].avgc5}</td>
                    <td>{onearray[1][0].avgc6}</td>
                    <td>{onearray[1][0].avgc7}</td>
                    <td>{onearray[1][0].avgc8}</td>
                    <td>{onearray[1][0].avgc9}</td>
                  </tr>
                </table>
              )}{" "}
            </td>
          </tr>
        ))}
      </table>
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
          <NEWMOFA setDidupdated={closeModal} suc={setSuccessMessage} />
        ) : (
          <VIEWMOFA data={modalData}></VIEWMOFA>
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
