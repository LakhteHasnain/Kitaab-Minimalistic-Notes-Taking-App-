export default (state, action) => {
    switch (action.type) {
        case 'Set_Notes':
            return {
                ...state,
                Notes: [{ id: 1, header: "Create A Note", content: "", can: true }, ...action.payload.filter(note => !note.archived && !note.bin)],
                Archived: action.payload.filter(note => note.archived),
                Bin: action.payload.filter(note => note.bin),
            };
        case 'Add_Note':
            return {
                ...state,
                Notes: [...state.Notes, action.payload]
            };
        case 'Delete_Note':
            const deletedNote = state.Notes.find(note => note.id === action.payload);
            if (!deletedNote) {
                const archivedNote = state.Archived.find(note => note.id === action.payload);
                return {
                    ...state,
                    Archived: state.Archived.filter(note => note.id !== action.payload),
                    Bin: archivedNote ? [...state.Bin, archivedNote] : state.Bin,
                };
            }
            return {
                ...state,
                Notes: state.Notes.filter(note => note.id !== action.payload),
                Bin: [...state.Bin, deletedNote],
            };
        case 'Archive_Note':
            const archivedNote = state.Notes.find(note => note.id === action.payload);
            return {
                ...state,
                Notes: state.Notes.filter(note => note.id !== action.payload),
                Archived: [...state.Archived, archivedNote]
            };
        case 'Restore_Note':
            const restoredNoteFromBin = state.Bin.find(note => note.id === action.payload);
            if (restoredNoteFromBin) {
                return {
                    ...state,
                    Bin: state.Bin.filter(note => note.id !== action.payload),
                    Notes: [...state.Notes, restoredNoteFromBin]
                };
            }

            const restoredNoteFromArchived = state.Archived.find(note => note.id === action.payload);
            if (restoredNoteFromArchived) {
                return {
                    ...state,
                    Archived: state.Archived.filter(note => note.id !== action.payload),
                    Notes: [...state.Notes, restoredNoteFromArchived]
                };
            }

            return state;
        case 'UPDATE_NOTE':
            return {
                ...state,
                Notes: state.Notes.map(note =>
                    note.id === action.payload.id ? action.payload : note
                ),
            };
        default:
            return state;
    }
};
