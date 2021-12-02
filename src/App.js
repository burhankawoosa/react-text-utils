import './App.css';
import Navbar from './Navbar';
import TextBlock from './TextBlock';
import { useState } from 'react';

function App() {
  const togglefun =() =>{
    if (mode==='light'){
        setMode('dark');
    }

    else {setMode('light')}
}

const [mode,setMode]=useState('dark')
  return (
  <>
  <Navbar Title='Bk Texutils' About='About us' mode={mode} togglefun={togglefun}/>
  <TextBlock/>
  </>
  );

}

export default App;
