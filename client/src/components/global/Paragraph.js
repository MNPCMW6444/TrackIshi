import React from 'react'

export default function Pararaph(props) {
    const text = props.text+"";
    const newText = text.split('\n').map(str => <p>{str}</p>);
    return newText;
}
