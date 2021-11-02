import React, {useState} from 'react';
import { useTable, useFilters, useSortBy } from "react-table";

export default function TACHSALTB(props) {

  const goten=props.data; 
    
  for(let i=0; i<goten.length;i++)
    {
      const finil = goten[i].BirthDate.substring(0,10);
      const day = finil.substring(5,7)
      const month = finil.substring(8,10);
      const year= finil.substring(0,4);
      const finili= day+"/"+month+"/"+year;
      goten[i].BirthDate=finili;
      let hebrewMaslool = "לא ידוע";
      switch(goten[i].Maslool){
          case "mesima": hebrewMaslool = "משימה";break;
          case "taavura": hebrewMaslool = "תעבורה";break;
          case "versatili": hebrewMaslool = "ורסטילי";break;
          default: break;
      }
      goten[i].Maslool=hebrewMaslool;
  }

  for(let i=0; i<goten.length;i++)
  {
    goten[i].isMesima=(goten[i].Maslool==="משימה")?"כן":"לא";
    goten[i].isTaavura=(goten[i].Maslool==="תעבורה")?"כן":"לא";
    goten[i].isVersatili=(goten[i].Maslool==="ורסטילי")?"כן":"לא";
  }

  for(let i=0; i<goten.length;i++)
  {
    goten[i].is506=(goten[i].Unit==="יב''א 506")?"כן":"לא";
    goten[i].is509=(goten[i].Unit==="יב''א 509")?"כן":"לא";
    goten[i].is528=(goten[i].Unit==="צוער/ת")?"כן":"לא";
  }

  for(let i=0; i<goten.length;i++)
  {
    goten[i].isSadir=(goten[i].SoogHatsava==="sadir")?"כן":"לא";
    goten[i].isHatsach=(goten[i].SoogHatsava==="hatsach")?"כן":"לא";
    goten[i].isMiluim=(goten[i].SoogHatsava==="miluim")?"כן":"לא";
  }

  for(let i=0; i<goten.length;i++)
  {
    goten[i].isA=(goten[i].Dereg==="a")?"כן":"לא";
    goten[i].isB=(goten[i].Dereg==="b")?"כן":"לא";
    goten[i].isC=(goten[i].Dereg==="c")?"כן":"לא";
    goten[i].isD=(goten[i].Dereg==="d")?"כן":"לא";
  }
  
  for(let i=0; i<goten.length;i++)
  {
    goten[i].isSeren=(goten[i].Rank==="סרן")?"כן":"לא";
    goten[i].isRasan=(goten[i].Rank==="רס\"ן")?"כן":"לא";
    goten[i].isSaal=(goten[i].Rank==="סא\"ל")?"כן":"לא";
    goten[i].isOther=(goten[i].isSeren==="כן"||goten[i].isRasan==="כן"||goten[i].isSaal==="כן")?"לא":"כן";
  }
  


  const data = React.useMemo(
      () => 
        goten,
      []
    );
  
  const columns = React.useMemo(
    () => [
        {
          Header: "יחידה",
          accessor: "Unit",
        },
        {
          Header: "מסלול",
          accessor: "Maslool",
        },
        {
          Header: "קורס",
          accessor: "CourseNo",
        },
        {  
            Header: "מספר אישי",
            accessor: "MA",
        },
        {
            Header: "שם פרטי",
            accessor: "FirstName",
        },
        {
            Header: "שם משפחה",
            accessor: "LastName",
        },
        {
            Header: "כינוי",
            accessor: "NickName",
        },
        {
            Header: "מספר טלפון נייד",
            accessor: "MainPhone",
        },
        {
            Header: "מספר טלפון נוסף למקרה חירום",
            accessor: "EmergencyPhone",
        },
        {
            Header: "עיר מגורים",
            accessor: "AddressCity",
        },
        {
            Header: "כתובת",
            accessor: "AddressLine",
        },
        {
            Header: "דרגה",
            accessor: "Rank",
        },
        {
          Header: "אימייל",
          accessor: "Email",
        },
        {
          Header: "תאריך לידה",
          accessor: "BirthDate",
        },
        {
          Header: "האם משימתי",
          accessor: "isMesima",
          show:false,
        },
        {
          Header: "האם תעבורתי",
          accessor: "isTaavura",
          show:false,
        },
        {
          Header: "האם ורסטילי",
          accessor: "isVersatili",
          show:false,
        },
        {
          Header: "האם 506",
          accessor: "is506",
          show:false,
        },
        {
          Header: "האם 509",
          accessor: "is509",
          show:false,
        },
        {
          Header: "האם צוער",
          accessor: "is528",
          show:false,
        },
        {
          Header: "האם סדיר",
          accessor: "isSadir",
          show:false,
        },
        {
          Header: "האם הצ''ח",
          accessor: "isHatsach",
          show:false,
        },
        {
          Header: "האם מילואים",
          accessor: "isMiluim",
          show:false,
        },
        {
          Header: "האם דרג א",
          accessor: "isA",
          show:false,
        },
        {
          Header: "האם דרג ב",
          accessor: "isB",
          show:false,
        },
        {
          Header: "האם דרג ג",
          accessor: "isC",
          show:false,
        },
        {
          Header: "האם דרג ד",
          accessor: "isD",
          show:false,
        },
        {
          Header: "האם סרן",
          accessor: "isSeren",
          show:false,
        },
        {
          Header: "האם רס''ן",
          accessor: "isRasan",
          show:false,
        },
        {
          Header: "האם סא''ל",
          accessor: "isSaal",
          show:false,
        },
        {
          Header: "האם אחר",
          accessor: "isOther",
          show:false,
        }
    ],
    []
  );
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter
  } = useTable({ columns, data, initialState: {
    hiddenColumns: columns.map(column => {
        if (column.show === false) return column.accessor || column.id;
    }),
  }, }, useFilters);
    
  const [filterInput, setFilterInput] = useState("");

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("MA", value);
    setFilterInput(value);
  };

  const [filterInput2, setFilterInput2] = useState("");

  const handleFilterChange2 = e => {
    const value = e.target.value || undefined;
    setFilter("FirstName", value);
    setFilterInput2(value);
  };

  const [filterInput3, setFilterInput3] = useState("");

  const handleFilterChange3 = e => {
    const value = e.target.value || undefined;
    setFilter("LastName", value);
    setFilterInput3(value);
  };

  const [filterInput4, setFilterInput4] = useState("");

  const handleFilterChange4 = e => {
    const value = e.target.value || undefined;
    setFilter("NickName", value);
    setFilterInput4(value);
  };

  const [filterInput5, setFilterInput5] = useState("");

  const handleFilterChange5 = e => {
    const value = e.target.value || undefined;
    setFilter("CourseNo", value);
    setFilterInput5(value);
  };


  const [mas1clicked, setMas1clicked] = useState(false);
  const [mas2clicked, setMas2clicked] = useState(false);
  const [mas3clicked, setMas3clicked] = useState(false);

  function checkLogic(status)
  {
    if(!status[0] && !status[1] && !status[2])
      return ["", "", ""];

    if(status[0] && !status[1] && !status[2])
      return ["כן","",""];
    if(!status[0] && status[1] && !status[2])
      return ["","כן",""];
    if(!status[0] && !status[1] && status[2])
      return ["", "", "כן"];

    if(status[0] && status[1] && !status[2])
      return ["","","לא"];
    if(status[0] && !status[1] && status[2])
      return ["","לא",""];
    if(!status[0] && status[1] && status[2])
      return ["לא", "", ""];

    if(status[0] && status[1] && status[2])
      return ["", "", ""];
  }

  const handleFilterChange6mesima = e => {
    const res=checkLogic([!mas1clicked, mas2clicked, mas3clicked]);
    setFilter("isMesima", res[0]);
    setFilter("isTaavura", res[1]);
    setFilter("isVersatili", res[2]);
    if(!mas1clicked)
      setMas1clicked(true);
    else
      setMas1clicked(false);
  };

  const handleFilterChange6taavura = e => {
    const res=checkLogic([mas1clicked, !mas2clicked, mas3clicked]);
    setFilter("isMesima", res[0]);
    setFilter("isTaavura", res[1]);
    setFilter("isVersatili", res[2]);
    if(!mas2clicked)
      setMas2clicked(true);
    else
      setMas2clicked(false);
  };

  const handleFilterChange6versatili = e => {
    const res=checkLogic([mas1clicked, mas2clicked, !mas3clicked]);
    setFilter("isMesima", res[0]);
    setFilter("isTaavura", res[1]);
    setFilter("isVersatili", res[2]);
    if(!mas3clicked)
        setMas3clicked(true);
    else
      setMas3clicked(false);
  };

  const [mas1clickedUNIT, setMas1clickedUNIT] = useState(false);
  const [mas2clickedUNIT, setMas2clickedUNIT] = useState(false);
  const [mas3clickedUNIT, setMas3clickedUNIT] = useState(false);


  const handleFilterChange6506 = e => {
    const res=checkLogic([!mas1clickedUNIT, mas2clickedUNIT, mas3clickedUNIT]);
    setFilter("is506", res[0]);
    setFilter("is509", res[1]);
    setFilter("is528", res[2]);
    if(!mas1clickedUNIT)
      setMas1clickedUNIT(true);
    else
      setMas1clickedUNIT(false);
  };

  const handleFilterChange6509 = e => {
    const res=checkLogic([mas1clickedUNIT, !mas2clickedUNIT, mas3clickedUNIT]);
    setFilter("is506", res[0]);
    setFilter("is509", res[1]);
    setFilter("is528", res[2]);
    if(!mas2clickedUNIT)
      setMas2clickedUNIT(true);
    else
      setMas2clickedUNIT(false);
  };

  const handleFilterChange6528 = e => {
    const res=checkLogic([mas1clickedUNIT, mas2clickedUNIT, !mas3clickedUNIT]);
    setFilter("is506", res[0]);
    setFilter("is509", res[1]);
    setFilter("is528", res[2]);
    if(!mas3clickedUNIT)
        setMas3clickedUNIT(true);
    else
      setMas3clickedUNIT(false);
  };
    

  const [mas1clickedHATSAVA, setMas1clickedHATSAVA] = useState(false);
  const [mas2clickedHATSAVA, setMas2clickedHATSAVA] = useState(false);
  const [mas3clickedHATSAVA, setMas3clickedHATSAVA] = useState(false);


  const handleFilterChange6Sadir = e => {
    const res=checkLogic([!mas1clickedHATSAVA, mas2clickedHATSAVA, mas3clickedHATSAVA]);
    setFilter("isSadir", res[0]);
    setFilter("isHatsach", res[1]);
    setFilter("isMiluim", res[2]);
    if(!mas1clickedHATSAVA)
      setMas1clickedHATSAVA(true);
    else
      setMas1clickedHATSAVA(false);
  };

  const handleFilterChange6Hatsach = e => {
    const res=checkLogic([mas1clickedHATSAVA, !mas2clickedHATSAVA, mas3clickedHATSAVA]);
    setFilter("isSadir", res[0]);
    setFilter("isHatsach", res[1]);
    setFilter("isMiluim", res[2]);
    if(!mas2clickedHATSAVA)
      setMas2clickedHATSAVA(true);
    else
      setMas2clickedHATSAVA(false);
  };

  const handleFilterChange6Miluim = e => {
    const res=checkLogic([mas1clickedHATSAVA, mas2clickedHATSAVA, !mas3clickedHATSAVA]);
    setFilter("isSadir", res[0]);
    setFilter("isHatsach", res[1]);
    setFilter("isMiluim", res[2]);
    if(!mas3clickedHATSAVA)
        setMas3clickedHATSAVA(true);
    else
      setMas3clickedHATSAVA(false);
  };
  
  const [mas1clickedDEREG, setMas1clickedDEREG] = useState(false);
  const [mas2clickedDEREG, setMas2clickedDEREG] = useState(false);
  const [mas3clickedDEREG, setMas3clickedDEREG] = useState(false);
  const [mas4clickedDEREG, setMas4clickedDEREG] = useState(false);

  function checkLogic4(status)
  {
    if(!status[0] && !status[1] && !status[2] && !status[3])
      return ["", "", "", ""];

    if(status[0] && !status[1] && !status[2] && !status[3])
      return ["כן","","",""];
    if(!status[0] && status[1] && !status[2] && !status[3])
      return ["","כן","",""];
    if(!status[0] && !status[1] && status[2] && !status[3])
      return ["","","כן",""];
    if(!status[0] && !status[1] && !status[2] && status[3])
      return ["","","","כן"];

    if(status[0] && status[1] && !status[2] && !status[3])
      return ["","","לא","לא"];
    if(!status[0] && status[1] && status[2] && !status[3])
      return ["לא","","","לא"];
    if(!status[0] && !status[1] && status[2] && status[3])
      return ["לא","לא","",""];
    if(status[0] && !status[1] && !status[2] && status[3])
      return ["","לא","לא",""];
    if(!status[0] && status[1] && !status[2] && status[3])
      return ["לא","","לא",""];
    if(status[0] && !status[1] && status[2] && !status[3])
      return ["","לא","","לא"];

    if(status[0] && status[1] && status[2] && !status[3])
      return ["","","","לא"];
    if(status[0] && status[1] && !status[2] && status[3])
      return ["","","לא",""];
    if(status[0] && !status[1] && status[2] && status[3])
      return ["","לא","",""];
    if(!status[0] && status[1] && status[2] && status[3])
      return ["לא","","",""];

    if(status[0] && status[1] && status[2] && status[3])
      return ["", "", "", ""];
  }

  const handleFilterChange6A = e => {
    const res=checkLogic4([!mas1clickedDEREG, mas2clickedDEREG, mas3clickedDEREG, mas4clickedDEREG]);
    setFilter("isA", res[0]);
    setFilter("isB", res[1]);
    setFilter("isC", res[2]);
    setFilter("isD", res[3]);
    if(!mas1clickedDEREG)
      setMas1clickedDEREG(true);
    else
      setMas1clickedDEREG(false);
  };

  const handleFilterChange6B = e => {
    const res=checkLogic4([mas1clickedDEREG, !mas2clickedDEREG, mas3clickedDEREG, mas4clickedDEREG]);
    setFilter("isA", res[0]);
    setFilter("isB", res[1]);
    setFilter("isC", res[2]);
    setFilter("isD", res[3]);
    if(!mas2clickedDEREG)
      setMas2clickedDEREG(true);
    else
      setMas2clickedDEREG(false);
  };

  const handleFilterChange6C = e => {
    const res=checkLogic4([mas1clickedDEREG, mas2clickedDEREG, !mas3clickedDEREG, mas4clickedDEREG]);
    setFilter("isA", res[0]);
    setFilter("isB", res[1]);
    setFilter("isC", res[2]);
    setFilter("isD", res[3]);
    if(!mas3clickedDEREG)
      setMas3clickedDEREG(true);
    else
      setMas3clickedDEREG(false);
  };

  const handleFilterChange6D = e => {
    const res=checkLogic4([mas1clickedDEREG, mas2clickedDEREG, mas3clickedDEREG, !mas4clickedDEREG]);
    setFilter("isA", res[0]);
    setFilter("isB", res[1]);
    setFilter("isC", res[2]);
    setFilter("isD", res[3]);
    if(!mas4clickedDEREG)
      setMas4clickedDEREG(true);
    else
      setMas4clickedDEREG(false);
  };


  const [mas1clickedRank, setMas1clickedRank] = useState(false);
  const [mas2clickedRank, setMas2clickedRank] = useState(false);
  const [mas3clickedRank, setMas3clickedRank] = useState(false);
  const [mas4clickedRank, setMas4clickedRank] = useState(false);

  function checkLogic4(status)
  {
    if(!status[0] && !status[1] && !status[2] && !status[3])
      return ["", "", "", ""];

    if(status[0] && !status[1] && !status[2] && !status[3])
      return ["כן","","",""];
    if(!status[0] && status[1] && !status[2] && !status[3])
      return ["","כן","",""];
    if(!status[0] && !status[1] && status[2] && !status[3])
      return ["","","כן",""];
    if(!status[0] && !status[1] && !status[2] && status[3])
      return ["","","","כן"];

    if(status[0] && status[1] && !status[2] && !status[3])
      return ["","","לא","לא"];
    if(!status[0] && status[1] && status[2] && !status[3])
      return ["לא","","","לא"];
    if(!status[0] && !status[1] && status[2] && status[3])
      return ["לא","לא","",""];
    if(status[0] && !status[1] && !status[2] && status[3])
      return ["","לא","לא",""];
    if(!status[0] && status[1] && !status[2] && status[3])
      return ["לא","","לא",""];
    if(status[0] && !status[1] && status[2] && !status[3])
      return ["","לא","","לא"];

    if(status[0] && status[1] && status[2] && !status[3])
      return ["","","","לא"];
    if(status[0] && status[1] && !status[2] && status[3])
      return ["","","לא",""];
    if(status[0] && !status[1] && status[2] && status[3])
      return ["","לא","",""];
    if(!status[0] && status[1] && status[2] && status[3])
      return ["לא","","",""];

    if(status[0] && status[1] && status[2] && status[3])
      return ["", "", "", ""];
  }

  const handleFilterChange6Seren = e => {
    const res=checkLogic4([!mas1clickedRank, mas2clickedRank, mas3clickedRank, mas4clickedRank]);
    setFilter("isSeren", res[0]);
    setFilter("isRasan", res[1]);
    setFilter("isSaal", res[2]);
    setFilter("isOther", res[3]);
    if(!mas1clickedRank)
      setMas1clickedRank(true);
    else
      setMas1clickedRank(false);
  };

  const handleFilterChange6Rasan = e => {
    const res=checkLogic4([mas1clickedRank, !mas2clickedRank, mas3clickedRank, mas4clickedRank]);
    setFilter("isSeren", res[0]);
    setFilter("isRasan", res[1]);
    setFilter("isSaal", res[2]);
    setFilter("isOther", res[3]);
    if(!mas2clickedRank)
      setMas2clickedRank(true);
    else
      setMas2clickedRank(false);
  };

  const handleFilterChange6Saal = e => {
    const res=checkLogic4([mas1clickedRank, mas2clickedRank, !mas3clickedRank, mas4clickedRank]);
    setFilter("isSeren", res[0]);
    setFilter("isRasan", res[1]);
    setFilter("isSaal", res[2]);
    setFilter("isOther", res[3]);
    if(!mas3clickedRank)
      setMas3clickedRank(true);
    else
      setMas3clickedRank(false);
  };

  const handleFilterChange6Other = e => {
    const res=checkLogic4([mas1clickedRank, mas2clickedRank, mas3clickedRank, !mas4clickedRank]);
    setFilter("isSeren", res[0]);
    setFilter("isRasan", res[1]);
    setFilter("isSaal", res[2]);
    setFilter("isOther", res[3]);
    if(!mas4clickedRank)
      setMas4clickedRank(true);
    else
      setMas4clickedRank(false);
  };


  return (
    <div className="filtersAndTable" key={props.data} key={props.data}>
      <div className="allfilters">
      <table><tbody><tr className="filtersbigrow"><td >
        <div className="buttonfilters">
          <div className="filterHeaderROW">
            <button className="filterHeader">לפי יחידה:</button>
            <button className="filterbigSpace"></button>
            <button className={"filterBTNof3"+mas1clickedUNIT} onClick={handleFilterChange6506}>506</button>
            <button className="filterSpace"></button>
            <button className={"filterBTNof3"+mas2clickedUNIT} onClick={handleFilterChange6509}>509</button>
            <button className="filterSpace"></button>
            <button className={"filterBTNof3"+mas3clickedUNIT} onClick={handleFilterChange6528}>צוערים</button>
          </div>
          <div className="filterHeaderROW">
            <button className="filterHeader">לפי מסלול:</button>
            <button className="filterbigSpace"></button>
            <button className={"filterBTNof3"+mas1clicked} onClick={handleFilterChange6mesima}>משימה</button>
            <button className="filterSpace"></button>
            <button className={"filterBTNof3"+mas2clicked} onClick={handleFilterChange6taavura}>תעבורה</button>
            <button className="filterSpace"></button>
            <button className={"filterBTNof3"+mas3clicked} onClick={handleFilterChange6versatili}>ורסטילי</button>
          </div>
          <div className="filterHeaderROW">
            <button className="filterHeader">לפי הצבה:</button>
            <button className="filterbigSpace"></button>
            <button className={"filterBTNof3"+mas1clickedHATSAVA} onClick={handleFilterChange6Sadir}>סדיר</button>
            <button className="filterSpace"></button>
            <button className={"filterBTNof3"+mas2clickedHATSAVA} onClick={handleFilterChange6Hatsach}>הצ"ח</button>
            <button className="filterSpace"></button>
            <button className={"filterBTNof3"+mas3clickedHATSAVA} onClick={handleFilterChange6Miluim}>מילואים</button>
          </div>
          <div className="filterHeaderROW">
            <button className="filterHeader">לפי דרג מקצועי:</button>
            <button className="filterbigSpace"></button>
            <button className={"filterBTNof4"+mas1clickedDEREG} onClick={handleFilterChange6A}>א'</button>
            <button className="filterSmallSpace"></button>
            <button className={"filterBTNof4"+mas2clickedDEREG} onClick={handleFilterChange6B}>ב'</button>
            <button className="filterSmallSpace"></button>
            <button className={"filterBTNof4"+mas3clickedDEREG} onClick={handleFilterChange6C}>ג'</button>
            <button className="filterSmallSpace"></button>
            <button className={"filterBTNof4"+mas4clickedDEREG} onClick={handleFilterChange6D}>ד'</button>
          </div>
          <div className="filterHeaderROW">
            <button className="filterHeader">לפי דרגה:</button>
            <button className="filterbigSpace"></button>
            <button className={"filterBTNof4"+mas1clickedRank} onClick={handleFilterChange6Seren}>סרן</button>
            <button className="filterSmallSpace"></button>
            <button className={"filterBTNof4"+mas2clickedRank} onClick={handleFilterChange6Rasan}>רס"ן</button>
            <button className="filterSmallSpace"></button>
            <button className={"filterBTNof4"+mas3clickedRank} onClick={handleFilterChange6Saal}>סא"ל</button>
            <button className="filterSmallSpace"></button>
            <button className={"filterBTNof4"+mas4clickedRank} onClick={handleFilterChange6Other}>אחר</button>
          </div>
        </div>
      </td>
      <td>
        <div className="inputfilters">
          <button className="filterHeader">לפי קורס:</button>
          <button className="filterbigSpace"></button>
          <input className="inputfilterINPUT"
            value={filterInput5}
            onChange={handleFilterChange5}
            placeholder={"הקלד קורס"}
          />
          <br/>
          <button className="filterHeader">לפי שם פרטי:</button>
          <button className="filterbigSpace"></button>
          <input className="inputfilterINPUT"
            value={filterInput2}
            onChange={handleFilterChange2}
            placeholder={"הקלד שם פרטי"}
          />
          <br/>
          <button className="filterHeader">לפי שם משפחה:</button>
          <button className="filterbigSpace"></button>
          <input className="inputfilterINPUT"
            value={filterInput3}
            onChange={handleFilterChange3}
            placeholder={"הקלד שם משפחה"}
          />
          <br/>
          <button className="filterHeader">לפי כינוי:</button>
          <button className="filterbigSpace"></button>
          <input className="inputfilterINPUT"
            value={filterInput4}
            onChange={handleFilterChange4}
            placeholder={"הקלד כינוי"}
            />
          <br/>
          <button className="filterHeader">לפי מספר אישי:</button>
          <button className="filterbigSpace"></button>
          <input className="inputfilterINPUT"
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"הקלד מספר אישי"}
          />
          <br/>
        </div>
      </td></tr></tbody></table>
      <br/><br/>
        <br/>
      </div>
      {((mas2clickedUNIT||mas3clickedUNIT||mas1clicked||mas2clicked||mas3clicked||mas1clickedHATSAVA||mas2clickedHATSAVA||mas3clickedHATSAVA||mas1clickedDEREG||mas2clickedDEREG||mas3clickedDEREG||mas4clickedDEREG||mas1clickedRank||mas2clickedRank||mas3clickedRank||mas4clickedRank) || (filterInput!=="" ||filterInput2!=="" ||filterInput3!=="" ||filterInput4!=="" ||filterInput5!=="")) && <div className="cleanFilters">
        <button>נקה את כל הסינונים</button>
        <br/>
      </div>} <br/>
      <table className="theTable"{...getTableProps()} >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th class="theTableTH"
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr className="theTableTR" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td className="theTableTD"
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
