import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import Navbar from './components/nav';
import About from './pages/about';
import AssignmentUploader from './pages/assignment';
import ViewAssignment from './pages/viewAssignment';
import Contact from './pages/contact';
import ScrollToTopButton from './components/scrotoTop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/assignment" element={<AssignmentUploader />} />
        <Route path="/assignments/:id" element={<ViewAssignment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
