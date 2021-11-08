import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Line,
  Label,
} from "recharts";

export default function Lchart(props) {
  function criteriatoName(criteria) {
    switch (criteria) {
      case "C1":
        return "למידה";
      case "C2":
        return "תכנון";
      case "C3":
        return "תפיסה מרחבית";
      case "C4":
        return 'חלק"ש';
      case "C5":
        return "תקשורת";
      case "C6":
        return "עומס";
      case "C7":
        return "קבלת החלטות";
      case "C8":
        return "הפעלה";
      case "C9":
        return "תחקור";
      default:
        return "ציון מסכם";
    }
  }

  function numtotext(number) {
    let tkufaNum = number;
    let TkufaYear = tkufaNum % 2 === 0 ? tkufaNum / 2 : tkufaNum / 2 + 0.5;
    let tkufainYear = tkufaNum % 2 === 0 ? "2" : "1";
    let yearString = TkufaYear.toString();
    let countD = 0;
    for (let i = 0; i < 4 - yearString.length; i++) countD++;
    let addex = "";
    for (let i = 0; i < countD; i++) addex = addex + "0";
    let finilTkufa = tkufainYear + "." + addex + yearString;
    try {
      return finilTkufa;
    } catch (err) {
      console.log(err);
    }
  }

  let criteria = props.data;
  let allDATA = props.allDATA.reverse();
  let data = Array.from(allDATA.length);

  for (let i = 0; i < allDATA.length; i++) {
    data[i] = {
      tkufa: numtotext(allDATA[i].Tkufa),
      [criteria]: allDATA[i][criteria],
    };
  }

  return (
    <div className={"chartdiv" + (props.isShown ? "show" : "")}>
      <span className="chart">
        <LineChart width={730} height={250} data={data}>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            horizontalPoints={[25, 49, 71, 95, 118, 142, 165]}
          />
          <XAxis dataKey="tkufa" padding={{ right: 20, left: 20 }} />
          <YAxis
            type="number"
            domain={[4, 10]}
            padding={{ bottom: 15, top: 20 }}
            height={50}
            minTickGap={1}
            ticks={[4, 5, 6, 7, 8, 9, 10]}
            allowDecimals={false}
          >
            <Label
              value="סולם חיל האוויר"
              angle={-90}
              position="insideBottom"
              offset={80}
            />
          </YAxis>
          <Legend verticalAlign="bottom" height={36} />
          <Line
            name={
              criteriatoName(criteria) === "ציון מסכם"
                ? criteriatoName(criteria)
                : "ציון ב" + criteriatoName(criteria)
            }
            type="monotone"
            dataKey={criteria}
            stroke="#8884d8"
          />
        </LineChart>
      </span>
    </div>
  );
}
