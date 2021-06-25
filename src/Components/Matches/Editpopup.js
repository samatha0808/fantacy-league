import React from 'react';
import Popup from 'reactjs-popup';

export const MatchPopup = () => {
    return(
    <Popup  position="right center">
      <div>
          <div className="model-header">
              <div className="title" >Edit Match Data</div>
              <button className="close-button">&times;</button>
          </div>
          <div className="model-body"> 
                <label for='match-id'>Match Id</label>
                <input type="text" placeholder="" name="" id=""/>
                <label for='match-Name'>Match Name</label>
                <input type="text" placeholder="" name="" id=""/>
                <label for='Team1'>Team1</label>
                  <select id="" name="">
                       <option value="MI">MI</option>
                       <option value="MI">MI</option>
                       <option value="MI">MI</option>
                       <option value="MI">MI</option>
                  </select>
                  <label for='Team2'>Team2</label>
                  <select id="" name="">
                       <option value="csk">csk</option>
                       <option value="csk">csk</option>
                       <option value="csk">csk</option>
                       <option value="csk">csk</option>
                  </select>

                <label for='match-Name'>Date</label>
                <input type="date" id="" name=""></input>
              <button className='savebutton'>Save</button>
              <button className='resetbutton'>Reset</button>
              <button className='cancelbutton'>Cancel</button>
          </div>
      </div>
    </Popup>
  )}

export default MatchPopup;