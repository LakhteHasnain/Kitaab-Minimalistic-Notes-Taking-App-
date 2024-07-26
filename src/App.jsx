import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Auth from './pages/auth';
import Main from './pages/Main';
import TakeNotes from './pages/takeNotes';
import NoteDetails from './pages/notedetails';
import { GlobalProvider } from './context/GlobalState';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ComingSoonModal from './components/popup'; 

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dum" element={<ComingSoonModal />} /> 
            <Route path="/main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
            <Route path="/create_notes" element={<ProtectedRoute><TakeNotes /></ProtectedRoute>} />
            <Route path="/note_details" element={<ProtectedRoute><NoteDetails /></ProtectedRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
