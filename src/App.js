import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import {toggleMode} from 'react';
function App() {
  const[mode,setMode]=useState('light');
  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#022442';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar Title="CONVERSION TEXTUTILES" abouText="" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    {/* USE OF REACT JS | JAVASCRIPT | HTML | CSS | BOOTSTRAP |----BASIC PROFFESIONAL WEBSITE */}
    <Textform mode={mode}/>
    </div>
    </>
  );
}
export default App;
