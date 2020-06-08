import React from "react";
import "./style.css";

function Card(props) {
  return (
      <div className={"card " } >  
          <div className="img-container">
              <img alt={props.name} src={props.image} />
          </div>
          <div className="img-content">
              <ul>
                  <li><strong>Project: </strong>{props.name} </li>
                  <li><strong> <a href = {props.gitHub} target="_blank" rel="noopener noreferrer">GitHub Link</a> </strong> </li>
                  <li><strong> <a href = {props.deploy}target="_blank" rel="noopener noreferrer">Website Link </a></strong>  </li>                
              </ul>
          </div>
      </div >
  )
}

export default Card;
