import React from 'react';
import {useState} from 'react';
import TotalSalary from '../TotalSalary/TotalSalary';

const AddPlayer = ( props) => {
    const club = props.club;
    const[amount,setAmount] = useState([]);
    
 

    let playerName = " ";
    for (let i= 0; i< club.length; i++) {
        const player = club[i];
        playerName = playerName + "  " + player.name + " " + player.Salary;
    }
    return (
        <div>
            <h2>Added Player: {club.length}</h2>
            <h4>Added for Club: {playerName}</h4>
            <TotalSalary>Total Salary:</TotalSalary>
        </div>
    );
};

export default AddPlayer;