'use strict';

const multer = require('multer');

module.exports = multer({
    storage: multer.memoryStorage()
});

