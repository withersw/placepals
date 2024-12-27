import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getProfile, updateUserProfile, getCurrentUser, getProfileByEmail, updatePhoto } from '../services/userService'; // Replace with actual service methods
import './userProfile.css';

const UserProfile = () => {
    const fileRef = useRef();
    const [file, setFile] = useState(undefined);
    const [profile, setProfile] = useState({
        id: '',
        firstName: '', 
        lastName: '',  
        age: 0,
        email: '',
        city: '',
        state: '',
        budget: 0,
        noiseTolerance: '',
        cleanlinessLevel: '',
        petFriendly: false,
        outgoing: false,
        roomListingType: '',
        bio: '',
        profilePictureUrl: ''
    });

    const noiseToleranceOptions = ["QUIET", "MODERATE", "LOUD"];
    const cleanlinessOptions = ["MESSY", "AVERAGE", "NEAT"];
    const roomListingOptions = ["LOOKING_FOR_ROOM", "RENTING_OUT_ROOM"];

    const [isEditing, setIsEditing] = useState(false);

    const toSnakeCase = (obj) => {
        const snakeCaseObj = {};
        for (const key in obj) {
            const snakeKey = key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
            snakeCaseObj[snakeKey] = obj[key];
        }
        return snakeCaseObj;
    };

    const fetchProfile = async () => {
        const email = localStorage.getItem('userEmail')
        try {
            const response = await getProfileByEmail(email);
            const responseProfile = response.data;
            setProfile(responseProfile);
            console.log("data: ", responseProfile);
        } catch (error) {
            console.error("Error fetching profile:", error);
            console.log("data: ", profile);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfile((prevProfile) => ({
                    ...prevProfile,
                    profile_picture_url: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
        // try {
        //     const formData = new FormData();
        //     formData.append('file', file, file.name);
        //     formData.append('id', id);
        //     await updateImage(formData);
        //     setContact((prev) => ({ ...prev, photoUrl: `${prev.photoUrl}?updated_at=${new Date().getTime()}` }));
        //     toastSuccess('Photo updated');
        // } catch (error) {
        //     console.log(error);
        //     toastError(error.message);
        // }
    };

    const handleSave = async () => {
        try {
            const snakeCaseProfile = toSnakeCase(profile);
            await updateUserProfile(snakeCaseProfile);
            const formData = new FormData();
            formData.append('file', file, file.name);
            formData.append('id', snakeCaseProfile.id);
            const { data: photoUrl } = await updatePhoto(formData);
            console.log(photoUrl);
            setIsEditing(false);
            alert('Profile updated successfully!');
        } catch (error) {
            console.error("Error updating profile:", error);
            alert('Failed to update profile. Please try again.');
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            {profile.profilePictureUrl && (
                <img
                    src={profile.profilePictureUrl}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="profile-picture"
                />
            )}
            <div className="profile-details">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            name="firstName"
                            value={profile.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={profile.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                        />
                        <input
                            type="number"
                            name="age"
                            value={profile.age}
                            onChange={handleChange}
                            placeholder="Age"
                        />
                        <input
                            type="text"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            name="city"
                            value={profile.city}
                            onChange={handleChange}
                            placeholder="City"
                        />
                        <input
                            type="text"
                            name="state"
                            value={profile.state}
                            onChange={handleChange}
                            placeholder="State"
                        />
                        <input
                            type="number"
                            name="budget"
                            value={profile.budget}
                            onChange={handleChange}
                            placeholder="Budget"
                        />
                        <label>
                        Noise Tolerance:
                        <select
                            name="noiseTolerance"
                            value={profile.noiseTolerance || ''}
                            onChange={handleChange}
                        >
                            
                            {noiseToleranceOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                            </select>
                        </label>

                        <label>
                            Pet Friendly:
                            <input
                                type="checkbox"
                                name="petFriendly"
                                checked={profile.petFriendly}
                                onChange={(e) =>
                                    setProfile((prevProfile) => ({
                                        ...prevProfile,
                                        petFriendly: e.target.checked,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            Outgoing:
                            <input
                                type="checkbox"
                                name="outgoing"
                                checked={profile.outgoing}
                                onChange={(e) =>
                                    setProfile((prevProfile) => ({
                                        ...prevProfile,
                                        outgoing: e.target.checked,
                                    }))
                                }
                            />
                        </label>

                        <label>
                            Cleanliness Level:
                            <select
                                name="cleanlinessLevel"
                                value={profile.cleanlinessLevel || ''}
                                onChange={handleChange}
                            >
                                {cleanlinessOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            Room Listing Type:
                            <select
                                name="roomListingType"
                                value={profile.roomListingType || ''}
                                onChange={handleChange}
                            >
                                {roomListingOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label>
                            Profile Picture:
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {setFile(e.target.files[0]); console.log(file)}}
                                ref={fileRef}
                                name="photo"
                            />
                        </label>
                        {profile.profilePictureUrl && (
                            <img
                                src={profile.profilePictureUrl}
                                alt="Profile"
                                style={{ width: "100px", height: "100px" }}
                            />
                        )}

                        <textarea
                            name="bio"
                            value={profile.bio}
                            onChange={handleChange}
                            placeholder="Bio"
                        />
                        <button onClick={handleSave}>Save</button>
                    </>
                ) : (
                    <>
                        <div className='displayed-details'>
                            <h3>Name: {profile.firstName} {profile.lastName}</h3>
                            <p>Email: {profile.email}</p>
                            <p>City: {profile.city}, {profile.state}</p>
                            <p>Age: {profile.age}</p>
                            <p>Budget: ${profile.budget}</p>
                            <p>Bio: {profile.bio}</p>
                        </div>
                    </>
                )}
            </div>
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel' : 'Edit'}
            </button>
        </div>
    );
};

export default UserProfile;