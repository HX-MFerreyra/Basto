'use strict'

const express = require('express');
const Animal = require('../controllers/function');
const router = express.Router();

router.get('/', Animal.getAnimals);
router.post('/register', Animal.register);
router.delete('/:id', Animal.delete);
router.put('/:id', Animal.update);

module.exports = router;
