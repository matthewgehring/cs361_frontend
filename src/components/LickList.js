import React from 'react';
import Table from './Table';
import Lick from './Lick'
 
function LickList({licks, set}) {
    const headers = ['Key', 'Chord', 'Progression', 'Sentiment', 'Tab', '', '']

    const callback = element => {
        return (
            <Lick element={element} set={set} />
        )
    }
    return (
        <>
        <Table items={licks} headers={headers} callback={callback}/>
        </>
    )
}

export default LickList;