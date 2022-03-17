import {React, useState, useEffect, useContext} from 'react';
import LickList from '../components/LickList';
import Filter from '../components/Filter';

function Licks() {
    const [licks, setLicks] = useState([]);
	
    const loadLicks = async () => {
        const response = await fetch('/licks');
        const licks = await response.json();
        setLicks(licks);
    }
        
    useEffect(() => {
        loadLicks();
    }, []);

    return (
        <>
            <h1>Lick Database</h1>
            <Filter setLicks={setLicks} />
            <LickList licks={licks} set={setLicks} />
        </>
    )
}

export default Licks;
