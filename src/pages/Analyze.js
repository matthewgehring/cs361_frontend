import {React, useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';

function Analyze() {
    const [lyrics, setLyrics] = useState('');
    const [sentiment, setSentiment] = useState()

    let fetchData = {
        method: 'POST',
        body: JSON.stringify({"string_text": lyrics}),
        headers: {'Content-Type': 'application/json'},
      }
	
    const getSentiment = async () => {
        const response = await fetch('/sentiment', fetchData);
        const sentiment = await response.json();
        setSentiment(sentiment.sentiment);
    }

    const textChange = event => {
        setLyrics(event.target.value)
    };
        
    // useEffect(() => {
    //     loadExercises();
    // }, [sentiment]);

    return (
        <>
        <h1>Analyze Lyrics</h1>
            <h3>Copy and Paste your lyrics into the text box then submit them to see what emotion they provoke.</h3>

            <label >Lyrics:</label>
                <textarea rows="4" cols="50" onChange={textChange}>
                </textarea>
                <input type="submit" value="Submit" onClick={getSentiment}></input>
                
            <p>Click the "Submit" button and your lyrics emotion will be displayed below.</p>
            <h3>Your lyrics provoke: {sentiment}</h3>
        </>
    )
}

export default Analyze;
