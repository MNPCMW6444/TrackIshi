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
  if (props.allDATA) {
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
    let allAVGSgapi = props.avgs.data.gapi.reverse();
    for (let i = 0; i < allAVGSgapi.length; i++)
      for (var k in allAVGSgapi[i].avg)
        allAVGSgapi[i][k] = allAVGSgapi[i].avg[k];

    let entries;
    let capsEntries;
    for (let i = 0; i < allAVGSgapi.length; i++) {
      entries = Object.entries(allAVGSgapi[i]);
      capsEntries = entries.map((entry) => [
        entry[0][0].toUpperCase() + entry[0].slice(1),
        entry[1],
      ]);
      allAVGSgapi[i] = Object.fromEntries(capsEntries);
    }

    let allAVGScursi = props.avgs.data.cursi.reverse();
    for (let i = 0; i < allAVGScursi.length; i++)
      for (var k in allAVGScursi[i].avg)
        allAVGScursi[i][k] = allAVGScursi[i].avg[k];

    for (let i = 0; i < allAVGScursi.length; i++) {
      entries = Object.entries(allAVGScursi[i]);
      capsEntries = entries.map((entry) => [
        entry[0][0].toUpperCase() + entry[0].slice(1),
        entry[1],
      ]);
      allAVGScursi[i] = Object.fromEntries(capsEntries);
    }

    let data = Array.from(allDATA.length);
    for (let i = 0; i < allDATA.length; i++) {
      data[i] = {
        tkufa: numtotext(allDATA[i].Tkufa),
        [criteria]: allDATA[i][criteria],
        [criteria + "g"]: allAVGSgapi[i] && allAVGSgapi[i][criteria],
        [criteria + "c"]: allAVGScursi[i] && allAVGScursi[i][criteria],
      };
    }

    return (
      <div className={"chartdiv"}>
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
                //   criteriatoName(criteria) === "ציון מסכם"
                // ? criteriatoName(criteria)
                // :
                "ציון אישי"
                //"ציון ב" + criteriatoName(criteria)
              }
              type="linear"
              dataKey={criteria}
              stroke="#0000ff"
            />
            <Line
              name={
                //criteriatoName(criteria + "c") === "ציון מסכם"
                //  ? criteriatoName(criteria + "c")
                //:
                "ממוצע קורסי"
                //"ציון ב" + criteriatoName(criteria)
              }
              type="linear"
              dataKey={criteria + "c"}
              stroke="#ff0000"
            />
            <Line
              name={
                // criteriatoName(criteria + "g") === "ציון מסכם"
                //  ? criteriatoName(criteria + "g")
                // :
                "ממוצע גפי"
                //"ציון ב" + criteriatoName(criteria)
              }
              type="linear"
              dataKey={criteria + "g"}
              stroke="#00ff00"
            />
          </LineChart>
        </span>
      </div>
    );
  } else return null;
}
