import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import domain from "../../../../util/domain";
import NACHSALTBKAHAD from "./nachsaltable/TACHSALTBKAHAD";
import ErrorMessage from "../../../messages/ErrorMessage";
import Modal from "react-modal";
import UserContext from "../../../../context/UserContext";

import SuccessMessage from "../../../messages/SuccessMessage";
import SuccessMessage2 from "../../../messages/SuccessMessage2";



export default function NACHSALKAHAD() {

  const { user } = useContext(UserContext);
  const [ma, setMA] = useState();

  const [falg, setfalg] = useState(false);
  const [did, setdid] = useState(false);

  const [ffirstname, fsetFirstname] = useState();
  const [flastname, fsetLastname] = useState();
  const [fnickname, fsetNickname] = useState();
  const [fcourseno, fsetCourseno] = useState();
  const [fbirthdate, fsetBirthdate] = useState();
  const [femail, fsetEmail] = useState();
  const [fmainphone, fsetMainphone] = useState();
  const [femergencyphone, fsetEmergencyphone] = useState();
  const [faddresscity, fsetAddresscity] = useState();
  const [faddressline, fsetAddressline] = useState();
  const [frank, fsetRank] = useState("צוער");
  const [funit, fsetUnit] = useState("528");
  const [fsoogHatsava, fsetSoogHatsava] = useState("סדיר");
  const [fmaslool, fsetMaslool] = useState("הכשרה");

//תוספות לדרג
  const [fdereg, fsetDereg] = useState("א'");

//תוספת למקצוע ואוכלוסייה
  const [profe, setprofe] = useState();
  const [ue, setue] = useState(); 

  const [successMessage, setSuccessMessage] = useState(null);
  const [successMessage2, setSuccessMessage2] = useState(null);
  const [successMessage3, setSuccessMessage3] = useState(null);



  const [datas, setData] = useState();
  const [add, setAdd] = useState();

  const [errorMessage, setErrorMessage] = useState(null);

  const [aaa,vvv]=useState("");
  const [in2, ppp] = useState("");
  const [ccc, setCCC] = useState("");

  const [be,fun] = useState("yetto");

  const [ready, setReady] = useState(false);

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }


  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "auto",
      marginRight: "-90%",
      transform: "translate(-50%, -50%)",
      overflow: "auto",
      maxHeight: "100vh",
    },
  };

  useEffect(() => {
    const getQ = async () => {
      const res = await Axios.get(`${domain}/user/getNachsal`);
      setData(res.data);
      setReady(true);
    };
    
    getQ();
  }, []);

  function setAdd2() {
    setIsOpen(true);
    
    console.log(funit);
  }

  async function send(out) {
    setSuccessMessage2("שומר...");
    const newuser = {
      iMA: aaa,
      password: ccc,
      passwordVerify: ccc,
      
  FirstName:ffirstname,
  LastName:flastname,
  NickName:fnickname,
  CourseNo:fcourseno,
  BirthDate:fbirthdate,
  Email:femail,
  MainPhone:fmainphone,
  EmergencyPhone:femergencyphone,
  AddressCity:faddresscity,
  AddressLine:faddressline,
  Rank:frank,
  Unit:funit,
  SoogHatsava:fsoogHatsava,
  Maslool:fmaslool,
Dereg:fdereg  
    

  
    };
    console.log(newuser);
    let con=false;
    try {
      const res = await Axios.post(`${domain}/user/addnewCrewmByComm`, newuser);
    
     if(res.data){ con =true;
     if(out) setSuccessMessage("המתשמש נוצר בהצלחה"); else  setSuccessMessage3("המתשמש נוצר בהצלחה");
     }

    } catch (err) {
      if (err.response) {
        if (err.response.data.errorMessage) {
          setErrorMessage(err.response.data.errorMessage);
       
        }
      } else console.log(err);
    }
    console.log("con "+con);
    return con;
  }


  return (
    ready && (
      <>
      <br /> 
      {successMessage &&<SuccessMessage
          message={successMessage}
          clear={() => setSuccessMessage(null)}
        />}
        {!add && (
         
             <button onClick={() =>  {
  setAdd2(true);
}}  

 
             style={{
              display: "block",
              display: "inline",
              color: "white",
              textAlign: "center",
              width: "262px",
              textDecoration: "none",
              fontSize: "14pt",
              borderColor: "black",
              borderWidth: "thin",
              borderStyle: "solid",
              backgroundColor: "#1B0279",
              height: "33px",
               }}>
           
הוספת משתמש חדש
             </button >
          
           
        )}

        <Modal
        ariaHideApp={false}
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div style={{}} >
            < h2 style={{ fontSize: "30pt", textAlign: "center" }} >
              טופס הוספת משתמש חדש:
            </h2> 

            {successMessage2 &&<SuccessMessage2
          message={successMessage2}
          clear={() => setSuccessMessage2(null)}
        />}
         {successMessage3 &&<SuccessMessage
          message={successMessage3}
          clear={() => setSuccessMessage3(null)}
        />}

            
            <div style={{ display: "flex", width:"75%", paddingRight:"12%" , paddingRLeft:"12%" }} >
             <div style={{ width: "34%", textAlign: "center" }} >
                 <h2 >מספר אישי: </h2 >
                 <div style={{height:"1%"}}></div>
                {/*  <h2 >כינוי: </h2 >
                <p style={{height:"6px"}}></p> */}
                <h2 >סיסמה ראשונית: </h2 >
               
                </div>
              <div style={{ width: "66%", float: "left", textAlign: "center" }} >
                <br /> 
               <input onChange={(e)=>{vvv(e.target.value);}}
               value={aaa}
               style={
                 {
                   textAlign:"center",
                   fontSize:"18pt",
                   width:"70%",
                   height:"32px"
                 }
               }
               ></input>
                  
               <br /> 
              {/*   <input
                  onChange={(e) =>  {
                    ppp(e.target.value);
                  }}
                  value={in2}
                  style={{
                    textAlign: "center",
                    fontSize: "18pt",
                    width: "70%",
                    height:"32px"
                  }}
                 />
                <br />  <br />  */}
                 <div style={{height:"5%"}}></div>
                 <input
                  onChange={(r) =>  {
                    setCCC(r.target.value);
                  }}
                  value={ccc}
                  style={{
                    textAlign: "center",
                    fontSize: "18pt",
                    width: "38%",
                    height:"32px"
                  }}
                />
               {/*  <button
                  onClick={() =>  {
                    let result = "";
                    let characters =
                      "xyz123";
                    for (let i = 0; i <6; i++) {
                    result += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                   setCCC(result); console.log(result);
                  }}
                  style={{ width: "20%", fontSize: "18pt" }}
                 >
                  צור קל
                </button> */}
                 <button
              style={{
                width: "10px",
                height: "50px",
                backgroundColor: "unset",
                cursor: "unset"              }}>
                
              </button> 
                <button
                  onClick={() =>  {
                    let result = "";
                    let characters =
                       "abcdefghijklmnopqrstuvwxyz1234567890";
                    for (let i = 0; i <10; i++) {
                      result += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                   setCCC(result);
                  }}
                  style={{ width: "30%", fontSize: "14pt"                ,    height:"32px"
                }}
                 >
                  צור אוטומטית
                  </button>
                  </div></div>
            <br /> 
            <div>
        
        <br />
        {errorMessage && (
          <ErrorMessage
            message={errorMessage}
            clear={() => setErrorMessage(null)}
          />
        )}
        <form>
          <div className="FUD">
            <div className="FUDcolumnFirst">
            <div className="fudunit">
              <div className="fudTitle">דרג מקצועי<sup className="must">*</sup>: </div>
              <div className="fudContent" style={{height:"27px"}}>

              <select className="fudinput" id="form-dereg"  type="text" placeholder="דרג"   defaultValue={fdereg}
                    value={fdereg}
                    


               onChange={(e) => fsetDereg(e.target.value)} >
          <option disabled>
          
          -- בחר --
        </option> <option >
          
          א'
        </option>        
        <option >
          
          ב'
        </option>  
        <option >
          
          ג'
        </option>  
        <option >
          
          ד'
        </option>  
</select>  <br /><br />

</div></div>
<p></p>
              <div className="fudunit">
                <div className="fudTitle">מספר קורס<sup className="must">*</sup>: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-courseno"
                    type="number"
                    placeholder="מספר קורס"
                    value={fcourseno}
                    onChange={(e) => fsetCourseno(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">תאריך לידה:<sup className="must2">*</sup></div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-birthdate"
                    type="date"
                    placeholder="תאריך לידה"
                    value={fbirthdate}
                    onChange={(e) => fsetBirthdate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="FUDcolumn">
              <div className="fudunit">
                <div className="fudTitle">שם פרטי<sup className="must">*</sup>: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-firstname"
                    type="text"
                    placeholder="שם פרטי"
                    value={ffirstname}
                    onChange={(e) =>{ fsetFirstname(e.target.value);
                      if(!did)
                      {
                        if(flastname)
                        fsetNickname(e.target.value+" "+flastname);
                        else
                        fsetNickname(e.target.value);

                    }
                    }
                    }
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">שם משפחה<sup className="must">*</sup>: </div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-lastname"
                    type="text"
                    placeholder="שם משפחה"
                    value={flastname}
                    onChange={(e) => {fsetLastname(e.target.value);
                      if(!did)
                      {
                        if(ffirstname)
                        fsetNickname(ffirstname+" "+e.target.value);
                        else
                        fsetNickname(e.target.value);

                    }
                    }
                    }
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">כינוי:<sup className="must2">*</sup></div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-nickname"
                    type="text"
                    placeholder="כינוי"
                    value={ fnickname}
                    onChange={(e) => {fsetNickname(e.target.value);setdid(e.target.value!="");
                    if(!(e.target.value!="")) {
                      if(ffirstname) if(flastname) fsetNickname(ffirstname+" "+flastname);
                      if(!ffirstname) if(flastname) fsetNickname(flastname);
                      if(ffirstname) if(!flastname) fsetNickname(ffirstname);
                    }
                  }}
                  />
                </div>
              </div>
              <br />
              <br />
            </div>
            <div className="FUDcolumn">
              <div className="fudunit">
                <div className="fudTitle">מספר טלפון:<sup className="must2">*</sup></div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-mainphone"
                    type="text"
                    placeholder="מספר טלפון"
                    value={fmainphone}
                    onChange={(e) => fsetMainphone(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">טל' למקרה חירום:<sup className="must2">*</sup></div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-emergencyphone"
                    type="text"
                    placeholder="מספר טלפון נוסף למקרה חירום"
                    value={femergencyphone}
                    onChange={(e) => fsetEmergencyphone(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">דוא"ל אזרחי:<sup className="must2">*</sup></div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-email"
                    type="email"
                    placeholder="כתובת דואר אלקטרוני (אזרחית)"
                    value={femail}
                    onChange={(e) => fsetEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="FUDcolumn">
              <div className="fudunit">
                <div className="fudTitle">עיר מגורים:<sup className="must2">*</sup></div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-addresscity"
                    type="text"
                    placeholder="עיר מגורים"
                    value={faddresscity}
                    onChange={(e) => fsetAddresscity(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">כתובת מגורים:<sup className="must2">*</sup></div>
                <div className="fudContent">
                  <input
                    className="fudinput"
                    id="form-addressline"
                    type="text"
                    placeholder="כתובת מגורים"
                    value={faddressline}
                    onChange={(e) => fsetAddressline(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">דרגה<sup className="must">*</sup>: </div>
                <div className="fudContent">
                <select className="fudinput" id="form-rank"  type="text" placeholder="דרגה"   defaultValue={frank}
                    value={frank}

  onChange={(e) => fsetRank(e.target.value)}
>
<option disabled >
            
            -- בחר --
          </option>
    <option >
    
    סג"מ
  </option>        
  <option >
    
    סגן
  </option>  
  <option >
    
    סרן
  </option>  
  <option >
    
    רס"ן
  </option>  
  <option >
    
    סא"ל
  </option>  
  <option >
    
    אל"מ
  </option>  
  <option >
    
    תא"ל
  </option> 
    <option >
    
    צוער
  </option>  

</select> 
                </div>
              </div>

              <br />
                <div className="fudunit">
                <div className="fudTitle">אוכלוסייה<sup className="must">*</sup>: </div>
                  <div className="fudContent">
                    <select
                      className="fudinput"
                      id="form-u"
                      type="text"
                      placeholder="אוכלוסייה"
                      defaultValue={ue}
                      value={ue}
                      onChange={(e) => setue(e.target.value)}
                    >
                      <option disabled selected value>
                        {" "}
                        -- בחר --{" "}
                      </option>

                      <option>קצינים</option>
                      <option>חוגרים</option>
                    </select>
                  </div>
                </div>

            </div>



            <div className="FUDcolumn">
              <div className="fudunit">
                <div className="fudTitle">יחידה<sup className="must">*</sup>: </div>
                <div className="fudContent">
                <select className="fudinput" id="form-unit"  type="text" placeholder="יחידה"   defaultValue={funit}
                    value={funit}
                    defaultValue={"528"}

  onChange={(e) => {fsetUnit(e.target.value); console.log(funit);}}
>
<option disabled>
            
            -- בחר --
          </option>
    <option >
    
    506
  </option>        
  <option >
    
    509
  </option>  
  <option>
    
    528
  </option>  

</select> 
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">סוג הצבה<sup className="must">*</sup>: </div>
                <div className="fudContent">
                <select className="fudinput" id="form-soogHatsava"  type="text" placeholder="סוג הצבה"   defaultValue={fsoogHatsava}
                    value={fsoogHatsava}

  onChange={(e) => fsetSoogHatsava(e.target.value)}
>
<option disabled>
            
            -- בחר --
          </option>
    <option >
    
    סדיר
  </option>        
  <option >
    
    הצ"ח
  </option>  
  <option >
    
    מילואים
  </option>  

</select> 
                </div>
              </div>
              <br />
              <div className="fudunit">
                <div className="fudTitle">מסלול<sup className="must">*</sup>: </div>
                <div className="fudContent">
                <select className="fudinput" id="form-maslool"  type="text" placeholder="מסלול"   defaultValue={fmaslool}
                    value={fmaslool}

  onChange={(e) => fsetMaslool(e.target.value)}
>
<option disabled >
            
            -- בחר --
          </option>
    <option >
    משימה
  </option>        
  <option >
    תעבורה
  </option>  
  <option >
    ורסטילי
  </option>  
  <option >
    הכשרה
  </option>  

</select> 
                </div>
                </div>


                <br />
                <div className="fudunit">
                  <div className="fudTitle">מקצוע<sup className="must">*</sup>: </div>
                  <div className="fudContent">
                    <select
                      className="fudinput"
                      id="form-prof"
                      type="text"
                      placeholder="מקצוע"
                      defaultValue={profe}
                      value={profe}
                      onChange={(e) => setprofe(e.target.value)}
                    >
                      <option disabled selected value>
                        {" "}
                        -- בחר --{" "}
                      </option>

                      <option>בקרה</option>
                      <option>פיקוח</option>
                    </select>
                  </div>
                </div>


            </div>
          </div>
        </form>
      
     
       
      </div>
      
<div style={{textAlign:"center"}}>
         
             <button
              className="footercancelbutton"
              onClick={() =>  {
                setdid(false);
               fsetDereg("א'");
               fsetUnit("528");
               fsetSoogHatsava("סדיר");
               fsetMaslool("הכשרה");
               fsetRank("צוער");
               setSuccessMessage(null);
               setSuccessMessage2(null);
               setSuccessMessage3(null);
          setprofe("");
          setue("");
  fsetFirstname("");
   fsetLastname("");
   fsetNickname("");
   fsetCourseno("");
   fsetBirthdate("");
   fsetEmail("");
   fsetMainphone("");
   fsetEmergencyphone("");
   fsetAddresscity("");
   fsetAddressline("");
   vvv("");
                  ppp("");
                  setCCC("");
                  setIsOpen(false);
console.log(funit);
              }}
              style={{
                fontSize: "16pt",
                width: "px",
                height: "50px",
              }}
             >
              בטל
              </button> 
              <button
              style={{
                width: "87px",
                height: "50px",
                backgroundColor: "unset",
                cursor: "unset"              }}>
                
              </button> 
              <button
               onClick={async () =>  {
                console.log("123123234123123123");
                let news;
                news=await send(false);
                console.log("news "+news);
                if (news) {
                  console.log("saved");
                  setdid(false);
                  fsetDereg("א'");
                  fsetUnit("528");
                  fsetSoogHatsava("סדיר");
                  fsetMaslool("הכשרה");
                  fsetRank("צוער");
          setprofe("");
          setue("");
  fsetFirstname("");
  fsetLastname("");
  fsetNickname("");
  fsetCourseno("");
  fsetBirthdate("");
  fsetEmail("");
  fsetMainphone("");
  fsetEmergencyphone("");
  fsetAddresscity("");
  fsetAddressline("");
  vvv("");
                 ppp("");
                 setCCC("");
                  console.log("qwaedqwed");
                } else {                                   console.log("NOSAVED");


                }
              }}
              style={{ fontSize: "16pt", width: "300px", height: "50px" }}
             >
              שמור והוסף משתמש נוסף
              </button> 
            <button
              style={{
                width: "87px",
                height: "50px",
                backgroundColor: "unset",
                cursor: "unset",
              }}>
</button>       
<button
              onClick={async () =>  {
                if (await send(true)) {
                  fsetDereg("א'");
                  fsetUnit("528");
                  fsetSoogHatsava("סדיר");
                  fsetMaslool("הכשרה");
                  fsetRank("צוער");
            setprofe("");
            setue("");
     fsetFirstname("");
      fsetLastname("");
      fsetNickname("");
      fsetCourseno("");
      fsetBirthdate("");
      fsetEmail("");
      fsetMainphone("");
      fsetEmergencyphone("");
      fsetAddresscity("");
      fsetAddressline("");
      vvv("");
                     ppp("");
                     setCCC("");
                     setIsOpen(false);
                } else {
                }
              }}
              style={{ fontSize: "16pt", width: "300px", height: "50px" }}
             >
              שמור וחזור לספר טלפונים
              </button>  

              </div>


              </div>
        
          </Modal>
        
        {errorMessage && (
           <ErrorMessage
            message={errorMessage}
            clear={() => setErrorMessage(null)}
           />
        )}
        {add && (
           <div style={{}} >
            < h2 style={{ fontSize: "30pt", textAlign: "center" }} >
              טופס הוספת משתמש חדש:
            </h2> 
            <br />  <br /> 
             <div style={{ display: "flex" }} >
             <div style={{ width: "50%", textAlign: "center" }} >
                 <h2 >מספר אישי: </h2 >
                 <p style={{height:"12px"}}></p>
                 <h2 >כינוי: </h2 >
                <p style={{height:"6px"}}></p>
                <h2 >סיסמה ראשונית: </h2 >
                <br /> 
                </div>
              <div style={{ width: "50%", float: "left", textAlign: "center" }} >
                <br /> 
               <input onChange={(e)=>{vvv(e.target.value);}}
               value={aaa}
               style={
                 {
                   textAlign:"center",
                   fontSize:"18pt",
                   width:"70%",
                   height:"32px"
                 }
               }
               ></input>
                  <br /> 
                <br />  <br /> 
                <input
                  onChange={(e) =>  {
                    ppp(e.target.value);
                  }}
                  value={in2}
                  style={{
                    textAlign: "center",
                    fontSize: "18pt",
                    width: "70%",
                    height:"32px"
                  }}
                 />
                <br />  <br /> 
               
                 <input
                  onChange={(r) =>  {
                    setCCC(r.target.value);
                  }}
                  value={ccc}
                  style={{
                    textAlign: "center",
                    fontSize: "18pt",
                    width: "38%",
                    height:"32px"
                  }}
                />
               {/*  <button
                  onClick={() =>  {
                    let result = "";
                    let characters =
                      "xyz123";
                    for (let i = 0; i <6; i++) {
                    result += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                   setCCC(result); console.log(result);
                  }}
                  style={{ width: "20%", fontSize: "18pt" }}
                 >
                  צור קל
                </button> */}
                 <button
              style={{
                width: "10px",
                height: "50px",
                backgroundColor: "unset",
                cursor: "unset"              }}>
                
              </button> 
                <button
                  onClick={() =>  {
                    let result = "";
                    let characters =
                       "abcdefghijklmnopqrstuvwxyz1234567890";
                    for (let i = 0; i <10; i++) {
                      result += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                   setCCC(result);
                  }}
                  style={{ width: "30%", fontSize: "14pt"                ,    height:"32px"
                }}
                 >
                  צור אוטומטית
                  </button>
                  </div></div>
            <br /> 
            <br /> 
            <br /> 
             <button
              className="footercancelbutton"
              onClick={() =>  {
                setAdd(false);
              }}
              style={{
                fontSize: "16pt",
                width: "px",
                height: "50px",
              }}
             >
              בטל
              </button> 
              <button
              style={{
                width: "87px",
                height: "50px",
                backgroundColor: "unset",
                cursor: "unset"              }}>
                
              </button> 
              {/* <button
              onClick={async () =>  {
                console.log("123123234123123123");
                let news;
                //news=await send();
                console.log("news "+news);
                if (news) {
                  console.log("saved");
                  fsetDereg("א'");
                  fsetUnit("528");
                  fsetSoogHatsava("סדיר");
                  fsetMaslool("הכשרה");
                  fsetRank("צוער");
  
  fsetFirstname("");
  fsetLastname("");
  fsetNickname("");
  fsetCourseno("");
  fsetBirthdate("");
  fsetEmail("");
  fsetMainphone("");
  fsetEmergencyphone("");
  fsetAddresscity("");
  fsetAddressline("");
  vvv("");
                 ppp("");
                 setCCC("");
                  console.log("qwaedqwed");
                } else {                                   console.log("NOSAVED");


                }
              }}
              style={{ fontSize: "16pt", width: "300px", height: "50px" }}
             >
              שמור והוסף משתמש חדשXXX
              </button>  */}
            <button
              style={{
                width: "87px",
                height: "50px",
                backgroundColor: "unset",
                cursor: "unset",
              }}>
</button>       
<button
              onClick={async () =>  {
                if (await send()) {
                  setAdd(false);
                } else {
                }
              }}
              style={{ fontSize: "16pt", width: "300px", height: "50px" }}
             >
              שמור וחזור לספר טלפונים
              </button>  
              </div>
        )}
<br /> 
        {!add && <NACHSALTBKAHAD data={datas} fun={fun} key={ready} /> }
        <br /> 
        <br /> 
        <br /> 
        <br /> 
        <br /> 
      </>
    )
  );
}
