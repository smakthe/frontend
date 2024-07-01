import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import { Container } from '@mui/material';

const App = () => (
    <Router>
        <Navbar />
        <Container>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/records/:id" element={<RecordPage />} />
            </Routes>
        </Container>
    </Router>
);

export default App;
