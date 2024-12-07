// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// router.get('/', userController.getUsers);


// router.post('/', userController.addUser);


// router.put('/:id', userController.updateUser);


// router.delete('/:id', userController.deleteUser);

// module.exports = router;

const express = require('express');
const { getAllRoles, addRole, deleteRole } = require('../controllers/roleController');
const router = express.Router();

router.get('/', getAllRoles);
router.post('/', addRole);
router.delete('/:id', deleteRole);

module.exports = router;

