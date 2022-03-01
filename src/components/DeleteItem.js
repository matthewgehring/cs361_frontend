import React from 'react';
import { Link } from 'react-router-dom';
import {FaTrashAlt} from 'react-icons/fa'

function DeleteItem({id, set}) {
    const onDelete = async id => {
        const response = await fetch(`/licks/${id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const getResponse = await fetch('/licks');
            const licks = await getResponse.json();
            set(licks);
        } else {
        console.error(`Failed to delete lick with id = ${id}, status code = ${response.status}`)
        }
    }
    return (
        <Link to="/licks" onClick={() => onDelete(id)}><FaTrashAlt /></Link>
    )
}

export default DeleteItem;