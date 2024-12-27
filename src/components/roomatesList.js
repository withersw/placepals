import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Roommate from './roommate';
import './roommateList.css';

const RoommateList = ({ data, getAllProfiles }) => {

      return (
        <div className='roommates-wrapper'>
          <div className='roommates-container'>
            {data?.content?.length === 0 && <div>No profiles</div>} 
            <ul className='roommate_list'>
              {data?.content?.length > 0 && data.content.map((roommate) => <Roommate roommate={roommate} key={roommate.id} />)}
            </ul> 
          </div> 
        </div>
  );
};

export default RoommateList;