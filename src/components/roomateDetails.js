import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProfile } from '../services/userService';
import './roommateDetails.css';
import { useLocation } from 'react-router-dom';

const RoommateDetails = () => {

  const inputRef = useRef();
  const [roommate, setRoommate] = useState({
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      city: '',
      state: '',
      budget: '',
      noiseTolerance: '',
      cleanlinessLevel: '',
      petFriendly: '',
      outgoing: '',
      roomListingType: '',
      bio: '',
      photoUrl: ''
  });

  const { id } = useParams();

  const fetchRoommate = async (id) => {
    try {
        const { data } = await getProfile(id);
        setRoommate(data);
        console.log(data);
        //toastSuccess('Contact retrieved');
    } catch (error) {
        console.log(error);
        //toastError(error.message);
    }
  };

    useEffect(() => {
      fetchRoommate(id);
    }, []);
  
    return (
      // <div style={{ padding: '20px' }}>
      //   {roommate.profilePictureUrl && (
      //   <img
      //       src={roommate.profilePictureUrl}
      //       alt={`${roommate.firstName} ${roommate.lastName}`}
      //       className="profile-picture"
      //   />
      //   )}
      //   <h2>{roommate.firstName} {roommate.lastName}</h2>

      //   <p>City: {roommate.city}, {roommate.state}</p>
      //   <p>Age: {roommate.age}</p>
      //   <p>Budget: ${roommate.budget}</p>
      //   <p>Noise Tolerance: {roommate.noiseTolerance}</p>
      //   <p>Cleanliness: {roommate.cleanlinessLevel}</p>
      //   <p>Outgoing: {roommate.outgoing ? 'Yes' : 'No'}</p>
      //   <p>Pet Friendly: {roommate.petFriendly ? 'Yes' : 'No'}</p>
      //   <p>Room Type: {roommate.roomListingType}</p>
      //   <div className='roommate-bio'>
      //     <p>Bio: {roommate.bio}</p>
      //   </div>
      // </div>

      <div style={{ padding: '40px', backgroundColor: '#1f2a44' }}>
      <div className="roommate-card">
        {/* Left Column - Name & Profile Picture */}
        <div className="profile-left">
          {roommate.profilePictureUrl && (
            <img
              src={roommate.profilePictureUrl}
              alt={`${roommate.firstName} ${roommate.lastName}`}
              className="profile-picture"
            />
          )}
          <h2>{roommate.firstName} {roommate.lastName}</h2>
        </div>

        {/* Right Column - Roommate Info */}
        <div className="profile-info">
          <p><strong>City:</strong> {roommate.city}, {roommate.state}</p>
          <p><strong>Age:</strong> {roommate.age}</p>
          <p><strong>Budget:</strong> ${roommate.budget}</p>
          <p><strong>Noise Tolerance:</strong> {roommate.noiseTolerance}</p>
          <p><strong>Cleanliness:</strong> {roommate.cleanlinessLevel}</p>
          <p><strong>Outgoing:</strong> {roommate.outgoing ? 'Yes' : 'No'}</p>
          <p><strong>Pet Friendly:</strong> {roommate.petFriendly ? 'Yes' : 'No'}</p>
          <p><strong>Room Type:</strong> {roommate.roomListingType}</p>
          
          {/* Bio Section */}
          <div className="roommate-bio">
            <p><strong>Bio:</strong> {roommate.bio}</p>
          </div>

          {/* Accent Button (Optional) */}
          <Link to="/messages"><button>Contact Roommate</button></Link>
        </div>
      </div>
    </div>

    );
  };

export default RoommateDetails;