import React, {useState, useEffect} from 'react';
import LickListAddEdit from '../components/LickListAddEdit'
import { useParams } from 'react-router-dom';



function Edit() {
    const params = useParams()
    const dest = `/licks/${params.id}`
    const [lick, setLick] = useState([]);


    useEffect(() => {
        const fetchLick = async () => {
            const response = await fetch(dest, {method: 'GET'});
            const editLick = await response.json();
            console.log("json", editLick)
            setLick([editLick])
            return editLick;
        }
        fetchLick();
    }, []);

    return (
        <>
            <h1>Edit Lick</h1>
            {lick ?  <LickListAddEdit lick={lick} dest={dest} rest={'PUT'}  /> : <div>Loading...</div>}
        </>
    )
}

export default Edit;