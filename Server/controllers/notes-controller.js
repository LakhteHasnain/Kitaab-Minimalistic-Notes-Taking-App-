const Note = require("../models/notes-model");


const postNotes = async (req, res) => {
    try {
        const { id, header, content, email, can } = req.body;

        // Log received data
        console.log('Received data:', { id, header, content, email, can });

        await Note.updateMany({}, { can: false });

        const noteCreated = await Note.create({
            id,
            header,
            content,
            can: can !== undefined ? can : true,
            email,
        });

        return res.status(200).json({ noteCreated, message: "Note added successfully" });
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(500).json({ message: "Internal server error" });
    }
};


const getNotes = async (req, res) => {
    try {
        const { email } = req.body;
        const notes = await Note.find({ email });

        const processedNotes = notes.map(note => {
          
            return {
                ...note._doc,
                
            };
        });

        res.status(200).json({ notes: processedNotes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const updateNote = async (req, res) => {
    try {
        const { id, header, content, can, email } = req.body;
        

        const updatedFields = {
            header,
            content,
            can: can !== undefined ? can : false,
            email
        };

        

        const noteUpdated = await Note.findOneAndUpdate({ id }, updatedFields, { new: true });

        if (!noteUpdated) {
            return res.status(404).json({ message: "Note not found" });
        }

        return res.status(200).json({ noteUpdated, message: "Note updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        const noteDeleted = await Note.findOneAndUpdate({ id }, { bin: true ,archived:false} ,{ new: true });

        if (!noteDeleted) {
            return res.status(404).json({ message: "Note not found" });
        }

        return res.status(200).json({ noteDeleted, message: "Note moved to bin successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const archiveNote = async (req, res) => {
    try {
        const { id } = req.params;
        const noteArchived = await Note.findOneAndUpdate({ id }, { archived: true }, { new: true });

        if (!noteArchived) {
            return res.status(404).json({ message: "Note not found" });
        }

        return res.status(200).json({ noteArchived, message: "Note archived successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const restoreNote = async (req, res) => {
    try {
        const { id } = req.params;
        const noteRestored = await Note.findOneAndUpdate({ id }, { archived: false, bin: false }, { new: true });

        if (!noteRestored) {
            return res.status(404).json({ message: "Note not found" });
        }

        return res.status(200).json({ noteRestored, message: "Note restored successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { postNotes, getNotes, updateNote, deleteNote, archiveNote, restoreNote };
