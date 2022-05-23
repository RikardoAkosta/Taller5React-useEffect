import { useState , useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const colors = ["#845EC2", "#B39CD0", "#FBEAFF", "#00C9A7", "#C4FCEF"];
    document.body.style = `background: ${colors[Math.floor(Math.random() * colors.length)]}`;
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]));
  }, []);

  console.log(user);

  return (
    <div className="App">
      <h1>
        {user.name?.title} {user.name?.first} {user.name?.last}
      </h1>
      <img src={user.picture?.large} alt="" />
    </div>
  );
}

export default App;