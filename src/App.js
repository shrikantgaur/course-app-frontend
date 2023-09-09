// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/front/layout/Layout';

// Import your components for different routes
import Home from './components/front/pages/home/Home';
import About from './components/front/pages/About';
import Contact from './components/front/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path='/signup' element={<Layout><Home/></Layout>}/>
        <Route path='/signin' element={<Layout><Home/></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
