import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import icon1 from "../../../../logos and fonts/1-48.png";
import icon2 from "../../../../logos and fonts/2-48.png";
import icon3 from "../../../../logos and fonts/3-48.png";
import icon4 from "../../../../logos and fonts/4-48.png";
import icon5 from "../../../../logos and fonts/5-48.png";
import icon6 from "../../../../logos and fonts/6-48.png";

export default function Timeline(props) {
  const mesimac = [
    "צוער בקרה אווירית",
    "b",
    "קצין טכני",
    "b",
    "קרבות",
    "b",
    "קצין בקרה אווירית",
    "b",
    "יהלום",
    "כיפ''ב",
    "קלע דוד",
    "הג''ר",
    "משימות עזר",
    "תובלייט",
    "קזת''א",
    "גילוי עיטם",
    "b",
    "קמנ''ק דרג א'",
    "b",
    "יירוט בט''ש",
    "בת''ק בט''ש",
    "צילום",
    "חילוץ בט''ש",
    "מתארים",
    "b",
    "מ''ע אימון",
    "b",
    "ועדת דרג ב'",
    "b",
    "מ''ע משולב",
    "קמנ''ק דרג ב'",
    "b",
    "הגנ''ש",
    "חילוץ לחימה",
    "איסוף",
    "אוצר",
    "בת''ק קרב",
    "בת''ק מסוקים",
    "b",
    "מנהל הגנ''א",
    "b",
    "מפקד תורן",
    "b",
    "מ''ע לחימה",
    "b",
    "מנהל לחימה",
  ];
  const taavurac = [
    "צוער בקרה אווירית",
    "b",
    "קצין טכני",
    "b",
    "קרבות",
    "b",
    "קצין בקרה אווירית",
    "b",
    "יהלום",
    "כיפ''ב",
    "קלע דוד",
    "הג''ר",
    "משימות עזר",
    "תובלייט",
    "קזת''א",
    "גילוי עיטם",
    "b",
    "קמנ''ק דרג א'",
    "b",
    "תובלות",
    "b",
    "מחוברת",
    "b",
    "עפרוני",
    "b",
    "בק''צ",
    "b",
    "מתאם אימון",
    "b",
    "חמש''ס",
    "b",
    "ועדת דרג ב'",
    "b",
    "מנהל תעבורה דרג ב'",
    "b",
    "משימות שוהות",
    "כטמ''מ תא שטח",
    "תיבה אווירית",
    "תדלוק לחימה",
    "b",
    "מרחבי",
    "b",
    "מנהל תעבורה דרג ג'",
  ];
  const versatilic = [
    "צוער בקרה אווירית",
    "b",
    "קצין טכני",
    "b",
    "קרבות",
    "b",
    "קצין בקרה אווירית",
    "b",
    "יהלום",
    "כיפ''ב",
    "קלע דוד",
    "הג''ר",
    "משימות עזר",
    "תובלייט",
    "קזת''א",
    "גילוי עיטם",
    "b",
    "קמנ''ק דרג א'",
    "b",
    "תובלות",
    "b",
    "מחוברת",
    "b",
    "עפרוני",
    "b",
    "בק''צ",
    "b",
    "מתאם אימון",
    "b",
    "חמש''ס",
    "b",
    "ועדת דרג ב'",
    "b",
    "מנהל תעבורה דרג ב'",
    "b",
    "משימות שוהות",
    "כטמ''מ תא שטח",
    "תיבה אווירית",
    "תדלוק לחימה",
    "b",
    "מרחבי",
    "b",
    "מנהל תעבורה דרג ג'",
  ];

  //let taavurati = (props.crewmobject.Maslool==="taavura");
  let taavurati = false;
  let relevant = props.crewmobject.Maslool === "mesima" ? mesimac : mesimac; //versatilic;
  if (taavurati) relevant = taavurac;
  relevant = relevant.filter((e) => e !== "b");
  let needed = relevant.length;
  let doneverified = 0;
  relevant.forEach((neededcer) => {
    for (let i = 0; i < props.cersarray.length; i++)
      if (neededcer === props.cersarray[i].Name) doneverified++;
  });
  // let deregCode = 1; // 0
  // let deregCode = 15; // a
  // let deregCode = 22; // b
  // let deregCode = 30; // c
  // let deregCode = 35; // d
  let deregCode;
  switch (props.crewmobject.Dereg) {
    case "a":
      deregCode = 15;
      break;
    case "b":
      deregCode = 22;
      break;
    case "c":
      deregCode = 30;
      break;
    case "d":
      deregCode = 35;
      break;
    default:
      deregCode = 1;
      break;
  }
  let percentage = (deregCode / needed) * 100;
  let s1 = 0;
  let s2;
  for (let i = 0; i < relevant.length; i++)
    if (relevant[i] === "קצין בקרה אווירית") {
      s2 = ((i + 1) / needed) * 100;
      break;
    }
  let s3;
  for (let i = 0; i < relevant.length; i++)
    if (relevant[i] === "קמנ''ק דרג א'") {
      s3 = ((i + 1) / needed) * 100;
      break;
    }
  let s4;
  for (let i = 0; i < relevant.length; i++)
    if (relevant[i] === "ועדת דרג ב'") {
      s4 = ((i + 1) / needed) * 100;
      break;
    }
  let s5;
  for (let i = 0; i < relevant.length; i++)
    if (relevant[i] === "מנהל הגנ''א" || relevant[i] === "מנהל תעבורה דרג ג'") {
      s5 = ((i + 1) / needed) * 100;
      break;
    }
  let s6;
  for (let i = 0; i < relevant.length; i++)
    if (relevant[i] === "מנהל לחימה") {
      s6 = ((i + 1) / needed) * 100;
      break;
    }

  return (
    <ProgressBar
      percent={percentage}
      filledBackground="linear-gradient(to righ,  #fefb7,  #f0bb31)"
      stepPositions={
        !taavurati ? [s1, s2, s3, s4, s5, s6] : [s1, s2, s3, s4, s5, 100]
      }
    >
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 87}%)` }}
            width="40"
            src={icon1}
            alt="description of asd"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 87}%)` }}
            width="44"
            src={icon2}
            alt="description of asd"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 87}%)` }}
            width="35"
            src={icon3}
            alt="description of asd"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 87}%)` }}
            width="38"
            src={icon4}
            alt="description of asd"
          />
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished }) => (
          <img
            style={{ filter: `grayscale(${accomplished ? 0 : 87}%)` }}
            width="39"
            src={icon5}
            alt="description of asd"
          />
        )}
      </Step>
      {!taavurati ? (
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 87}%)` }}
              width="38"
              src={icon6}
              alt="description of asd"
            />
          )}
        </Step>
      ) : (
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 87}%)` }}
              width="0"
            />
          )}
        </Step>
      )}
    </ProgressBar>
  );
}
