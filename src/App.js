
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {

  const [mode, setMode] =useState('light');
  const [alert, setAlert] =useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  setTimeout(() =>{
    setAlert(null);
  },1500);
  }
//  color palate
  // const removeBodyClasses=() =>{
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
   
  // }


  const toggleMode=() =>{
    // removeBodyClasses()
  //  document.body.classList.add('bg-'+cls)
  
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title= 'TextUtils - Dark mode';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled","success");
      // document.title= 'TextUtils - Light mode';
    }
   
  }
  return (
    <>
   
    <Router>
    <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} AboutText="About"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          
          <Route exact path="/" element={<TextForm showAlert={showAlert}  heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}  />
          <Route exact path="/about" element={<About  mode={mode} />} />  
    </Routes>
    </div>
    </Router>

    </>
   
  );
}

export default App;
