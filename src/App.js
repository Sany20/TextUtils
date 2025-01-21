
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About"/>
      <Alert alert={alert}/>
      <div className='container'>
        <TextForm showAlert={showAlert} heading="Enter Text below to analyze"/>
      </div>

  </>
  );
}

export default App;
