import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../styles/create-note.css';
import { useNavigate, useLocation } from 'react-router-dom';


export default function TakeNotes() {
  const navigate = useNavigate();
  const location = useLocation();
  const { createNote, updateNote, Notes } = useContext(GlobalContext);
  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');
 
  const [isEditing, setIsEditing] = useState(false);
  const [noteId, setNoteId] = useState(null);


  useEffect(() => {
    const { note } = location.state || {};
    if (note) {
      setHeader(note.header);
      setContent(note.content);
    
      setIsEditing(true);
      setNoteId(note.id);
    }
  }, [location.state]);

  const handleSaveNote = () => {
    if (header.trim() !== '' && content.trim() !== '') {
      if (isEditing) {
        const updatedNote = {
          id: noteId,
          header: header,
          content: content,
          email:localStorage.getItem('email'),
          can: false
        };
        updateNote(updatedNote);
      } else {
        const newNote = {
          id: Math.floor(Math.random() * 1000),
          header: header,
          content: content,
          email:localStorage.getItem('email'),
          can: false
        };
        createNote(newNote);
      }
      setHeader('');
      setContent('');
      
      navigate('/main');
    } else {
      alert('Please fill in both header and content.');
    }
  };

 

 
  return (
    <div className='meg8'>
      <h2>{isEditing ? 'Edit your Note' : 'Create your Note'}</h2>
      <div className="ins">
        <input
          className='add-header'
          placeholder='Add header'
          value={header}
          onChange={(e) => setHeader(e.target.value)}
        />
      
        <textarea
          className='add-content'
          placeholder='Write here...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      
        
      </div>
      <button className='button' onClick={handleSaveNote} style={{marginLeft:'50%',marginTop:'0%'}}>
        {isEditing ? 'Save Changes' : 'Save Note'}
      </button>
     
    </div>
  );
}
