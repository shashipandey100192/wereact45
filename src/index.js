import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc from './About';
import { Myabout1,Myabout2 ,Myabout3} from './About';
import "./style.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Abc></Abc>
    <Myabout1></Myabout1>
    <Myabout2></Myabout2>
    <Myabout3></Myabout3>
  </React.StrictMode>
);

