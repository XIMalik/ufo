import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
  ,
} from "react-router-dom";


import Home from './pages/Home/Home';
import Resume from './pages/Resume/Resume';


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/myresume" element={<Resume/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
