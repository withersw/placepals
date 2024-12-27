import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { saveUser } from "../services/userService";
import './register.css'; // Import CSS file for styling

const Register = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        age: '',
        city: '',
        state: '',
        budget: '',
        noise_tolerance: 'QUIET',
        pet_friendly: false,
        outgoing: false,
        cleanliness_level: 'NEAT',
        bio: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await saveUser(formData);
            console.log("New User: ", formData);
            navigate("/login");
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    return (

        <div className="register-form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
                <input
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
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
            <div className="form-group">
                <input
                    name="age"
                    placeholder="Age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    name="budget"
                    placeholder="Budget"
                    type="number"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <select
                    name="noise_tolerance"
                    value={formData.noise_tolerance}
                    onChange={handleChange}
                    required
                >
                    <option value="QUIET">Quiet</option>
                    <option value="MODERATE">Moderate</option>
                    <option value="LOUD">Loud</option>
                </select>
            </div>
            <div className="form-group checkbox-group">
                <label>
                    Pet Friendly:
                    <input
                        type="checkbox"
                        name="pet_friendly"
                        checked={formData.pet_friendly}
                        onChange={handleCheckboxChange}
                    />
                </label>
                <label>
                    Outgoing:
                    <input
                        type="checkbox"
                        name="outgoing"
                        checked={formData.outgoing}
                        onChange={handleCheckboxChange}
                    />
                </label>
            </div>
            <div className="form-group">
                <select
                    name="cleanliness_level"
                    value={formData.cleanliness_level}
                    onChange={handleChange}
                    required
                >
                    <option value="NEAT">Neat</option>
                    <option value="AVERAGE">Average</option>
                    <option value="MESSY">Messy</option>
                </select>
            </div>
            <div className="form-group">
                <textarea
                    name="bio"
                    placeholder="Bio"
                    value={formData.bio}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="register-button">Register</button>
        </form>
    </div>

        // <div className="register-form-container">
        //     <h2>Register</h2>
        //     <form onSubmit={handleSubmit} className="register-form">
        //         <input
        //             name="first_name"
        //             placeholder="First Name"
        //             value={formData.first_name}
        //             onChange={handleChange}
        //         />
        //         <input
        //             name="last_name"
        //             placeholder="Last Name"
        //             value={formData.last_name}
        //             onChange={handleChange}
        //         />
        //         <input
        //             name="email"
        //             placeholder="Email"
        //             value={formData.email}
        //             onChange={handleChange}
        //         />
        //         <input
        //             type="password"
        //             name="password"
        //             placeholder="Password"
        //             value={formData.password}
        //             onChange={handleChange}
        //         />
        //         <input
        //             name="age"
        //             placeholder="Age"
        //             type="number"
        //             value={formData.age}
        //             onChange={handleChange}
        //         />
        //         <input
        //             name="city"
        //             placeholder="City"
        //             value={formData.city}
        //             onChange={handleChange}
        //         />
        //         <input
        //             name="state"
        //             placeholder="State"
        //             value={formData.state}
        //             onChange={handleChange}
        //         />
        //         <input
        //             name="budget"
        //             placeholder="Budget"
        //             type="number"
        //             value={formData.budget}
        //             onChange={handleChange}
        //         />
        //         <select
        //             name="noise_tolerance"
        //             value={formData.noise_tolerance}
        //             onChange={handleChange}
        //         >
        //             <option value="QUIET">Quiet</option>
        //             <option value="MODERATE">Moderate</option>
        //             <option value="LOUD">Loud</option>
        //         </select>
        //         <label>
        //             Pet Friendly:
        //             <input
        //                 type="checkbox"
        //                 name="pet_friendly"
        //                 checked={formData.pet_friendly}
        //                 onChange={handleCheckboxChange}
        //             />
        //         </label>
        //         <label>
        //             Outgoing:
        //             <input
        //                 type="checkbox"
        //                 name="outgoing"
        //                 checked={formData.outgoing}
        //                 onChange={handleCheckboxChange}
        //             />
        //         </label>
        //         <select
        //             name="cleanliness_level"
        //             value={formData.cleanliness_level}
        //             onChange={handleChange}
        //         >
        //             <option value="NEAT">Neat</option>
        //             <option value="AVERAGE">Average</option>
        //             <option value="MESSY">Messy</option>
        //         </select>
        //         <textarea
        //             name="bio"
        //             placeholder="Bio"
        //             value={formData.bio}
        //             onChange={handleChange}
        //         />
        //         <button type="submit">Register</button>
        //     </form>
        // </div>
    );
};

export default Register;