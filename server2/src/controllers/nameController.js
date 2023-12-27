// controller.js
const Name = require('../models/name');

// Get all names
exports.getAllNames = async (req, res) => {
    try {
        const names = await Name.findAll();
        res.json(names);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new name
exports.addName = async (req, res) => {
    const { name } = req.body;

    try {
        const newName = await Name.create({ name });
        res.json(newName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a name
exports.updateName = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        await Name.update({ name }, { where: { id } });
        res.json({ message: 'Name updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a name
exports.deleteName = async (req, res) => {
    const { id } = req.params;

    try {
        await Name.destroy({ where: { id } });
        res.json({ message: 'Name deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
