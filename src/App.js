import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Whiskey from './Whiskey';
import FoodMenu from './FoodMenu';
import Admin from './Admin';
import Login from './Login';
import './App.css';
import PrivateRoute from './PrivateRoute';



function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Whiskey />} />
                    <Route path="/menu" element={<FoodMenu />} />
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