import React from "react";
import MatchesTable from './MatchesTable/MatchesTable';
import './Matches.css';

const Matches = () => {
    let heder = {
        id: 'ID',
        MatchName: 'Match Name',
        Team1: 'Team 1',
        Team2: 'Team 2',
        Date: 'Date',        
        actions: 'Actions'
    }
    let tabledata = [
        {
            id: '#007',
            MatchName : 'Paytm Cricat League',
            Team1 : 'MI',
            Team2 : 'CSK',
            Date : '16/04/2021',
            actions:{ action1 :' Edit',
                action2 : 'Points'
            }
        },
        {
            id: '#008',
            MatchName : 'Vivo IPL',
            Team1 : 'MI',
            Team2 : 'CSK',
            Date : '16/04/2021',            
            actions : { action1 :' Edit',
                        action2 : 'Points'
                    }
        },
        {
            id : '#009',
            MatchName : 'Paytm Cricat League',
            Team1 : 'MI',
            Team2 : 'CSK',
            Date : '16/04/2021',            
            actions:{ action1 :' Edit',
            action2 : 'Points'
                    }
        },
        {
            id: '#0010',
            MatchName : 'Paytm Cricat League',
            Team1 : 'MI',
            Team2 : 'CSK',
            Date : '16/04/2021',           
            actions:{ action1 :' Edit',
            action2 : 'Points'
                    }
        },
        {
            id: '#0011',
            MatchName : 'Vivi IPL',
            Team1 : 'MI',
            Team2 : 'CSK',
            Date : '16/04/2021',            
            actions:{ action1 :' Edit',
            action2 : 'Points'
                    }
        }
    ]
    return  (
        <div className="container">
            <nav className="navbar match-header">
                <h5 className="lablename">IPL-Matches List</h5>
            </nav>
            <input className="search-input" type="text" placeholder="Search Match name.."></input>
            <MatchesTable heder={heder} tabledata={tabledata} />
            <div><small>showing 5 of 30 entries</small></div>
        </div>
    )
}

export default Matches;
