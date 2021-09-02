import React, {useState} from 'react';
import './App.css';
import Start from './components/Start';
import Questions from './components/Questions';
import { Switch, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
      <Start/>
      </Route>
      <Route path="/startquiz">
      <Questions/>
      </Route></Switch>
    </div>
  );
}

export default App;
