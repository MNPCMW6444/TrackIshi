import React, { useEffect, useState } from "react";
import Lchart from "../../../../global/charts/Lchart";

export default function GradeRow(props) {
  const [o4, setO4] = useState("");
  const [o5, setO5] = useState("");
  const [o6, setO6] = useState("");
  const [o7, setO7] = useState("");
  const [o8, setO8] = useState("");
  const [o9, setO9] = useState("");
  const [o10, setO10] = useState("");
  const [shown4, setShown4] = useState(false);
  const [shown5, setShown5] = useState(false);
  const [shown6, setShown6] = useState(false);
  const [shown7, setShown7] = useState(false);
  const [shown8, setShown8] = useState(false);
  const [shown9, setShown9] = useState(false);
  const [shown10, setShown10] = useState(false);

  useEffect(() => {
    try {
      switch (props.grade) {
        case 4:
          setO4("selected");
          break;
        case 5:
          setO5("selected");
          break;
        case 6:
          setO6("selected");
          break;
        case 7:
          setO7("selected");
          break;
        case 8:
          setO8("selected");
          break;
        case 9:
          setO9("selected");
          break;
        case 10:
          setO10("selected");
          break;
        default:
      }
    } catch (err) {
      console.log(err);
    }
  }, [props.grade]);

  function show4() {
    setShown4(true);
  }
  function show5() {
    setShown5(true);
  }
  function show6() {
    setShown6(true);
  }
  function show7() {
    setShown7(true);
  }
  function show8() {
    setShown8(true);
  }
  function show9() {
    setShown9(true);
  }
  function show10() {
    setShown10(true);
  }

  function nshow4() {
    setShown4(false);
  }
  function nshow5() {
    setShown5(false);
  }
  function nshow6() {
    setShown6(false);
  }
  function nshow7() {
    setShown7(false);
  }
  function nshow8() {
    setShown8(false);
  }
  function nshow9() {
    setShown9(false);
  }
  function nshow10() {
    setShown10(false);
  }

  return (
    <>
      <td onMouseOver={show4} onMouseLeave={nshow4} className={"otd" + o4}>
        4
        {o4 === "selected" && props.isGray !== "gray" && shown4 && (
          <Lchart
            avgs={props.avgs}
            allDATA={props.allDATA}
            data={props.criteria}
          />
        )}
      </td>
      <td onMouseOver={show5} onMouseLeave={nshow5} className={"otd" + o5}>
        5
        {o5 === "selected" && props.isGray !== "gray" && shown5 && (
          <Lchart
            avgs={props.avgs}
            allDATA={props.allDATA}
            data={props.criteria}
          />
        )}
      </td>
      <td onMouseOver={show6} onMouseLeave={nshow6} className={"otd" + o6}>
        6
        {o6 === "selected" && props.isGray !== "gray" && shown6 && (
          <Lchart
            avgs={props.avgs}
            allDATA={props.allDATA}
            data={props.criteria}
          />
        )}
      </td>
      <td onMouseOver={show7} onMouseLeave={nshow7} className={"otd" + o7}>
        7
        {o7 === "selected" && props.isGray !== "gray" && shown7 && (
          <Lchart
            avgs={props.avgs}
            allDATA={props.allDATA}
            data={props.criteria}
          />
        )}
      </td>
      <td onMouseOver={show8} onMouseLeave={nshow8} className={"otd" + o8}>
        8
        {o8 === "selected" && props.isGray !== "gray" && shown8 && (
          <Lchart
            avgs={props.avgs}
            allDATA={props.allDATA}
            data={props.criteria}
          />
        )}
      </td>
      <td onMouseOver={show9} onMouseLeave={nshow9} className={"otd" + o9}>
        9
        {o9 === "selected" && props.isGray !== "gray" && shown9 && (
          <Lchart
            avgs={props.avgs}
            allDATA={props.allDATA}
            data={props.criteria}
          />
        )}
      </td>
      <td onMouseOver={show10} onMouseLeave={nshow10} className={"otd" + o10}>
        10
        {o10 === "selected" && props.isGray !== "gray" && shown10 && (
          <Lchart
            avgs={props.avgs}
            allDATA={props.allDATA}
            data={props.criteria}
          />
        )}
      </td>
    </>
  );
}
