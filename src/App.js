import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authentication } from './Auth';
import { LoginPage, RegisterPage } from './Login/Login-out';
import { LoginRouter, MainRouter } from './MainRouter';
import { Home } from './Home';
import { AddProduct } from './AddProduct';
import { useLayoutEffect } from 'react';
import { NavBar } from './Nav';

function App() {

  return (
    <Authentication>
      <BrowserRouter>
        <Routes>
          <Route element = {<LoginRouter/>}>
            <Route path = '/login' element = {<LoginPage/>}/>
            <Route path = '/register' element = {<RegisterPage/>}/>
          </Route>
          <Route element = {<MainRouter/>}>
            <Route element = {<NavBar/>}>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/product" element = {<AddProduct/>}/>
            </Route>
            
          </Route>
        </Routes>
      
      </BrowserRouter>

    </Authentication>
  );
}

export default App;
