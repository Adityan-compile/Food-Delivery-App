'use strict';

const multer, { memoryStorage } = require('multer');

module.exports = multer({
    storage: memoryStorage()
}).single('image');

