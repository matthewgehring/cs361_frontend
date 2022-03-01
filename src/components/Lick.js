import React from 'react';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';

function Lick({element, set}) {
    return (
        <tr key={element._id}>
            <td>{element.key}</td>
            <td>{element.chord}</td>
            <td>{element.progression}</td>
            <td>{element.sentiment}</td>
            <td>{element.tab}</td>
            <td><EditItem id={element._id} lick={element}/></td>
            <td><DeleteItem id={element._id} set={set}/></td>
        </tr>
    )
}

export default Lick;