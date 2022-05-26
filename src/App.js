import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {useState} from 'react';
import Players from './Components/Player/Players';
import PlayerData from './PlayerData/data.json';
import AddPlayer from './Components/AddedPlayer/AddPlayer';



function App() {
  const[Player, setPlayer] = useState([]);
  const[club,setClub] = useState([]);
  
  useEffect(()=>{
      setPlayer(PlayerData);
      console.log(PlayerData);
      const names = PlayerData.map(player => player.name);
      console.log(names);
      }, [])

      const handleAddPlayer = (player)=>
      {
        const newClub = [...club,player];
        console.log(player.name);
        setClub(newClub);
      }
  return (
    <div className="App">
      <h1>Total Player: {Player.length}</h1>
      <AddPlayer club={club}></AddPlayer>
    
     
        {
        Player.map(player => <Players player={player} handleAddPlayer={handleAddPlayer}></Players>)
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
