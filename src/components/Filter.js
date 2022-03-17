import {React, useState} from 'react';

function Filter({setLicks}) {
    let [key, setKey] = useState(null)
    let [chord, setChord] = useState(null)
    let [progression, setProgression] = useState(null)
    let [sentiment, setSentiment] = useState(null)

    let data = {
        "key": key,
        "chord": chord,
        "progression": progression,
        "sentiment": sentiment
    }

    let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      }

    const submit = async () => {
        const response = await fetch('/licks/filter', fetchData)
        const licks = await response.json()
        console.log(licks)
        setLicks(licks)

    }

    const loadLicks = async () => {
        const response = await fetch('/licks');
        const licks = await response.json();
        setLicks(licks);
    }
    
    return (
        <>
        <div className='filter'>
            <h3>Filter by:</h3>
                <input placeholder='key' key="key" value={key} onChange={(e) => setKey(e.target.value)}></input>
                <input placeholder='chord' key="chord" value={chord} onChange={(e) => setChord(e.target.value)}></input>
                <input placeholder='progression' key="progression" value={progression} onChange={(e) => setProgression(e.target.value)}></input>
                <input placeholder='sentiment' key="sentiment" id="sentiment" value={sentiment} onChange={(e) => setSentiment(e.target.value)}></input>
            <div classkey="subDiv">
                <button classkey="subButton" onClick={submit}>Filter</button>
                <button classkey="refButton" onClick={loadLicks}>Refresh</button>
            </div>
        </div>
        </>
    )
}

export default Filter;