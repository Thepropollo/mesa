import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Reserva from './components/Reserva';
import Factura from './components/Factura';
import Chino from './components/Chino';
import Italiano from './components/Italiano';   
import Asadero from './components/Asadero';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<HomePage />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/reserva" element={<Reserva />} />
                <Route path="/factura" element={<Factura />} />
                <Route path="/chino" element={<Chino />} />
                <Route path="/italiano" element={<Italiano />} />
                <Route path="/asadero" element={<Asadero />} />
            </Routes>
        </Router>
    );
};

export default App;