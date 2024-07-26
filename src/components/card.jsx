import React from 'react';
import '../styles/card.css';
import { FaTrashAlt, FaArchive, FaUndo } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function NoteCard({ note, color, onDelete, onArchive, onRestore, isBin,isArchived }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (note.can) {
      navigate('/create_notes');
    } else {
      navigate('/note_details', { state: { note } });
    }
  };

  return (
    <div className="card" style={{ backgroundColor: color }} onClick={handleCardClick}>
      <div className="card-inner">
        <h3>{note.header}</h3>
        {!note.can && (
          <div className="card-icons">
            {isBin ? (
              <button className="icon-btn" onClick={(e) => { e.stopPropagation(); onRestore(note.id); }}>
                <FaUndo />
              </button>
            ) : (
              <>
                <button className="icon-btn" onClick={(e) => { e.stopPropagation(); onDelete(note.id); }}>
                  <FaTrashAlt />
                </button>
                {isArchived ? (
                  <button className="icon-btn" onClick={(e) => { e.stopPropagation(); onRestore(note.id); }}>
                    <FaUndo />
                  </button>
                ) : (
                  <button className="icon-btn" onClick={(e) => { e.stopPropagation(); onArchive(note.id); }}>
                    <FaArchive />
                  </button>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
