import React, { useState, useEffect } from "react";
import Questions from "./Questions";
import '../App.css';
import { Switch, Route, Link } from "react-router-dom";

function Start() {
  const [screen, setScreen] = useState(true);

    const handleGo = () => {
      setScreen(false);
    };
 
  return (
    <div>
      {screen ? (
        <div className="screen">
          <h1>Start the quiz...</h1>
          <Link to="/startquiz">
            <button onClick={handleGo}>Go</button>
          </Link>
        </div>
      ) : (
          <Route exact path="/startquiz">
            <Questions />
          </Route>
      )}
    </div>
  );
}
export default Start;
