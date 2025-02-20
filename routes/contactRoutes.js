const express = require('express');
const Contact = require('../models/contact'); // Ensure correct path

const router = express.Router();

// Store Contact Form Data
router.post('/', async (req, res) => {
    try {
        const { name, email, phonenumber, message } = req.body;

        // Validate request data
        if (!name || !email || !phonenumber || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Save data to MongoDB
        const newMessage = new Contact({ name, email, phonenumber, message });
        await newMessage.save();
        
        res.status(201).json({ message: 'Enquiry submitted successfully', data: newMessage });
    } catch (error) {
        console.error('Error storing contact data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get All Contact Messages (for debugging)
router.get('/', async (req, res) => {
    try {
        const messages = await Contact.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
