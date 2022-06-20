import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomeView from '../features/HomeView';
import Footer from './Footer';

function View() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="*" element={<HomeView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default View;
