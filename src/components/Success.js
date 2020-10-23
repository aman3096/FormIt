import React,{useState,useEffect} from 'react';
import './Success.css';
import axios from 'axios';
import sucess from '../success.svg';
import {Link,useParams} from 'react-router-dom';

export default function Success(props) {
  const url="https://5f901525e0559c0016ad602d.mockapi.io/api/v1/users";//mock url data
  const [data,setData] = useState(props.location.aboutProps);
  useEffect(() => {
    axios.post(url,data).then((dats)=>console.log('Success',dats)).catch(err=>console.log('err',err));
  }, []);
  return (
    <div>
      {JSON.stringify(data)}
      <center id="success">
          <div id="DivSuc">
        <img id="imgGap" src={sucess}/>
        <h1 style={{fontFamily:"Helvetica",fontSize:"57px",color:"gray",marginTop:"5%"}}>Success</h1>
        <span id="spanTag">Your application has been submitted.</span><br/>
        <br/><br/>
        <Link to="/Step1"><button>OK</button></Link><br/><br/><br/>
        </div>
      </center>
    </div>
  );
}
