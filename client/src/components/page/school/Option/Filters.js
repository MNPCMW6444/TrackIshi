import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function Filters(props) {
  const [selectedsidra, selectsidra] = useState();
  const [selectedscourse, selectcourse] = useState();
  const [selectedmaslool, selectmaslool] = useState();
  const [selectedunit, selectunit] = useState();

  const mofas = props.mofas;
  const people = props.people;
  const sdarot = props.sdarot;
  const sdarotavgsperppl = props.sdarotavgsperppl;
  const setmofas = props.setmofas;
  const setpeople = props.setpeople;
  const setsdarot = props.setsdarot;
  const setsdarotavgsperppl = props.setsdarotavgsperppl;
  if (
    people &&
    people.length &&
    people.length > 0 &&
    mofas &&
    mofas.length &&
    mofas.length > 0 &&
    sdarotavgsperppl &&
    sdarotavgsperppl.length &&
    sdarotavgsperppl.length > 0 &&
    sdarot &&
    sdarot.length &&
    sdarot.length > 0
  ) {
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

    return (
      people &&
      people.length &&
      people.length > 0 &&
      mofas &&
      mofas.length &&
      mofas.length > 0 &&
      sdarotavgsperppl &&
      sdarotavgsperppl.length &&
      sdarotavgsperppl.length > 0 &&
      sdarot &&
      sdarot.length &&
      sdarot.length > 0 && (
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
              value={selectedsidra}
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
      )
    );
  }
  return null;
}
