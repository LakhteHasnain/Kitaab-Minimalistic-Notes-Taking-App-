// auth-middleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authenticateJWT = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SEC_KEY);
            req.user = await User.findById(decoded.userId); // Attach user object to request
            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            res.status(403).json({ message: 'Invalid token' }); // Forbidden
        }
    } else {
        res.status(401).json({ message: 'Authorization header not found' }); // Unauthorized
    }
};

module.exports = authenticateJWT;
