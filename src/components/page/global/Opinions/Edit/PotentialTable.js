import React, { useEffect, useState } from "react";

export default function PotentialTable(props) {
  const [m4, setM4] = useState("");
  const [m3, setM3] = useState("");
  const [m2, setM2] = useState("");
  const [m1, setM1] = useState("");
  const [m0, setM0] = useState("");

  useEffect(() => {
    try {
      switch (props.grade) {
        case 4:
          setM4("selected");
          setM0("");
          setM1("");
          setM2("");
          setM3("");
          break;
        case 3:
          setM3("selected");
          setM0("");
          setM1("");
          setM2("");
          setM4("");
          break;
        case 2:
          setM2("selected");
          setM0("");
          setM1("");
          setM3("");
          setM4("");
          break;
        case 1:
          setM1("selected");
          setM0("");
          setM3("");
          setM2("");
          setM4("");
          break;
        case 0:
          setM0("selected");
          setM3("");
          setM1("");
          setM2("");
          setM4("");
          break;
        default:
      }
    } catch (err) {
      console.log(err);
    }
  }, [props.grade]);

  return (
    <table className="otable">
      <tbody>
        <tr className="otr">
          <th className="oth">נמוך</th>
          <th className="oth">בינוני</th>
          <th className="oth">גבוה</th>
          <th className="oth">גבוה מאוד</th>
        </tr>
        <tr className="otr">
          <td
            className={"otd" + m4}
            onClick={() => {
              props.setnewgrade([4, "pot"]);
            }}
          >
            ג
          </td>
          <td
            className={"otd" + m3}
            onClick={() => {
              props.setnewgrade([3, "pot"]);
            }}
          >
            ב
          </td>
          <td
            className={"otd" + m2}
            onClick={() => {
              props.setnewgrade([2, "pot"]);
            }}
          >
            א-2
          </td>
          <td
            className={"otd" + m1}
            onClick={() => {
              props.setnewgrade([1, "pot"]);
            }}
          >
            א-1
          </td>
        </tr>
      </tbody>
    </table>
  );
}
