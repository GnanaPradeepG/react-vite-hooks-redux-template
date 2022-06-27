import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../features/Navbar/Navbar';
import HomeView from '../features/Home/HomeView';
import Login from '../features/Login/Login';
import Footer from '../features/Footer/Footer';
// import ProtectedRoute from './utils/ProtectedRoute';

function WrapContent(content) {
  return (
    <>
      {/* <ProtectedRoute component={content} /> */}
      <Navbar />
      {content}
      <Footer />
    </>
  );
}

function View() {
  return (
    <div>
      <Routes>
        <Route path="*" element={WrapContent(<HomeView />)} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default View;
