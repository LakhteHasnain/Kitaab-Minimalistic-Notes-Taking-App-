// LogSign.js

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/log-sign.css';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
export default function LogSign() {
  const { fetchNotes, setIsLoggedIn } = useContext(GlobalContext);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const mode = query.get('mode');
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url =
        mode === 'register'
          ? 'http://localhost:5001/api/auth/register'
          : 'http://localhost:5001/api/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        login(responseData); // Set the user as authenticated and store token
        navigate('/main'); // Navigate after the user is set
        setIsLoggedIn(true);
      } else {
        console.log('Error:', responseData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleToggleChange = () => {
    const newMode = mode === 'register' ? 'login' : 'register';
    navigate(`/auth?mode=${newMode}`);
  };
  const home=function(){
    navigate('/');
  }
  return (
    <div className="wrapper">
      <h1 style={{color:'#f3e074',fontFamily:'Courier New, Courier, monospace',cursor:'pointer'}} onClick={home}>Kitaab</h1>
      <div className="card-switch">
        <label className="switch">
          <input className="toggle" type="checkbox" onChange={handleToggleChange} />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className="flip-card__inner">
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form" onSubmit={handleSubmit}>
                {mode === 'register' && (
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="flip-card__input"
                  />
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="flip-card__input"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="flip-card__input"
                />
                <button className="flip-card__btn">Let's go!</button>
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="flip-card__input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="flip-card__input"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="flip-card__input"
                />
                <button className="flip-card__btn">Confirm!</button>
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
}
