import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";

export default function Filters(props) {
  const mofas = props.mofas;
  const people = props.people;
  const sdarot = props.sdarot;
  const sdarotavgsperppl = props.sdarotavgsperppl;
  const indextoremove = props.indextoremove;

  const filteredmofas = props.filteredmofas;
  const filteredpeople = props.filteredpeople;
  const filteredsdarot = props.filteredsdarot;
  const filteredsdarotavgsperppl = props.filteredsdarotavgsperppl;
  const setfilteredmofas = props.setfilteredmofas;
  const setfilteredpeople = props.setfilteredpeople;
  const setfilteredsdarot = props.setfilteredsdarot;
  const setindextoremove = props.setindextoremove;

  let sdarotlist2 = false;
  let unitlist2 = false;
  let masloollist2 = false;
  let courselist2 = false;
  let nicknamelist2 = false;

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


    nicknamelist2 = new Array();
    for (let i = 0; i < people.length; i++) {
      let newnickname = true;
      for (let j = 0; j < nicknamelist2.length; j++) {
        if (nicknamelist2[j].value == people[i].NickName) newnickname = false;
      }
      if (newnickname) {
        nicknamelist2.push({
          value: people[i].NickName,
          label: "" + people[i].NickName,
        });
      }
    }
  }

  const [selectedsdarot, selectsdarot] = useState(sdarotlist2);
  const [selectedcourse, selectcourse] = useState(courselist2);
  const [selectedmaslool, selectmaslool] = useState(masloollist2);
  const [selectedunit, selectunit] = useState(unitlist2);
  const [selectednickname, selectnickname] = useState(nicknamelist2);

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
      for (let i = 0; i < sdarot.length; i++) {
        for (let j = 0; j < selectedsdarot.length; j++) {
          if (sdarot[i] === selectedsdarot[j].value)
            cleansdarot.push(sdarot[i]);
        }
      }
      setfilteredsdarot(cleansdarot);

      let cleanmofas = new Array();
      for (let i = 0; i < mofas.length; i++) {
        for (let j = 0; j < selectedsdarot.length; j++) {
          if (mofas[i].Emda === selectedsdarot[j].value)
            cleanmofas.push(mofas[i]);
        }
      }
      setfilteredmofas(cleanmofas);

      let cleandsdarotavgsperppl = new Array(sdarotavgsperppl);
      cleandsdarotavgsperppl = cleandsdarotavgsperppl[0];
      let indexesToRemove = new Array();
      let jj = 0;
      for (let i = 0; i < sdarot.length; i++) {
        if (!cleansdarot[jj] || sdarot[i] !== cleansdarot[jj])
          indexesToRemove.push(i);
        else jj++;
      }
      setindextoremove(indexesToRemove);

      /* 
      for (let i = 0; i < cleandsdarotavgsperppl.length; i++)
        for (let j = 0; j < cleandsdarotavgsperppl[i].length; j++)
          for (let k = 0; k < indexesToRemove.length; k++)
            if (j === indexesToRemove[k])
              cleandsdarotavgsperppl[i].splice(j, 1);
      setfilteredsdarotavgsperppl(cleandsdarotavgsperppl); */
      /* 
      let sdtavgsperppl = new Array();
      for (let i = 0; i < cleansdarot.length; i++) {
        let avgofperson = new Array();
        for (let k = 0; k < filteredpeople.length; k++) {
          let avg = 0;
          let count = 0;
          for (let j = 0; j < cleanmofas.length; j++) {
            if (
              cleanmofas[j].Emda === cleansdarot[i] &&
              cleanmofas[j].sMA === filteredpeople[k].MA
            ) {
              avg += cleanmofas[j].M1;
              count++;
            }
          }
          avg /= count;
          avgofperson.push(avg);
        }
        sdtavgsperppl.push(avgofperson);
      }
      setfilteredsdarotavgsperppl(sdtavgsperppl); */
    }
  }, [selectedsdarot]);
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
      let cleanpeople = new Array();
      for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < selectedcourse.length; j++) {
          if (people[i].CourseNo === selectedcourse[j].value)
            cleanpeople.push(people[i]);
        }
      }
      setfilteredpeople(cleanpeople);
    }
  }, [selectedcourse]);
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
      let cleanpeople = new Array();
      for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < selectedmaslool.length; j++) {
          if (people[i].Maslool === selectedmaslool[j].value)
            cleanpeople.push(people[i]);
        }
      }
      setfilteredpeople(cleanpeople);
    }
  }, [selectedmaslool]);
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
      let cleanpeople = new Array();
      for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < selectedunit.length; j++) {
          if (people[i].Unit === selectedunit[j].value)
            cleanpeople.push(people[i]);
        }
      }
      setfilteredpeople(cleanpeople);
    }
  }, [selectedunit]);

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
      let cleanpeople = new Array();
      for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < selectednickname.length; j++) {
          if (people[i].NickName === selectednickname[j].value)
            cleanpeople.push(people[i]);
        }
      }
      setfilteredpeople(cleanpeople);
    }
  }, [selectednickname]);

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

    let nicknamelist = new Array();
    for (let i = 0; i < people.length; i++) {
      let newnickname = true;
      for (let j = 0; j < nicknamelist.length; j++) {
        if (nicknamelist[j].value == people[i].NickName) newnickname = false;
      }
      if (newnickname) {
        nicknamelist.push({
          value: people[i].NickName,
          label: "" + people[i].NickName,
        });
      }
    }

    return (
      <div>
        <br />
        <br />
        <br />
        <div style={{ display: "inline-block", width: "65%" }}>
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
        </div>
          <div style={{ display: "inline-block", width: "5%" }}></div>
          <div style={{ display: "inline-block", width: "30%" }}>
            <div style={{ textAlign: "center", fontWeight: "bold" }}>
              סינון לפי כינוי:
            </div>{" "}
            <br />
            <div>
              <MultiSelect
                options={nicknamelist}
                value={selectednickname}
                onChange={selectnickname}
                labelledBy="Select"
              />
            </div>
          </div>
        <br />
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
                value={selectedcourse}
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
