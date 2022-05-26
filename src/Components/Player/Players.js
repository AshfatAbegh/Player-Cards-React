import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const{name, Salary,image} = props.player;
    const imageStyle = {height:'200px'}
    const playerStyle = {border:'1px solid red', margin:'10px', padding:'10px'}
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div style={playerStyle}>
            <img style = {imageStyle} src={image} alt=" "/>
            <h4>{name}</h4>
            <p>Salary: {Salary}</p>
            <button onClick={()=>handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faHome}/>Add for Club</button>
        </div>
    );
};

export default Player;