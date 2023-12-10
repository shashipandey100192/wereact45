import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Mylogin from './modules/Auth/Mylogin';
import Mynav from './shares/Mynav';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Myregistor from './modules/Auth/Myregistor';
import Landingpage from './modules/Dashboard/Landingpage';
import "./modules/global.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Mynav></Mynav>
      <Routes>
          <Route path='/' element={<Mylogin/>}/>
          <Route path='registor' element={<Myregistor/>}/>
          <Route path='dashboard' element={<Landingpage/>}/>
      </Routes>
     </BrowserRouter>
   
  </React.StrictMode>
);

