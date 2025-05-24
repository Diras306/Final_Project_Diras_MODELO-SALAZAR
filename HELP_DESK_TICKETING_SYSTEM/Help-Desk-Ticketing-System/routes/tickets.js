
const express = require('express');
const Ticket = require('../models/Ticket'); 
const jwt = require('jsonwebtoken');

const router = express.Router();


const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send('Token is required');
    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) return res.status(403).send('Invalid token');
        req.user = decoded;
        next();
    });
};

router.post('/', authMiddleware, async (req, res) => {
    const { title, description, severity } = req.body;
    const ticket = new Ticket({ title, description, severity, createdBy: req.user.id });

    try {
        await ticket.save();
        res.status(201).json({ message: 'Ticket created successfully', ticketId: ticket._id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
