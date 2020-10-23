import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Users from './Users';
import Steps from './Steps';
import './form.css';


function Form(props) {
  const [labelOne,setLabelOne]=useState('');
  const [labelTwo,setLabelTwo]=useState('');
  const [labelThree,setLabelThree]=useState('');
  const [labelFour,setLabelFour]=useState('');
  const [comments,setComments]=useState('');
  const [value, setValue]= useState(2);
  const [isDisabled,setIsDisabled]=useState(labelOne.length && labelTwo.length && labelThree.length && labelFour.length && comments.length );
  
  const handleSubmit= (e)=>{
    e.preventDefault();

  }

  return (
    <>
    <Users/>
   <Steps a={props.match["path"].charAt(props.match["path"].length-1)}/>
    <div>
      <center className="formClass" >
        <form id="form" onSubmit={handleSubmit} >
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
            pathname:"/Step"+value,
            aboutProps: {
              Form1:{"PrevLabelOne":labelOne,"PrevLabelTwo":labelTwo,"PrevLabelThree":labelThree,"PrevLabelFour":labelFour,"PrevComments":comments}
            }
            }}><button type="submit" className="buttona" style={{border:"none"}} id="pointer" onClick={(()=>{setValue((value+1))})}>NEXT</button><br/><br/></Link>
          
        

        <hr />
        {/*  */}
      </center>
    </div>
    </>
  );
}

export default Form;
