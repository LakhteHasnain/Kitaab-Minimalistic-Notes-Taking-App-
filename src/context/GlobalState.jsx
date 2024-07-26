import React, { createContext, useReducer, useEffect,useState } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    Notes: [{ id: 1, header: "Create A Note", content: "", can: true }],
    Archived: [],
    Bin: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    async function fetchNotes(email) {
        try {
            const response = await fetch('http://localhost:5001/api/notes/get_a_note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                const data = await response.json();
                const notes = data.notes;

                dispatch({
                    type: 'Set_Notes',
                    payload: notes,
                });
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error("Error fetching notes", error);
        }
    }

    async function createNote(noteData) {
        try {
            const response = await fetch('http://localhost:5001/api/notes/create_a_note', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Ensure the content type is set correctly
                },
                body: JSON.stringify(noteData), // Send data as JSON string
            });
    
            if (response.ok) {
                const data = await response.json();
                const newNote = data.noteCreated;
                dispatch({
                    type: 'Add_Note',
                    payload: newNote,
                });
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error("Error creating note", error);
        }
    }
    

    async function deleteNote(id) {
        try {
            const response = await fetch(`http://localhost:5001/api/notes/delete_note/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                dispatch({
                    type: 'Delete_Note',
                    payload: id
                });
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error("Error deleting note", error);
        }
    }

    async function archiveNote(id) {
        try {
            const response = await fetch(`http://localhost:5001/api/notes/archive_note/${id}`, {
                method: 'POST'
            });

            if (response.ok) {
                dispatch({
                    type: 'Archive_Note',
                    payload: id
                });
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error("Error archiving note", error);
        }
    }

    async function restoreNote(id) {
        try {
            const response = await fetch(`http://localhost:5001/api/notes/restore_note/${id}`, {
                method: 'POST'
            });

            if (response.ok) {
                dispatch({
                    type: 'Restore_Note',
                    payload: id
                });
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error("Error restoring note", error);
        }
    }

    async function updateNote(note) {
        try {
            const formData = new FormData();
            formData.append('id', note.id);
            formData.append('header', note.header);
            formData.append('content', note.content);
            formData.append('email', note.email);
            formData.append('can', note.can);
           

            const response = await fetch(`http://localhost:5001/api/notes/update_note/${note.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json', // Ensure the content type is set correctly
                },
                body: JSON.stringify(note),
            });

            if (response.ok) {
                const data = await response.json();
                const updatedNote = data.noteUpdated;
                dispatch({
                    type: 'UPDATE_NOTE',
                    payload: updatedNote,
                });
            } else {
                console.error('Error:', response.statusText);
            }
        } catch (error) {
            console.error("Error updating note", error);
        }
    }

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            fetchNotes(email);
            setIsLoggedIn(true);  // Set logged-in status
        }
    }, );

    return (
        <GlobalContext.Provider value={{
            Notes: state.Notes,
            Archived: state.Archived,
            Bin: state.Bin,
            deleteNote,
            createNote,
            archiveNote,
            restoreNote,
            updateNote,
            fetchNotes,
            isLoggedIn,          // Expose logged-in status
            setIsLoggedIn,       
        }}>
            {children}
        </GlobalContext.Provider>
    );
};
