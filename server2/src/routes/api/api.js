// router.js
const express = require('express');
const router = express.Router();
const controller = require('../../controllers/nameController');

router.get('/names', controller.getAllNames);
router.post('/names', controller.addName);
router.put('/names/:id', controller.updateName);
router.delete('/names/:id', controller.deleteName);

module.exports = router;
