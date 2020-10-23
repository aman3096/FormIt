import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './form1.css';
import Steps from './Steps';
import Users from './Users';


function Form1(props) {
  const [labelOne,setLabelOne]=useState('');
  const [labelTwo,setLabelTwo]=useState('');
  const [labelThree,setLabelThree]=useState('');
  const [labelFour,setLabelFour]=useState('');
  const [comments,setComments]=useState('');
  const [value, setValue]= useState(3);
  const [isDisabled,setIsDisabled]=useState(labelOne.length && labelTwo.length && labelThree.length && labelFour.length && comments.length );

  const [previousForm,setPreviousForm]=useState(props.location.aboutProps);

  const [uniqueid,setUniqueid] =useState(100);


const formSubmit = (e)=>{
   e.preventDefault();
   alert('Hello');
}

  return (
    <>
     <Users/>
    <Steps a={props.match["path"].charAt(props.match["path"].length-1)}/>
    <div>
      {JSON.stringify(previousForm)}
      <center className="formClass" >
        <form id="form" onSubmit={formSubmit}>
          <p className="para">
          <label className="FormLabel">Input Label</label> 
                <input className="FormInput" name="labelOne" placeholder="Input Placeholder" value={labelOne} onChange={(e)=>{setLabelOne(e.target.value)}} onClick={()=>setIsDisabled(labelOne.length && labelTwo.length && labelThree.length && labelFour.length && comments.length )}/><br/><br/>
          </p>
          <p className="para">
          <label className="FormLabel">Input Label Two</label>
            <input className="FormInput" name="labelTwo" placeholder="Input Placeholder" value={labelTwo} onChange={e=>setLabelTwo(e.target.value)} onClick={()=>setIsDisabled(labelOne.length && labelTwo.length && labelThree.length && labelFour.length && comments.length )}></input><br/><br/>
          </p>
          <p className="para">
          <label className="FormLabel">Input Label Three</label>
            <input className="FormInput" name="labelThree" placeholder="Input Placeholder" value={labelThree} onChange={e=>setLabelThree(e.target.value)} onClick={()=>setIsDisabled(labelOne.length && labelTwo.length && labelThree.length && labelFour.length && comments.length )}></input><br/><br/>
          </p>
          <p className="para">
            <label className="FormLabel">Long Input Label Four </label>
              <input className="FormInput" name="labelFour" placeholder="Input Placeholder" value={labelFour} onChange={e=>setLabelFour(e.target.value)} onClick={()=>setIsDisabled(labelOne.length && labelTwo.length && labelThree.length && labelFour.length && comments.length )}></input><br/><br/>
          </p>
        </form>
        <textarea name="Comments" value={comments} onChange={(e)=>setComments(e.target.value)} onClick={()=>setIsDisabled(labelOne.length && labelTwo.length && labelThree.length && labelFour.length && comments.length )} rows="10" cols="57" placeholder="comments"></textarea><br/><br/>
          <Link to={{
            pathname:"/Step3",
            aboutProps:{
              id:uniqueid,
              Form2:{"LabelOne":labelOne,"labelTwo":labelTwo,"labelThree":labelThree,"labelFour":labelFour,"comments":comments},
              Form1:previousForm,
            }}}><button className="buttona" style={{border:"none"}} onClick={()=>setUniqueid(uniqueid+1)} id="pointer">NEXT</button><br/><br/></Link>
        
        <hr />
        
      </center>
    </div>
    </>
  );
}

export default Form1;
