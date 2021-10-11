import React from 'react';
import UpdateOpinion from './OpenOpinion';

export default function OpenOpinion(props) {
    return (
        <UpdateOpinion suc={props.setSuccessMessage} />
    );
}
