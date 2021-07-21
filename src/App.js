import React,{useState,useEffect} from "react";
import './App.css';
import Homepage from "./Homepage";

import Salad from './Salad';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Barnyard from './Barnyard';
import Biryani from './Biryani';
import HenHouse from './Henhouse';
import Seafood from './Sea';
import Fastfood from './Fastfood';
function App() {
  const[data,setData] = useState([]);
  const fetchdata =async()=>{
    const res   = await fetch("https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099");
    const finres= await res.json();
    setData(finres); 
  }
  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <>           <Router>
   <Homepage/>
   <Switch>
           
   <Route exact path="/salad" component={Salad}></Route>
  <Route exact path="/barnyard" component={Barnyard}></Route>
  <Route exact path="/henhouse" component={HenHouse}></Route>
  <Route exact path="/sea" component={Seafood}></Route>
  <Route exact path="/biryani" component={Biryani}></Route>
  <Route exact path="/fastfood" component={Fastfood}></Route>
   </Switch>
   
   </Router>
 
   
    </>
  );
}

export default App;
