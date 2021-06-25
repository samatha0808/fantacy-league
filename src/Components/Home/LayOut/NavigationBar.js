import React from 'react';
import { Dropdown } from 'react-bootstrap';

import './navbar.css';

 const  NavigationBar = () => {
   return(
      <div className="navbar-head">
        <div className="left-side">
          <img className="img-head" alt='' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:e7d7999d-2ee8-4057-a2d5-957032f5cd84;revision=0?component_id=77a8111a-db2e-43a0-80b7-9ec10f13840f&api_key=CometServer1&access_token=1624637006_urn%3Aaaid%3Asc%3AUS%3Ae7d7999d-2ee8-4057-a2d5-957032f5cd84%3Bpublic_3af4d1342cba7da660703a99d9208e6bfebd41e1" /> 
          <span className="lable-header"><b>IPL 2021</b></span>
          <span className="barcolor" ><i class="fa fa-bars "></i></span>
        </div>
        <div className="right-side">
          <Dropdown.Toggle variant="link" id="dropdown-basic">Admin</Dropdown.Toggle> 
          <img className="img-circle" alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpN6-rP-uYsdsk_HoefLVW52kCoQ9xDQG2sg&usqp=CAU"/>
        </div>
      </div>
   );
 }

export default NavigationBar;
