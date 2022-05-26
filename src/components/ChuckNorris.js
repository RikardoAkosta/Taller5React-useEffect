import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ChuckNorris = () => {

    const [chuck, setChuck] = useState({});

    useEffect(() => {

    axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => setChuck(res));

    }, []);

    console.log(chuck);



    return (
        <div>
          <h1>chuck</h1> 
          <p>{chuck.data?.value}</p>
        </div>
    );
};

export default ChuckNorris;