import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function Filters(props) {
  const [selectedsdarot, selectsidra] = useState([]);
  const [selectedscourse, selectcourse] = useState([]);
  const [selectedmaslool, selectmaslool] = useState([]);
  const [selectedunit, selectunit] = useState([]);

  const mofas = props.mofas;
  const people = props.people;
  const sdarot = props.sdarot;
  const sdarotavgsperppl = props.sdarotavgsperppl;
  const setmofas = props.setmofas;
  const setpeople = props.setpeople;
  const setsdarot = props.setsdarot;
  const setsdarotavgsperppl = props.setsdarotavgsperppl;

  let sdarotlist = new Array();

  for (let i = 0; i < sdarot.length; i++) {
    sdarotlist.push({ label: sdarot[i], value: sdarot[i] });
  }

  let unitlist = new Array(
    { value: "506", label: "506" },
    { value: "509", label: "509" },
    { value: "528", label: "528" }
  );

  let masloollist = new Array(
    { value: "mesima", label: "משימה" },
    { value: "taavura", label: "תעבורה" },
    { value: "versatili", label: "ורסטילי" },
    { value: "ha", label: "הכשרה" }
  );

  let courselist = new Array();
  for (let i = 0; i < 1000; i++) {
    courselist.push({ value: i, label: "" + i });
  }

  useEffect(() => {
    let cleanSdarot = new Array();
    for (let i = 0; i < sdarot.length; i++) {
      for (let j = 0; j < selectedsdarot.length; j++) {
        if (sdarot[i] === selectedsdarot[j].value) cleanSdarot.push(sdarot[i]);
      }
    }
    setsdarot(cleanSdarot);
  }, [selectedsdarot]);
  useEffect(() => {}, [selectedscourse]);
  useEffect(() => {}, [selectedmaslool]);
  useEffect(() => {}, [selectedunit]);

  return (
    <div>
      {" "}
      <br />
      <br />
      <br />
      <div style={{ textAlign: "center", fontWeight: "bold" }}>
        סינון לפי סדרה:
      </div>{" "}
      <br />
      <div>
        <MultiSelect
          options={sdarotlist}
          value={selectedsdarot}
          onChange={selectsidra}
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
              options={courselist}
              value={selectedscourse}
              onChange={selectcourse}
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
              options={masloollist}
              value={selectedmaslool}
              onChange={selectmaslool}
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
              options={unitlist}
              value={selectedunit}
              onChange={selectunit}
              labelledBy="Select"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
