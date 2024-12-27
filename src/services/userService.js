import axios from "axios";

const API_URL = 'http://localhost:8080/profiles'

export async function saveUser(user) {
    return await axios.post(`${API_URL}/register`, user);
}

// export async function getCurrentUser(email) { // change backend
//     return await axios.get(`${API_URL}/${email}`);

//     // try {
//     //     const response = await fetch(`http://localhost:8080/profiles/${email}`, {
//     //         method: 'GET',
//     //         headers: {
//     //             'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // If using JWT token
//     //         },
//     //     });
//     //     if (!response.ok) {
//     //         throw new Error('Failed to fetch user profile');
//     //     }
//     //     const data = await response.json();
//     //     return data;
//     // } catch (error) {
//     //     console.error("Error fetching user profile:", error);
//     //     throw error;
//     // }

// }

export async function getProfiles(page=0, size=10) {
    return await axios.get(`${API_URL}?page=${page}&size=${size}`);
}

export async function getProfile(id) {
    return await axios.get(`${API_URL}/${id}`);
}

export async function getProfileByEmail(email) {
    return await axios.get(`${API_URL}/me/${email}`);
}

export async function updateUserProfile(user) {
    return await axios.post(API_URL, user);
}

export async function updatePhoto(formData) {
    return await axios.put(API_URL, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}` // Include if required
        }
    });
}

export async function loginUser(credentials) {
    return await axios.post(`${API_URL}/login`, credentials);
}