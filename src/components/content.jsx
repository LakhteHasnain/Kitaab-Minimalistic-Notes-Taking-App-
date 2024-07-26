import React, { useState, useContext, useEffect } from 'react';
import '../styles/content.css';
import CardSection from './card-section';
import { GlobalContext } from '../context/GlobalState';

export default function Content({ searchQuery }) {
  const [selectedSection, setSelectedSection] = useState('Notes');
  const { Notes, Archived, Bin, deleteNote, archiveNote, restoreNote } = useContext(GlobalContext);
  const [isBin, setIsBin] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [data, setData] = useState(Notes);
  const [alertShown, setAlertShown] = useState(false);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setAlertShown(false); // Reset alert shown state on section change
  };

  useEffect(() => {
    let newData;
    switch (selectedSection) {
      case 'Notes':
        newData = Notes;
        setIsBin(false);
        setIsArchived(false);
        break;
      case 'Archived':
        newData = Archived;
        setIsBin(false);
        setIsArchived(true);
        break;
      case 'Bin':
        newData = Bin;
        setIsBin(true);
        setIsArchived(false);
        break;
      default:
        newData = Notes;
        setIsBin(false);
        setIsArchived(false);
        break;
    }

    if (searchQuery.trim() !== '') {
      newData = newData.filter(note =>
        note.header.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (newData.length === 0 && searchQuery.trim() !== '' && !alertShown) {
      alert('Note does not exist');
      setAlertShown(true); // Set alert shown state to true
    }

    setData(newData);
  }, [selectedSection, searchQuery, Notes, Archived, Bin, alertShown]);

  return (
    <div className='mega2'>
      <div className="sidebar">
        <ul>
          <li
            style={{ background:'#ffdb77', border: 'solid 2px #fdc834' }}
            onClick={() => handleSectionClick('Notes')}
          >
            Notes
          </li>
          <li
            style={{ background:'#92b9f8', border: 'solid 2px #478bf9' }}
            onClick={() => handleSectionClick('Archived')}
          >
            Archived
          </li>
          <li
            style={{ background:'rgb(255, 108, 138)', border: 'solid 2px rgb(225, 59, 92)' }}
            onClick={() => handleSectionClick('Bin')}
          >
            Bin
          </li>
        </ul>
      </div>
      <CardSection 
        data={data} 
        onDelete={deleteNote} 
        onArchive={archiveNote} 
        onRestore={restoreNote} 
        isBin={isBin} 
        isArchived={isArchived}
      />
    </div>
  );
}
