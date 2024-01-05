
import './App.css';
import MainHeader from './components/MainHeader.module';
import Login from './components/Login.module';
import {useEffect , useState } from 'react';
import Home from './components/Home.module';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect = (()  =>  {
  const temp = localStorage.getItem("isLoggedIn");
  console.log(temp);
  if(temp === "1") {
    setIsLoggedIn(true);
  }
  }, []);

  const loginHandler = (eamil, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  
  return (
    <div>
     
      <MainHeader  isLoggedIn ={isLoggedIn} onLagout={logoutHandler} /> 
      {!isLoggedIn && <Login onLogin={loginHandler} onLagout={logoutHandler} /> }
      {isLoggedIn && <Home/> }
   </div>
  );
}

export default App;
