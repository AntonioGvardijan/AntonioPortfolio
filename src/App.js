/*import React from 'react';
import Main from './Components/Main';

function App() {
  return (
    <div>    
        <Main></Main>
        <p id="test">Test</p>
        <Main></Main>
        
    </div>
  );
}

export default App;*/

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Components/Pages/index";

function App(){
  return(
    <Router>
      <Home className="page-color"></Home>
    </Router>
  )
}

export default App;
