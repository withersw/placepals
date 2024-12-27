import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/userService';
import './login.css'; // Optional: Add styling for the login page

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

            // Encode email and password to Base64 for Basic Authentication
        //const authHeader = `Basic ${btoa(`${email}:${password}`)}`;

        // Handle login logic (e.g., make API call to authenticate user)
        try {
            await loginUser(formData);
            console.log("Logging in with:", formData);

        // Save email in localStorage
        localStorage.setItem('userEmail', formData.email);

            navigate("/profiles");
            alert("Login successful");
        } catch (error) {
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
        <div>
            <h1>PLACE PALS</h1>
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </button>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="register-link">
                Not registered? <Link to="/register">Create an account</Link>
            </p>
        </div>
        </div>
    );
};

export default Login;