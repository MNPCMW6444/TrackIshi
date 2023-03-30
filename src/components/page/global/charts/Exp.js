import React from "react";

export default function Exp(props) {
  return (
    <div
      className={"expdiv"}
      style={{
        fontWeight: 300,
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingRight: "15px",
        paddingLeft: "15px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        fontSize: "10pt",
      }}
    >
      <span style={{ textDecoration: "underline", fontWeight: 900 }}>
        {props.hesber1}
      </span>
      <br />
      {props.hesber2}
      <br />
      {props.hesber3}
    </div>
  );
}
