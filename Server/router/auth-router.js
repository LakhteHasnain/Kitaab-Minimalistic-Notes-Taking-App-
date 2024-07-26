const express = require("express");
const router = express.Router();
const { Register, Login } = require("../controllers/auth-controller");
const authenticateJWT = require("../middlewares/auth-middleware");

router.post("/register", Register);
router.post("/login", Login);

// Example protected route
router.get("/protected", authenticateJWT, (req, res) => {
    res.json({ message: "Protected route accessed successfully", user: req.user });
});

module.exports = router;
