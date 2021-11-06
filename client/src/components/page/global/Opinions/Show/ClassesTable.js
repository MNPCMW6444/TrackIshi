import React, { useEffect, useState } from "react";

function ClassesTable(props) {
  const [isMesima, setIsMesima] = useState("");
  const [isTaavura, setIsTaavura] = useState("");
  const [isVersatili, setIsVersatili] = useState("");

  const [isSadir, setIsSadir] = useState("");
  const [isHatsach, setIsHatsach] = useState("");
  const [isMill, setIsMill] = useState("");

  const [isDeregA, setIsDeregA] = useState("");
  const [isDeregB, setIsDeregB] = useState("");
  const [isDeregC, setIsDeregC] = useState("");
  const [isDeregD, setIsDeregD] = useState("");

  useEffect(() => {
    const getOpinion = async () => {
      try {
        if (props.dereg === "a") setIsDeregA("selected");
        else if (props.dereg === "b") setIsDeregB("selected");
        else if (props.dereg === "c") setIsDeregC("selected");
        else if (props.dereg === "d") setIsDeregD("selected");
      } catch (err) {
        console.log(err);
      }

      try {
        if (props.maslool === "mesima") setIsMesima("selected");
        if (props.taavura) setIsTaavura("selected");
        if (props.versatili) setIsVersatili("selected");
      } catch (err) {
        console.log(err);
      }
      try {
        if (props.sooghatsava === "sadir") setIsSadir("selected");
        if (props.sooghatsava === "hatsach") setIsHatsach("selected");
        if (props.sooghatsava === "mill") setIsMill("selected");
      } catch (err) {
        console.log(err);
      }
    };
    getOpinion();
  }, [
    props.dereg,
    props.maslool,
    props.sooghatsava,
    props.taavura,
    props.versatili,
  ]);

  return (
    <table className="otable">
      <tbody>
        <tr className="otr">
          <th className="oth">מסלול</th>
          <td className={"otd" + isMesima}>משימה</td>
          <td className={"otd" + isTaavura}>תעבורה</td>
          <td className={"otd" + isVersatili}>ורסטילי</td>
        </tr>
        <tr className="otr">
          <th className="oth">סוג הצבה</th>
          <td className={"otd" + isSadir}>סדיר</td>
          <td className={"otd" + isHatsach}>הצ"ח</td>
          <td className={"otd" + isMill}>מילואים</td>
        </tr>
        <tr className="otr">
          <th className="oth">דרג</th>
          <td className={"otd" + isDeregA}>א'</td>
          <td className={"otd" + isDeregB}>ב'</td>
          <td className={"otd" + isDeregC}>ג'</td>
          <td className={"otd" + isDeregD}>ד'</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ClassesTable;
