import React, {useState} from 'react'
import Option from "./screw/Option.js";

export default function SCREW() {
    
    const [navbar, setNavbar] = useState("home");
    
    return (
        <div className="SCREWpage">
            <div className="Buttons">
                <button className="navbar" onClick={() => setNavbar("home")}>דף הבית</button>
                <button className="navbar" onClick={() => setNavbar("fud")}>פרטים אישיים</button>
            </div>
            <Option selected={navbar} />
        </div>
    )
}
