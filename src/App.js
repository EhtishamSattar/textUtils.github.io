
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";



import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import Footer from './components/Footer';

function App() {

  const [mode,setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      typ:type
    })

    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggle=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='#F2EBE9'
      showAlert('Light mode is Enabled','success')
      
    }else{
      setMode('dark')      
      document.body.style.backgroundColor='#231955'
      showAlert('Dark mode is Enabled','success')
    }
  }

  
  return (
   <>
   <Navbar title="textUtils" about="About" mode={mode} toggleColor={toggle}/>
   <Alert alert={alert}/>
   <div className="container my-4">

   <Routes>
        <Route path="/" element={<Textform heading="TextUtils - Word Counter , Character Counter , Lower & Upper Casing " mode={mode} showAlert={showAlert} />} />
        <Route path="about" element={<About mode={mode} />} />
    </Routes>
   
   
   </div>
    <Footer/>
    </>
  );
}

export default App;
