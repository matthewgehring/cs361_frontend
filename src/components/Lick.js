import React from 'react';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';

function Lick({element, set}) {
    return (
        // <tr key={element._id}>
        //     <td>{element.key}</td>
        //     <td>{element.chord}</td>
        //     <td>{element.progression}</td>
        //     <td>{element.sentiment}</td>
        //     <td className='imgtd'><img alt='tab' style={{ width: '100%', height: '100%' }} src={element.tab}></img></td>
        //     <td><EditItem id={element._id} lick={element}/></td>
        //     <td><DeleteItem id={element._id} set={set}/></td>
        // </tr>
            <div class="content">
                <div className="content-overlay"></div>
                <img alt='tab' class="content-image" src={element.tab}></img>
                <div className="content-details fadeIn-bottom fadeIn-left">
                    <p>Key: {element.key}</p>
                    <p>Chord: {element.chord}</p>
                    <p>Progression: {element.progression}</p>
                    <p>Sentiment: {element.sentiment}</p>
                    <p><EditItem id={element._id} lick={element}/> <DeleteItem id={element._id} set={set}/></p>
                </div>
            </div>


    )
}

export default Lick;