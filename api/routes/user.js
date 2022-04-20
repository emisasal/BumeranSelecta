const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controllers/userController');

router.post('/login', passport.authenticate('local'), userController.login);
router.post('/register', userController.register);
router.post('/logout', userController.logout);
router.get('/find/:email', userController.find)
router.delete('/delete/:id', userController.delete)

module.exports=router;