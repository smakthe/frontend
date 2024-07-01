import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import { Container } from '@material-ui/core';

const App = () => (
    <Router>
        <Navbar /><br/><br/>
        <Container>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/records/:id" element={<RecordPage />} />
            </Routes>
        </Container>
    </Router>
);

export default App;
