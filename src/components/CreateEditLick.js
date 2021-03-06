import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";
import FileBase64 from 'react-file-base64';

function CreateEditLick({element, dest, rest}) {
    const url = dest;
    const method = rest
    let navigate = useNavigate()
    let [key, setKey] = useState(element.key)
    let [chord, setChord] = useState(element.chord)
    let [progression, setProgression] = useState(element.progression)
    let [sentiment, setSentiment] = useState(element.sentiment)
    let [tab, setTab] = useState(element.tab)

    let data = {
        "key": key,
        "chord": chord,
        "progression": progression,
        "sentiment": sentiment,
        "tab": tab
    }

    let fetchData = {
        method: method,
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      }

    const submit = async () => {
        const response = await fetch(url, fetchData)
        const message = await response.json()
        alert(message.error ? message.error : message.message)
        navigate('/licks')

    }
    
    return (
        <>
        <tr id={element.id}>
            <td><input key="key" value={key} onChange={(e) => setKey(e.target.value)}></input></td>
            <td><input key="chord" value={chord} onChange={(e) => setChord(e.target.value)}></input></td>
            <td><input key="progression" value={progression} onChange={(e) => setProgression(e.target.value)}></input></td>
            <td><input key="sentiment" id="sentiment" value={sentiment} onChange={(e) => setSentiment(e.target.value)}></input></td>
             <td><FileBase64 type="file" multiple={false} onDone={({ base64 }) => setTab(base64)}
                />
                </td>
        </tr>
        <td></td>
        <td></td>
        <div classkey="subDiv">
            <button classkey="subButton" onClick={submit}>Save</button>
        </div>
        </>
    )
}

export default CreateEditLick;