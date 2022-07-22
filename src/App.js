import { useState } from 'react';
import './App.css';
//import React, { Component } from 'react'
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('white'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'white') {
      setMode('dark');
      document.body.style.backgroundColor = '#A9CCE3';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";
      //   setInterval(() => {
      //     document.title = "Textutils Is Amazing Mode"
      //   }, 2000);
      //   setInterval(() => {
      //     document.title = "Install Textutils Now"
      //   }, 1500);
    }
    else {
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  }
 
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
     <Router>  
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          {/* /users --> Component 1
              /users/Home --> Component 2 */}
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/" > 
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch> 
        </div>
        </Router>
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
        {/* <div className= "Container my-1"/> */}
        <About/>         
        {/* <About/> */}
    </>
  );
}
  

