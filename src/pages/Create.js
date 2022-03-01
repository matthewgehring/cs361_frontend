import React from 'react';
import LickListAddEdit from '../components/LickListAddEdit'

function Create() {
    const empty = [{
        "key": '',
        "chord": '',
        "progression": '',
        "sentiment": '',
        "tab": ''
    }]

    const dest = '/licks'

    const rest = 'POST'
    return (
        <>
            <h1>Create Lick</h1>
            <LickListAddEdit lick={empty} dest={dest} rest={rest}  />
        </>
    )
}

export default Create;