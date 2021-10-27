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
      
      const data = React.useMemo(
          () => 
            goten,
          []
        );
    
      const columns = React.useMemo(
        () => [
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
                Header: "קורס",
                accessor: "CourseNo",
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
              Header: "מסלול",
              accessor: "Maslool",
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
              Header: "יחידה",
              accessor: "Unit",
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
        debugger;
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
      debugger;
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
      debugger;
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
    

    return (
        <div key={props.data} key={props.data}>
          <br/><br/><br/>
          <div className="MasloolFilter">
            <button className="MasloolFilterBH">יחידה:</button>
            <button className="MasloolFilterBSs"></button>
            <button className={"MasloolFilterB"+mas1clickedUNIT} onClick={handleFilterChange6506}>506</button>
            <button className="MasloolFilterBS"></button>
            <button className={"MasloolFilterB"+mas2clickedUNIT} onClick={handleFilterChange6509}>509</button>
            <button className="MasloolFilterBS"></button>
            <button className={"MasloolFilterB"+mas3clickedUNIT} onClick={handleFilterChange6528}>צוערים</button>
          </div><br/>
          <div className="MasloolFilter">
            <button className="MasloolFilterBH">מסלול:</button>
            <button className="MasloolFilterBSs"></button>
            <button className={"MasloolFilterB"+mas1clicked} onClick={handleFilterChange6mesima}>משימה</button>
            <button className="MasloolFilterBS"></button>
            <button className={"MasloolFilterB"+mas2clicked} onClick={handleFilterChange6taavura}>תעבורה</button>
            <button className="MasloolFilterBS"></button>
            <button className={"MasloolFilterB"+mas3clicked} onClick={handleFilterChange6versatili}>ורסטילי</button>
          </div><br/>
          <div className="MasloolFilter">
            <button className="MasloolFilterBH">הצבה:</button>
            <button className="MasloolFilterBSs"></button>
            <button className={"MasloolFilterB"+mas1clickedHATSAVA} onClick={handleFilterChange6Sadir}>סדיר</button>
            <button className="MasloolFilterBS"></button>
            <button className={"MasloolFilterB"+mas2clickedHATSAVA} onClick={handleFilterChange6Hatsach}>הצ"ח</button>
            <button className="MasloolFilterBS"></button>
            <button className={"MasloolFilterB"+mas3clickedHATSAVA} onClick={handleFilterChange6Miluim}>מילואים</button>
          </div><br/>
          <div className="MasloolFilter">
            <button className="MasloolFilterBH">דרג מקצועי:</button>
            <button className="MasloolFilterBSs"></button>
            <button className={"MasloolFilterB"+mas1clicked} onClick={handleFilterChange6mesima}>א'</button>
            <button className="MasloolFilterBS"></button>
            <button className={"MasloolFilterB"+mas2clicked} onClick={handleFilterChange6taavura}>ב'</button>
            <button className="MasloolFilterBS"></button>
            <button className={"MasloolFilterB"+mas3clicked} onClick={handleFilterChange6versatili}>ג'</button>
            <button className="MasloolFilterBS"></button>
            <button className={"MasloolFilterB"+mas3clicked} onClick={handleFilterChange6versatili}>ד'</button>
          </div><br/><br/><br/>
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
            <thead>
            <tr><td><input
              style={{width:"90px"}}
              value={filterInput}
              onChange={handleFilterChange}
              placeholder={"לפי מספר אישי"}
            /></td>
            <td><input
              style={{width:"90px"}}
              value={filterInput2}
              onChange={handleFilterChange2}
              placeholder={"לפי שם פרטי"}
            /></td>
            <td><input
              style={{width:"90px"}}
              value={filterInput3}
              onChange={handleFilterChange3}
              placeholder={"לפי שם משפחה"}
            /></td>
            <td><input
              style={{width:"90px"}}
              value={filterInput4}
              onChange={handleFilterChange4}
              placeholder={"לפי כינוי"}
              /></td>
            <td><input
              style={{width:"90px"}}
              value={filterInput5}
              onChange={handleFilterChange5}
              placeholder={"לפי קורס"}
            /></td>
            <td></td></tr>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: 'solid 3px red',
                        background: 'aliceblue',
                        color: 'black',
                        fontWeight: 'bold',
                      }}
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
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          style={{
                            padding: '10px',
                            border: 'solid 1px gray',
                            background: 'papayawhip',
                            textAlign: "center",
                            fontWeight: "bold"
                          }}
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
        
    )
}
