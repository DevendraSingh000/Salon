import React from 'react';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Services from './components/Services';
import About from './components/About';
import Contect from './components/Contect';
import Gallery from './components/Gallery';
import Blog from './components/Blog';

function App() {
const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /></>
    },
    {
      path: '/Pricing',
      element: <><Navbar /><Pricing /></>
    },
    {
      path: '/Services',
      element: <><Navbar /><Services /></>
    },
    {
      path: '/Gallery',
      element: <><Navbar /><Gallery /></>
    },
    {
      path: '/Blog',
      element: <><Navbar /><Blog /></>
    },
    {
      path: '/About',
      element: <><Navbar /><About /></>
    },
    {
      path: '/Contect',
      element: <><Navbar /><Contect /></>
    },
])

  return (
    <RouterProvider router={router}/>
    
  );
}

export default App;
