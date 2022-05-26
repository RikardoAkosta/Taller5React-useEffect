import { useState , useEffect } from 'react';
import axios from "axios";
import './App.css';
import Contador from './components/Contador';
import Photo from './components/Photo';
import Color from './components/Color';
import ScreenSize from './components/ScreenSize';


function App() {
  const [user, setUser] = useState({});

  const [showColor, setShowColor] = useState(true);//esto hace parte del componente Color

  const [showScreenSize, setShowScreenSize] = useState(true);
 

  useEffect(() => {
    const colors = ["#845EC2", "#B39CD0", "#FBEAFF", "#00C9A7", "#C4FCEF"];
    document.body.style = `background: ${colors[Math.floor(Math.random() * colors.length)]}`;
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]));
  }, []);

  console.log(user);

  return (
  <>
  <div className="App"> 
    <div>
      <h1>
        {user.name?.title} {user.name?.first} {user.name?.last}
      </h1>
      <img src={user.picture?.large} alt="Imagen" />
    </div>
    <br />
    
    <Contador />
    <br />
    <Photo />
    <br />
  

    <div>
      <button onClick={()=> setShowColor(!showColor)}>Mostrar / Ocultar Color</button>
      <br />
      {
        showColor ? <Color /> : null
      }
      
    </div>
    <br />
    <div>
    <button onClick={()=> setShowScreenSize(!showScreenSize)}>Mostrar el tamaño de la pantalla</button>
     
      {
        showScreenSize ? <ScreenSize /> : null
      }
    </div>
  </div>
  </>  
  );
}

export default App;