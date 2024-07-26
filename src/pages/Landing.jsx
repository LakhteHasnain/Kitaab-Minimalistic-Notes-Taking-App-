import React from 'react'
import Header from '../components/Header'
import Moto from '../components/Moto'
import Features from '../components/Features'
import Pricing from '../components/pricing'
import '../styles/landing.css'
export default function Landing() {
  return (
    <div>
      <Header id='head'/>
      <Moto id='moto'/>
      <Features id='fea'/>
      <Pricing id='pricing'/>
    </div>
  )
}
