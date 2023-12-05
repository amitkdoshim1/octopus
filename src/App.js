import React, { createContext, useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import SourceCard from './Components/SourceCard';

export const MyContext = createContext(); 


export default function App() {

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch('/Data.json')
      .then(response => response.json())
      .then(data => setJsonData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const AllData = {
    jsonData
  }

  return (
    <>
    <div className=''>
      <div className="">
      <MyContext.Provider value={AllData}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element = {<Signup/>}></Route>
          <Route path="/SourceCard/:id" element = {<SourceCard />}></Route>
        </Routes>
      </MyContext.Provider>
      </div>
    </div>
    </>
  )
}