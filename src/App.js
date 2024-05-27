import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Whiskey from './Whiskey';
import Appetizers from './Appetizers';
import Admin from './Admin';
import Login from './Login';
import './App.css';

function PrivateRoute({ children }) {
    const isAuthenticated = /* your authentication logic here */ true; // Set to true for testing
    return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Whiskey />} />
                    <Route path="/appetizers" element={<Appetizers />} />
                    <Route path="/admin" element={
                        <PrivateRoute>
                            <Admin />
                        </PrivateRoute>
                    } />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;