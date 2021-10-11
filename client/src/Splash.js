import React, { useState } from "react";
import App from "./App";

function Splash() {

const [entered, setEntered] = useState(false);

    function enter(){
        setEntered(true);
    }  

  return (
    <>
        {!entered && <div id="splashdiv"><h1 id="splash1">ברוכים הבאים לתיק אישי מקצועי</h1>
        <h2 id="splash2"><button id="bsplash2" onClick={enter}>כניסה</button></h2></div>}
        {entered && <App />}
    </>
  );
}

export default Splash;
