import React from 'react';
import { Link } from 'react-router-dom';
import './roommate.css';

const Roommate = ({roommate}) => {

    // const handleClick = () => {
    //   navigate(`/roommateDetails/${roommate.id}`, { state: { roommate } });
    // };

    return (
        // <Link
        //     to={`/roommateDetails/${roommate.id}`}
        //     style={{
        //         textDecoration: 'none',
        //         color: 'inherit',
        //     }}
        // >
        //     <div
        //         style={{
        //             border: '1px solid #ddd',
        //             padding: '16px',
        //             margin: '8px',
        //             borderRadius: '8px',
        //         }}
        //     >
        //         {roommate.profilePictureUrl && (
        //         <img
        //             src={roommate.profilePictureUrl}
        //             alt={`${roommate.firstName} ${roommate.lastName}`}
        //             className="profile-picture"
        //         />
        //         )}
        //         <h3>{roommate.firstName} {roommate.lastName}</h3>
        //         <p>City: {roommate.city}</p>
        //         <p>State: {roommate.state}</p>
        //         <p>Budget: ${roommate.budget}</p>
        //     </div>
        // </Link>

        <Link
        to={`/roommateDetails/${roommate.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
    >
        <div className="roommate-card">
            <div className="roommate-card-content">
                {roommate.profilePictureUrl && (
                    <img
                        src={roommate.profilePictureUrl}
                        alt={`${roommate.firstName} ${roommate.lastName}`}
                        className="profile-picture"
                    />
                )}
                <div className="roommate-info">
                    <h3 className="roommate-name">
                        {roommate.firstName} {roommate.lastName}
                    </h3>
                    <p className="roommate-detail">Location: {roommate.city}, {roommate.state}</p>
                    <p className="roommate-detail">Budget: ${roommate.budget}</p>
                    <p className="roommate-detail">{roommate.aboutMe}</p>
                </div>
            </div>
        </div>
    </Link>
    );
};

export default Roommate;