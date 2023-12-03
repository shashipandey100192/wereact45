import React from 'react';
import ReactDOM from 'react-dom/client';
import Abc, { Myabout1,Myabout2 ,Myabout3,Heading} from './About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Mybootstrap from './Mybootstrap';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Mybootstrap></Mybootstrap>
    <Abc></Abc>
    <Myabout1></Myabout1>
    <Myabout2></Myabout2>
    <Myabout3></Myabout3>
    <Heading></Heading>
   
  </React.StrictMode>
);

