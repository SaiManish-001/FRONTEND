const express = require('express');
const { getAllPermissions, addPermission } = require('../controllers/permissionController');
const router = express.Router();

router.get('/', getAllPermissions);
router.post('/', addPermission);

module.exports = router;
