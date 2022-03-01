import React from 'react';

function Table({items, headers, callback}){
    console.log("hello", items)
    return (
        <>
            <table>
            <thead>
            <tr>
                {headers.map((element, id) => {
                    return <th key={id}>{element}</th>
                })}
            </tr>
            </thead>
            <tbody>
                {items.map(callback)}
            </tbody>
        </table>
        </>
    );
}

export default Table;
