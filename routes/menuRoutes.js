const express = require('express');
const MenuItem = require('../models/MenuItem');

const router = express.Router();

// Get Menu
router.get('/', async (req, res) => {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
});

// Add Menu Item
router.post('/', async (req, res) => {
    const { name, price, description } = req.body;
    const newItem = new MenuItem({ name, price, description });
    await newItem.save();
    res.json(newItem);
});

module.exports = router;
