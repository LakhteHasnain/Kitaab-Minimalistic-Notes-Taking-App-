require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");
const authenticateJWT = require("./middlewares/auth-middleware"); // Import JWT authentication middleware

const authrouter = require("./router/auth-router");
const notesrouter = require("./router/notes-router");

const app = express();

const corsOptions = {
    origin: ["https://kitaab-plum.vercel.app/"],
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));



app.use("/api/auth", authrouter);
app.use("/api/notes", notesrouter);

const PORT = process.env.PORT || 5001;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
    });
