import {React, useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import LickList from '../components/LickList';

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
            <LickList licks={licks} set={setLicks} />
            <Link to="/create">Add a lick</Link>
        </>
    )
}

export default Licks;
