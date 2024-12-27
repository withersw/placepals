import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Register from './components/register';
import RoommateCard from './components/roommate';
import RoommateList from './components/roomatesList';
import RoommateDetails from './components/roomateDetails';
import { getProfiles } from './services/userService';
import Login from './components/login';
import UserProfile from './components/userProfiles';
import Messaging from './components/messages';

function App() {

  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const getAllProfiles = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await getProfiles(page, size);
      setData(data);
      console.log(data);
    }
    catch(error) {
      console.log(error);
    }
  }



useEffect(() => {
  getAllProfiles();
}, []);

  return (

    <Router>
      <div className='App'>
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/profiles" element={<RoommateList data={data} getAllProfiles={getAllProfiles} />} />
            <Route path="/roommateDetails/:id" element={<RoommateDetails />} />
            <Route path="/messages" element={<Messaging/>} />
            <Route path="/profile" element={<UserProfile/>} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;
