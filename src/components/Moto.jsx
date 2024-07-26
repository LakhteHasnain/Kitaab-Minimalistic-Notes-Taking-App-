import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/moto.css'
export default function Moto({id}) {
  const navigate=useNavigate();
  const GoTo=()=>{
    navigate('/main')
  }
  return (
    <div className='moto-con' id={id}>
        <div className="items">
        <h1>Your Serene Sanctuary: Where Notes Meet Nostalgia</h1>
        <p>Your Go-To tool for oraganized Notes</p>
        <div className="moto-btns">
        <button className="button" onClick={GoTo}>
  <span>Get Started Now</span>
</button>
</div>
</div>
    </div>
  )
}
