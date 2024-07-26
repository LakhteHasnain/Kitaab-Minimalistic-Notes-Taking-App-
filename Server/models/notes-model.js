const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    header: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false,
        default: ""
    },
    can: {
        type: Boolean,
        default: false,
        required:false
    },
    email: {
        type: String,
        required: true,
    },
    archived:{
        type:Boolean,
        default:false
    },
    bin:{
        type:Boolean,
        default:false
    }
    
    
});

const Note = mongoose.model("notes", noteSchema);
module.exports = Note;
