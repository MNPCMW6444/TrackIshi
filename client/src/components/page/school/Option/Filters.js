import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function Filters(props) {
  const mofas = props.mofas;
  const people = props.people;
  const sdarot = props.sdarot;
  const sdarotavgsperppl = props.sdarotavgsperppl;

  const filteredmofas = props.filteredmofas;
  const filteredpeople = props.filteredpeople;
  const filteredsdarot = props.filteredsdarot;
  const filteredsdarotavgsperppl = props.filteredsdarotavgsperppl;
  const setfilteredmofas = props.setfilteredmofas;
  const setfilteredpeople = props.setfilteredpeople;
  const setfilteredsdarot = props.setfilteredsdarot;
  const setfilteredsdarotavgsperppl = props.setfilteredsdarotavgsperppl;

  let sdarotlist2 = false;
  let unitlist2 = false;
  let masloollist2 = false;
  let courselist2 = false;

  if (mofas && people && sdarot && sdarotavgsperppl) {
    sdarotlist2 = new Array();

    for (let i = 0; i < sdarot.length; i++) {
      sdarotlist2.push({
        value: sdarot[i],
        label: sdarot[i],
      });
    }

    unitlist2 = new Array(
      { value: "506", label: "506" },
      { value: "509", label: "509" },
      { value: "528", label: "528" }
    );

    masloollist2 = new Array(
      { value: "mesima", label: "משימה" },
      { value: "taavura", label: "תעבורה" },
      { value: "versatili", label: "ורסטילי" },
      { value: "ha", label: "הכשרה" }
    );

    courselist2 = new Array();
    for (let i = 0; i < people.length; i++) {
      let newcourse = true;
      for (let j = 0; j < courselist2.length; j++) {
        if (courselist2[j].value == people[i].CourseNo) newcourse = false;
      }
      if (newcourse) {
        courselist2.push({
          value: people[i].CourseNo,
          label: "" + people[i].CourseNo,
        });
      }
    }
  }

  const [selectedsdarot, selectsdarot] = useState(sdarotlist2);
  const [selectedscourse, selectcourse] = useState([courselist2]);
  const [selectedmaslool, selectmaslool] = useState([masloollist2]);
  const [selectedunit, selectunit] = useState([unitlist2]);

  useEffect(() => {
    if (
      props.allowed &&
      people &&
      people.length &&
      people.length > 0 &&
      sdarotavgsperppl &&
      sdarotavgsperppl.length &&
      sdarotavgsperppl.length > 0 &&
      mofas &&
      mofas.length &&
      mofas.length > 0 &&
      sdarot &&
      sdarot.length &&
      sdarot.length > 0
    ) {
      let cleansdarot = new Array();
      let cleanmofas = new Array();
      for (let i = 0; i < sdarot.length; i++) {
        for (let j = 0; j < selectedsdarot.length; j++) {
          if (sdarot[i] === selectedsdarot[j].value)
            cleansdarot.push(sdarot[i]);
        }
      }

      for (let i = 0; i < mofas.length; i++) {
        for (let j = 0; j < selectedsdarot.length; j++) {
          if (mofas[i].Emda === selectedsdarot[j].value)
            cleanmofas.push(mofas[i]);
        }
      }

      console.log(filteredsdarotavgsperppl);

      setfilteredmofas(cleanmofas);
      setfilteredsdarot(cleansdarot);
    }
  }, [selectedsdarot]);
  useEffect(() => {}, [selectedscourse]);
  useEffect(() => {}, [selectedmaslool]);
  useEffect(() => {}, [selectedunit]);

  if (
    people &&
    people.length &&
    people.length > 0 &&
    sdarotavgsperppl &&
    sdarotavgsperppl.length &&
    sdarotavgsperppl.length > 0 &&
    mofas &&
    mofas.length &&
    mofas.length > 0 &&
    sdarot &&
    sdarot.length &&
    sdarot.length > 0
  ) {
    let sdarotlist = new Array();

    for (let i = 0; i < sdarot.length; i++) {
      sdarotlist.push({
        value: sdarot[i],
        label: sdarot[i],
      });
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
    for (let i = 0; i < people.length; i++) {
      let newcourse = true;
      for (let j = 0; j < courselist.length; j++) {
        if (courselist[j].value == people[i].CourseNo) newcourse = false;
      }
      if (newcourse) {
        courselist.push({
          value: people[i].CourseNo,
          label: "" + people[i].CourseNo,
        });
      }
    }

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
            onChange={selectsdarot}
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
  } else return null;
}
