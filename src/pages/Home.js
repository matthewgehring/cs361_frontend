import {React, useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import LickList from '../components/LickList';

function Home() {

    return (
        <>
        <div className='align-vertically'>
            <p>
            <h1>Welcome</h1>
            <h3>Here you can store and search for guitar licks based on chord, key, or emotion.</h3>
            <h3>You can also request a sentiment analysis for lyrics to help navigate your search for licks.</h3>
            </p>
        </div>
        </>
    )
}

export default Home;
