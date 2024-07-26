import React, { useState,useContext } from 'react';
import '../styles/head2.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Head({ onSearch }) {
  const {logout} =useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  const logoutF=function(){
    navigate('/')
    logout();
  }
  return (
    <div className='mega'>
      <div className="logo">
        <h1>Kitaab.</h1>
      </div>
      <div className="search">
        <div className="container">
          <div className="search-container">
            <input
              className="input"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by header"
            />
            <svg viewBox="0 0 24 24" className="search__icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="Auth2">
        <p onClick={logoutF}><u>LogOut</u></p>
      </div>
    </div>
  );
}
