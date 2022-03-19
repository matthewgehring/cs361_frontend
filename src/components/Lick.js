import React from 'react';
import EditItem from './EditItem';
import DeleteItem from './DeleteItem';

function Lick({element, set}) {
    return (
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