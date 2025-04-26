import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '/header';
import Footer from '/footer';
import Home from './home';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proyecto" element={<div>Información del Proyecto</div>} />
                <Route path="/contacto" element={<div>Información de Contacto</div>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
