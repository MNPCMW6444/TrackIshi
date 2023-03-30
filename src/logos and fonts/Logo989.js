import React from 'react'
import logo from "./logo989.png";

export default function Logo989(props) {
    return (
        <div><img  src={logo} alt="Logo" width={989*props.resize} height={989*props.resize}/></div>
    )
}
