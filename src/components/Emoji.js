import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Emoji = () => {

    const [chooseEmoji, setChooseEmoji] = useState({});

    useEffect(() => {

        axios.get('https://api.emojisworld.fr/v1/random?limit=1')
            .then(res => setChooseEmoji(res.data.results[0]));

    }, []);

    const changeEmoji = () => {
        axios.get('https://api.emojisworld.fr/v1/random?limit=1')
            .then(res => setChooseEmoji(res.data.results[0]));

    }



    return (
        <div>
            <h1>{chooseEmoji.name}</h1>
            <h2>{chooseEmoji.emoji}</h2>
            <button onClick={changeEmoji}>Change Emoji</button> 
            
        </div>
    );
};

export default Emoji;