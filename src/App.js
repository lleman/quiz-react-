import React, {useState} from 'react';
import './App.css';
import Start from './components/Start';
import Questions from './components/Questions';
import { Switch, Route } from "react-router-dom";

function App() {

  
  return (
    <div className="App">
      <Start/>
      
    </div>
  );
}

export default App;
