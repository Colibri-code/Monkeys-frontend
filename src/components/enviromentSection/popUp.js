import React from "react";
 
const PopUp = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="content-header">
            <p>Deploy code to Stage</p>
        </div>                
        <div className="placeholder" data-placeholder="currently stage on tags/WELCOME">
            <input className="input-control"/>
        </div>
        <label>Create new tag from master and deploy</label>
        <div className="placeholder" data-placeholder="currently on master">
            <input className="input-control"/>
        </div>
        {/*
            <span className="close-icon" onClick={props.handleClose}>x</span>
        */}
        
        {props.content}
      </div>
    </div>
  );
};
 
export default PopUp;