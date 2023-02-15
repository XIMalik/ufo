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
import About from './components/about/About';


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutme" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
