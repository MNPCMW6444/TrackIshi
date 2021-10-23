import Axios from "axios";
import React, {useState} from "react";
import { UserContextProvider } from "./context/UserContext";
import Router from "./Router";
import "@fontsource/varela-round";
import Logo989 from "./logos and fonts/Logo989";

Axios.defaults.withCredentials = true;

function App() {

const [entered, setEntered] = useState(false);


  return (
    <>
      {!entered && <div className="splash">
        <Logo989 resize={0.6}/>
        <button className="splashbutton" onClick={() => setEntered(true)}>כניסה</button>
      </div>}
      {entered && <UserContextProvider>
        <div className="container">
          <Router />
        </div>
      </UserContextProvider>}
    </>
  );
}

export default App;
