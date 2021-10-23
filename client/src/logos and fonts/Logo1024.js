import React from 'react'
import logo from "./logo1024.png";

export default function Logo1024(props) {
    return (
        <div><img  src={logo} alt="Logo" width={1024*props.resize} height={1024*props.resize}/></div>
    )
}
