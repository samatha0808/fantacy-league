import React, {useState} from 'react';
import Auction from '../../Auctions/Auction';
import Players from '../../Players/Players';
import Matches from '../../Matches/Matches';
import "./sidebar.css";

 function Sidebar(){
     const [page, setPage] = useState('auction');
    return (
        <div className="maincontainer">
            <div className="Sidebar pt-3">
                <ul className="sidebarlist">
                    <li className="row" onClick={()=> {setPage('auction')}}>
                        <div>
                            <img className="img" alt='' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e7d7999d-2ee8-4057-a2d5-957032f5cd84;revision=0?component_id=4684c1b0-2cb3-4938-98a3-c0b879a833bb&api_key=CometServer1&access_token=1624637006_urn%3Aaaid%3Asc%3AUS%3Ae7d7999d-2ee8-4057-a2d5-957032f5cd84%3Bpublic_3af4d1342cba7da660703a99d9208e6bfebd41e1"/>
                            <span className="lable">IPL-Actions</span>
                        </div>
                    </li> 
                    <li className="row" onClick={()=> {setPage('player')}}>   
                        <div>
                            <img className="img" alt='' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e7d7999d-2ee8-4057-a2d5-957032f5cd84;revision=0?component_id=2db83afe-e690-494f-b958-c5393862602c&api_key=CometServer1&access_token=1624637006_urn%3Aaaid%3Asc%3AUS%3Ae7d7999d-2ee8-4057-a2d5-957032f5cd84%3Bpublic_3af4d1342cba7da660703a99d9208e6bfebd41e1"/>
                            <span className="lable">Players</span>
                        </div>
                    </li> 
                    <li className="row" onClick={()=> {setPage('match')}}>   
                        <div>
                            <img className="img" alt='' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e7d7999d-2ee8-4057-a2d5-957032f5cd84;revision=0?component_id=05f3f7a3-8ded-4db2-b577-56b869a75880&api_key=CometServer1&access_token=1624637006_urn%3Aaaid%3Asc%3AUS%3Ae7d7999d-2ee8-4057-a2d5-957032f5cd84%3Bpublic_3af4d1342cba7da660703a99d9208e6bfebd41e1"/>
                            <span className="lable">IPL-Matches</span>
                        </div>
                    </li>
                </ul>
                {page === 'auction' && <span className="mainpage"><Auction /></span> }
                {page === 'player' && <span className="mainpage"><Players /></span> }
                {page === 'match' && <span className="mainpage"><Matches /></span> }
            </div>
        </div>
    );
  }

export default Sidebar;
