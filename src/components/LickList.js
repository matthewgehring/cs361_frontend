import { Link } from 'react-router-dom';
import React from 'react';
import Table from './Table';
import Lick from './Lick'
 
function LickList({licks, set}) {
    const headers = ['Licks']

    const callback = element => {
        return (
            <Lick element={element} set={set} />
        )
    }
    return (
        <>
        <div className='licks'>
            <Link to="/create">
                <button type="button">
                    Add a lick
                </button>
            </Link>
            <Table items={licks} headers={headers} callback={callback}/>
        </div>
        </>
    )
}

export default LickList;