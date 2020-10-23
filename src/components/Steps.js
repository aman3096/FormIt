import React,{useState} from 'react';
import './Steps.css';
import {Link} from 'react-router-dom';
export default function Steps(props) {
  const [ active,setActive ] = useState(false);
  const [ active1,setActive1 ] = useState(false);
  const [ active2,setActive2 ] = useState(false);
  return (
    <div>
<span style={{"fontFamily":"Helvetica",fontSize:"32px",color:"gray",marginLeft:"12%"}}>STEP {props.a}</span>
      <ul className="progressbar">
          <Link className="linkStyle" to="/Step1">
            <li id="li" className={ active &&'active'}
            onClick={()=> setActive(!active)}/>
          </Link>
          <Link className="linkStyle" to="/Step2">
            <li id="li" className={ active1 &&'active'}
            onClick={()=> setActive1(!active1)}></li>
          </Link>
          <Link className="linkStyle" to="/Step3">
            <li id="lid" className={ active2 &&'active'}
            onClick={()=> setActive2(!active2)}></li>
          </Link>
  </ul><br/>
    </div>
  );
}
