import React from 'react';
import Table from './Table';
import CreateEditLick from './CreateEditLick';


function LickListAddEdit({lick, dest, rest}) {
    const headers = ['Key', 'Chord', 'Progression', 'Sentiment', 'Tab']
    const callback = element => {
        return (
            <CreateEditLick element={element} dest={dest} rest={rest} />
        )
    }
    return (
        <>
            <Table items={lick} headers={headers} callback={callback}/>
        </>
    )
}

export default LickListAddEdit;