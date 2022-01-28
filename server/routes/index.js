const express = require('express');
const router = express.Router();

const { getItems } = require('../controllers/itemController');
const { logout, regenerateToken } = require('../controllers/authController');

router.route('/items/all').get(getItems);
router.route('/auth/logout').post(logout);
router.route('/tokens/regenerate').post(regenerateToken);

module.exports = router;
