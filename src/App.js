import Axios from "axios";
import React, { useState } from "react";
import { UserContextProvider } from "./context/UserContext";
import Router from "./Router";
import "@fontsource/varela-round";
import Logo993Blue from "./logos and fonts/logo993Blue";
import Footer from "./Footer";

Axios.defaults.withCredentials = true;

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && (
        <div className="splash">
          <Logo993Blue resize={0.6} />
          <button className="splashbutton" onClick={() => setEntered(true)}>
            כניסה
          </button>
        </div>
      )}
      {entered && (
        <>
          <UserContextProvider>
            <Router />
          </UserContextProvider>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
