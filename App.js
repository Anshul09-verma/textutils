
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(false)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
      
    },1500);

  }
  const toggleMode=()=>{
  if(mode==="light"){
    setMode("dark")
    document.body.style.backgroundColor="#042743";
    showAlert(" Dark mode has been enabled","success");
  }
  else{
    setMode("light")
    document.body.style.backgroundColor="white";
    showAlert(" Light mode has been enabled","success");

  }
}
  return (
    <div>
      <Navbar logo='Anshul' changeMode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading="Enter the Text to analyz below" changeMode={mode} showAlert={showAlert} placeholder="Type here..."/>
      </div>
    </div>
  );
}

export default App;
