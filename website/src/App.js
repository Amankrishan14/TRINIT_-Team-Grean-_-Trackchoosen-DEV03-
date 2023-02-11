import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import Enthusiast from './Routes/Enthusiast';
import Farmers from './Routes/Farmers';
function App() {
  return (
    <>
    <Routes>
      <Route path='/'element ={<Home/>}/>
      <Route path='/blog'element ={<Blog/>}/>
      <Route path="/blog/:slug" element={<SinglePost />}></Route>
      <Route path='/enthusiast'element ={<Enthusiast/>}/>
      <Route path='/farmers'element ={<Farmers/>}/>
    </Routes>
    </>
  
  );
}

export default App;
