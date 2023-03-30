import React, { useEffect, useState } from "react";

export default function GradeRow(props) {
  const [o4, setO4] = useState("");
  const [o5, setO5] = useState("");
  const [o6, setO6] = useState("");
  const [o7, setO7] = useState("");
  const [o8, setO8] = useState("");
  const [o9, setO9] = useState("");
  const [o10, setO10] = useState("");

  useEffect(() => {
    try {
      switch (props.grade) {
        case 4:
          setO4("selected");
          setO5("");
          setO6("");
          setO7("");
          setO8("");
          setO9("");
          setO10("");
          break;
        case 5:
          setO5("selected");
          setO4("");
          setO6("");
          setO7("");
          setO8("");
          setO9("");
          setO10("");
          break;
        case 6:
          setO6("selected");
          setO4("");
          setO5("");
          setO7("");
          setO8("");
          setO9("");
          setO10("");
          break;
        case 7:
          setO7("selected");
          setO4("");
          setO5("");
          setO6("");
          setO8("");
          setO9("");
          setO10("");
          break;
        case 8:
          setO8("selected");
          setO4("");
          setO5("");
          setO6("");
          setO7("");
          setO9("");
          setO10("");
          break;
        case 9:
          setO9("selected");
          setO4("");
          setO5("");
          setO6("");
          setO7("");
          setO8("");
          setO10("");
          break;
        case 10:
          setO10("selected");
          setO4("");
          setO5("");
          setO6("");
          setO7("");
          setO8("");
          setO9("");
          break;
        default:
      }
    } catch (err) {
      console.log(err);
    }
  }, [props.grade]);

  return (
    <>
      <td
        className={"otd" + o4}
        onClick={() => {
          props.setnewgrade([4, props.who]);
        }}
      >
        4
      </td>
      <td
        className={"otd" + o5}
        onClick={() => {
          props.setnewgrade([5, props.who]);
        }}
      >
        5
      </td>
      <td
        className={"otd" + o6}
        onClick={() => {
          props.setnewgrade([6, props.who]);
        }}
      >
        6
      </td>
      <td
        className={"otd" + o7}
        onClick={() => {
          props.setnewgrade([7, props.who]);
        }}
      >
        7
      </td>
      <td
        className={"otd" + o8}
        onClick={() => {
          props.setnewgrade([8, props.who]);
        }}
      >
        8
      </td>
      <td
        className={"otd" + o9}
        onClick={() => {
          props.setnewgrade([9, props.who]);
        }}
      >
        9
      </td>
      <td
        className={"otd" + o10}
        onClick={() => {
          props.setnewgrade([10, props.who]);
        }}
      >
        10
      </td>
    </>
  );
}
