import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomeView from '../features/Home/HomeView';
import Login from '../features/Login/Login';
import Footer from './Footer';
import ProtectedRoute from './utils/ProtectedRoute';

function View() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path=""
          element={
            // <ProtectedRoute component={HomeView} />
            <HomeView />
        }
        />
        <Route
          path="home"
          element={
            // <ProtectedRoute component={HomeView} />
            <HomeView />

        }
        />
        <Route
          path="*"
          element={
            // <ProtectedRoute component={HomeView} />
            <HomeView />

        }
        />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default View;
