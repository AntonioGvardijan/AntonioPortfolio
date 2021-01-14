import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Components/Pages/index";
import ReactGa from 'react-ga';
import { useEffect } from "react";

function App(){

  useEffect(() =>{
    ReactGa.initialize('G-MYHCCXWJBZ')

    //to report page view
    ReactGa.pageview('/')
  }, [])

  return(
    <Router>
      <Home className="page-color"></Home>
    </Router>
  )
}

export default App;
