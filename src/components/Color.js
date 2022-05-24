import React from 'react';
import {useState, useEffect} from 'react';

const Color = () => {
    const [color, setColor] = useState("#845EC2");

  



    useEffect(() => {
        const callback = e => {
            if(e.x < window.innerWidth / 2){
                setColor("#335EC7");
            }else{
                setColor("#B39C10");
            }
           
        }
        window.addEventListener("mousemove", callback);

        
        return () => {window.removeEventListener("mousemove", callback);


        }
    }, []);



    return (
        <div className='color' style={{background: color}}>
            <h1>Color</h1>
            
        </div>
    );
};

export default Color;