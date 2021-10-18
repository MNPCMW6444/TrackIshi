import React from 'react';
import UpdateOpinion from './UpdateOpinion';

export default function OpenOpinion(props) {
    return (
        <UpdateOpinion suc={props.setSuccessMessage} shel={props.shel}/>
    );
}
