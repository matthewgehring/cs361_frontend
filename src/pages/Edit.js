import React, {useState, useEffect} from 'react';
import LickListAddEdit from '../components/LickListAddEdit'
import { useParams } from 'react-router-dom';



function Edit() {
    const params = useParams()
    const dest = `/licks/${params.id}`
    const rest = 'GET'
    const [lick, setLick] = useState(0);


    useEffect(() => {
        const loadLick = async () => {
            const response = await fetch(dest, {method: 'GET'});
            const lick = await response.json();
            setLick(lick)
            return lick;
        }
        const fetchLick = async () => {
            const response = await loadLick()
            console.log("json", response.json())
        }
        fetchLick();
    }, [lick, dest]);

    return (
        <>
            <h1>Edit Lick</h1>
            {lick && <LickListAddEdit lick={lick} dest={dest} rest={rest}  />}
            {!lick && <div>Loading...</div>}
        </>
    )
}

export default Edit;