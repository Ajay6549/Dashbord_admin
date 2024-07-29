import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './componants/Login';
import Dashboard from './componants/Dashboard';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (user) => {
        setIsAuthenticated(true);
        setUsername(user);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUsername('');
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    };

    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        path="/login"
                        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
                    />
                    <Route
                        path="/dashboard"
                        element={isAuthenticated ? <Dashboard username={username} onLogout={handleLogout} /> : <Navigate to="/login" />}
                    />
                    <Route
                        path="/"
                        element={<Navigate to="/login" />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
