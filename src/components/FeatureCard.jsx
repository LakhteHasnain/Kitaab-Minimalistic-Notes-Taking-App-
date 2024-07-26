import React from 'react';
import '../styles/feature-card.css';

const FeatureCard = ({ title, subtitle, color, borderz }) => {
  return (
    <div className="FeatureCard" style={{ backgroundColor: color, borderColor: borderz }}>
      <div className="FeatureText">
        <h2>{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
  
    </div>
  );
};

export default FeatureCard;
