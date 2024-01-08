
import './App.css';
import MainHeader from './components/MainHeader.module';
import Login from './components/UI/Login.module';
import { useContext, useEffect, useState } from 'react';
import Home from './components/UI/Home.module';
import AuthContext from './components/context/auth-context';



function App() {
  const authContext = useContext(AuthContext);
  return (
    <>
      <MainHeader/>
      {!authContext.isLoggedIn && <Login/>}
      {authContext.isLoggedIn && <Home/>}
    </>
  );
}

export default App;
