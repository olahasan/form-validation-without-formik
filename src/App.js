// import './App.css';
import React, { useState } from 'react';
import FormPage from './Components/Form/FormPage';
import Sent from './Components/Sent/Sent';

function App() {
 

  const[ASs, setASs] = useState(false);

  const changeASsState = () => {
    setASs(true)
  }

  return (
    <div className="App">
      {/* <FormPage /> */}
      

      { ASs ? <Sent /> : <FormPage changeASsState={changeASsState}/>}
      {/* { ASs ? "THANK YOU" : <FormPage changeASsState={changeASsState}/>} */}
      {/* { ASs && "youyouyou" } */}

    </div>
  );
}

export default App;
