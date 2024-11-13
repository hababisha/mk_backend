// Memhran routes
const express = require('express');
const router = express.Router();
const Memhran = require('../models/Memhran');

router.post('/', async (req, res) => {
    try {
        const newMemhran = new Memhran(req.body);
        await newMemhran.save();
        res.status(201).json(newMemhran);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const memhrans = await Memhran.find();
        res.json(memhrans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const memhran = await Memhran.findById(req.params.id);
        if (!memhran) return res.status(404).json({ message: 'Not found' });
        res.json(memhran);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedMemhran = await Memhran.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMemhran) return res.status(404).json({ message: 'Not found' });
        res.json(updatedMemhran);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedMemhran = await Memhran.findByIdAndDelete(req.params.id);
        if (!deletedMemhran) return res.status(404).json({ message: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
