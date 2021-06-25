import React from "react";
import Table from '../Table/Table';
import './auctions.css';

const Auction = () => {
    let heder = {
        id: 'ID',
        actionName: 'Action Name',
        category: 'Category',
        type: 'Type',
        status: 'Status',
        startTime: 'Start Time',
        actions: 'Actions'
    }
    let tabledata = [
        {
            id: 1,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'true',
            startTime: '2021-03-25 01:57:13',
            actions: 'Edit'
        },
        {
            id: 2,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'true',
            startTime: '2021-03-25 01:57:13',
            actions: 'Edit'
        },
        {
            id: 3,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'true',
            startTime: '2021-03-25 01:57:13',
            actions: 'Edit'
        },
        {
            id: 4,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'true',
            startTime: '2021-03-25 01:57:13',
            actions: 'Edit'
        },
        {
            id: 5,
            actionName: 'Star Batsmen',
            category: 'A',
            type: 'Batsmen',
            status: 'true',
            startTime: '2021-03-25 01:57:13',
            actions: 'Edit'
        }
    ]
    return  (
        <div className="container">
            <nav className="navbar auction-header">
                <h5 className="lablename">IPL-Acutions</h5>
            </nav>
            <input className="search-input" type="text" placeholder="Search auction name.."></input>
            <Table heder={heder} tabledata={tabledata} />
            <div><small>showing 5 of 30 entries</small></div>
        </div>
    )
}

export default Auction;
