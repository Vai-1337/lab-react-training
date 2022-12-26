import React from 'react';
import '../css/idcard.css'

const IdCard = (props) => {
  
    return (
    <div>    
      <div className="card">
        
        <img src={props.picture} alt=""/>
        <div className="text">
          <strong>First name</strong>: {props.firstName} <br/>
          <strong>Last name</strong>: {props.lastName} <br/>
          <strong>Gender</strong>: {props.gender} <br/>
          <strong>Height</strong>: {props.height / 100}m <br/>
          <strong>Birth</strong>: {props.birth.toDateString()} <br/>
        </div>
    </div>
    </div>
    );
  
}

export default IdCard;
