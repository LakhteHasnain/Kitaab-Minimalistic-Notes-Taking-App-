import React from 'react';
import '../styles/Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header({ id }) {
  const navigate = useNavigate();

  const onAuth = (type) => {
    navigate(`/auth?mode=${type}`);
  };

  return (
    <div className='head' id={id}>
      <div className="logo">
        <h1>Kitaab.</h1>
      </div>
      <div className="Atts">
        <a href='#moto'><p>Home</p></a>
        <a href='#fea'><p>Features</p></a>
        <a href='#pricing'><p>Pricing</p></a>
        
      </div>
      <div className="Auths">
        <p onClick={() => onAuth('login')}>Login</p>
        <p className='reg' onClick={() => onAuth('register')}><b>Register</b></p>
      </div>
    </div>
  );
}
