import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (username === '' || password === '') {
            setError('Username and password are required.');
            return;
        }

        // Simulate an authentication process
        if (username === localStorage.getItem('username') && password === localStorage.getItem('password')) {
            setError('');
            onLogin(username);
        } else {
            setError('Invalid username or password.');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className='login'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className={styles.error}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
