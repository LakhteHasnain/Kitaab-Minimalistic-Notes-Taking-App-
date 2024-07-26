import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import '../styles/note-details.css';

export default function NoteDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { note } = location.state || {};
  

  if (!note) {
    return <div>Note not found</div>;
  }

  const renderContent = (content) => {
    return content.split('\n').map((line, index) => (
      <p key={index} className="note-content">
        {line}
      </p>
    ));
  };

  

  const handleEditClick = () => {
    navigate('/create_notes', { state: { note } });
  };

  return (
    <div className="note-details">
      <div className="hed" style={{display:'flex',justifyContent:'space-between'}}>
      <h2>{note.header}</h2>
      <button className="edit-btn" onClick={handleEditClick} style={{background:'hsl(147, 64%, 61%)'}}>Edit Note</button>
      
      </div>
      
      {renderContent(note.content)}
    
    
    </div>
  );
}
