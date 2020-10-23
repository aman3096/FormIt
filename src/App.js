import React,{useState} from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom';

import Form from './components/form';
import Form1 from './components/form1';
import Success from './components/Success';
import Users from './components/Users';
import Steps from './components/Steps';

function App() {
  const [value,setValue]= useState(0);
  return (
    <>
      <BrowserRouter>
         
          
          <Switch>
            <Route exact path="/Step1" component={Form}/>
            <Route exact path="/Step2" component={Form1}/>
            <Route exact path="/Step3" component={Success}/>
            <Route path="/" component={Form}/>

          </Switch>
      </BrowserRouter>       

      
    </>
  );
}

export default App;
