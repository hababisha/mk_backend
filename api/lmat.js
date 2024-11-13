//lmat routes
const express = require('express');
const router = express.Router();
const Lmat = require('../models/Lmat');

router.post('/', async (req, res) => {
    try {
        const newLmat = new Lmat(req.body);
        await newLmat.save();
        res.status(201).json(newLmat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const lmatoch = await Lmat.find();
        res.json(lmatoch);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const lmat = await Lmat.findById(req.params.id);
        if (!lmat) return res.status(404).json({ message: 'Not found' });
        res.json(lmat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedLmat = await Lmat.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLmat) return res.status(404).json({ message: 'Not found' });
        res.json(updatedLmat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deletedLmat = await Lmat.findByIdAndDelete(req.params.id);
        if (!deletedLmat) return res.status(404).json({ message: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
