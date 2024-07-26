import React from 'react';
import '../styles/card-section.css';
import NoteCard from './card';

export default function CardSection({ data, onDelete, onArchive, onRestore, isBin,isArchived }) {
  const colors = [
    "#FFEBEE", "#E3F2FD", "#E8F5E9", "#FFFDE7", "#EDE7F6",
    "#FFCDD2", "#F0F4C3", "#C8E6C9", "#B2EBF2", "#B39DDB",
    "#FF8A80", "#FFD180", "#FFFF8D", "#CCFF90", "#A7FFEB",
  ];

  return (
    <div className="card-section">
      {data.map((note, index) => (
        <NoteCard
          key={note.id}
          note={note}
          color={colors[index % colors.length]}
          onDelete={() => onDelete(note.id)}
          onArchive={() => onArchive(note.id)}
          onRestore={() => onRestore(note.id)}
          isBin={isBin}
          isArchived={isArchived}
        />
      ))}
    </div>
  );
}
