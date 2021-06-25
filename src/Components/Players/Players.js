import React from "react";
import Table from '../Table/Table';
import './Players.css';

const Players = () => {
    let heder = {
        id: 'ID',
        actionName: 'Player Name',
        category: 'Category',
        type: 'Type',
        status: 'Franchises',
        startTime: 'Base Price (Rs)',
        actions: 'Actions'
    }
    let tabledata = [
        {
            id: 1,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'csk',
            startTime: '2000000',
            actions: 'Edit'
        },
        {
            id: 2,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'csk',
            startTime: '200000',
            actions: 'Edit'
        },
        {
            id: 3,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'csk',
            startTime: '200000',
            actions: 'Edit'
        },
        {
            id: 4,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'csk',
            startTime: '200000',
            actions: 'Edit'
        },
        {
            id: 5,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'csk',
            startTime: '200000',
            actions: 'Edit'
        }
    ]
    return  (
        <div className="container">
            <nav className="navbar player-header">
                <h5 className="lablename">IPL-Players List</h5>
            </nav>
            <input className="search-input" type="text" placeholder="Search auction name.."></input>
            <Table heder={heder} tabledata={tabledata} />
            <div><small>showing 5 of 30 entries</small></div>
        </div>
    )
}

export default Players;
