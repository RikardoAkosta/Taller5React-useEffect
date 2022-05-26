import React from 'react';
import {useState, useEffect} from 'react';

const ScreenSize = () => {

    const [screenSize, setScreenSize] = useState('Mueve la pantalla');

   useEffect(() => {


    const callback = () => {
        if(window.innerWidth < 500){
            setScreenSize("estas en un movil");
        }else{
            setScreenSize("estas en una computadora");
        }

      
    };

    window.addEventListener("resize", callback);

    return () => {
        window.removeEventListener("resize", callback);
    }
    }, []);


    return (
        <div>
            <h1>{screenSize}</h1>
        </div>
    );
};

export default ScreenSize;