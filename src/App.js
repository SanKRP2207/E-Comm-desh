import React from 'react';
import './App.css';
import Footer from './components/Lyout/Footer';
import Nav from './components/Lyout/Nav';
import Singup from './components/Pages/Singup';
import Login from './components/Pages/Login';
import Product from './components/Pages/Product';
import ProductList from './components/Pages/ProductList';
import UpdateProduct from './components/Pages/UpdateProduct';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PrivateComponent from './components/Pages/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Nav />
      
      <Routes>
        <Route element={<PrivateComponent />}> 
        <Route path='/' element={<ProductList />}/>
        <Route path='/add' element={<Product />}/>
        <Route path='/update/:id' element={<UpdateProduct />}/>
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
