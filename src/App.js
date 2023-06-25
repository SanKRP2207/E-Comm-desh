import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Singup from './components/Singup';
import Login from './components/Login';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav />
      
      <Routes>
        <Route element={<PrivateComponent />}> 
        <Route path='/' element={<h1>Product Listing Component</h1>}/>
        <Route path='/add' element={<h1>Add Product Component</h1>}/>
        <Route path='/update' element={<h1>update Product Component</h1>}/>
        <Route path='/delete' element={<h1>delete Product Component</h1>}/>
        <Route path='/logout' element={<h1>logout Product Component</h1>}/>
        <Route path='/profile' element={<h1>profile Product Component</h1>}/>
        </Route>
        <Route path='/singup' element={<Singup />}/>
        <Route path='/login' element={<Login />}/>;
        
      </Routes>
      <footer>
      <Footer />
      </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
