import React from 'react';
import UpdateFUD from './UpdateFUD';

export default function OpenFUD(props) {
    return (
        <UpdateFUD suc={props.setSuccessMessage} />
    );
}
