import React from 'react';
import {useState, useEffect} from 'react'; 

const Photo = () => {

    const [showPhoto, setShowPhoto] = useState(false);

    useEffect(() => {
        const colors = ["#845EC2", "#B39CD0", "#FBEAFF", "#00C9A7", "#C4FCEF"];//para buscar colores esta la pagina mycolor.space crea una buena ppaleta de colores
        document.body.style = `background: ${colors[Math.floor(Math.random() * colors.length)]}`;/* aqui le decimos que cuando se ejecute el useEffect se ejecute solo una vez */
      }, [ showPhoto, setShowPhoto ]);

    return (
        <div className='App'>
            <button onClick={()=> setShowPhoto(!showPhoto)}>Mostrar / Ocultar Foto</button>
            <br />
            {
                showPhoto ? <img style={{width: "20%"}} src="https://static.platzi.com/media/avatars/avatars/Rikardoakosta_e8f04e10-719f-428b-8051-5f62753d7264.jpg" alt="foto" /> : null
            }
            <p>foto oculta</p>
           
            
        </div>
    );
};

export default Photo;