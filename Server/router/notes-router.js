const express = require("express");
const { postNotes, getNotes, updateNote, deleteNote, archiveNote, restoreNote } = require("../controllers/notes-controller");

const router = express.Router();

router.post('/create_a_note',  postNotes);
router.post("/get_a_note", getNotes);
router.put('/update_note/:id',  updateNote);
router.delete('/delete_note/:id', deleteNote);
router.post('/archive_note/:id', archiveNote);
router.post('/restore_note/:id', restoreNote);

module.exports = router;
