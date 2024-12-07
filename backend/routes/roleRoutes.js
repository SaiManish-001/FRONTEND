const express = require('express');
const { getAllRoles, addRole, deleteRole } = require('../controllers/roleController');
const router = express.Router();

router.get('/', getAllRoles);
router.post('/', addRole);
router.delete('/:id', deleteRole);

module.exports = router;
