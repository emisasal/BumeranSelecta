const express = require("express");
const router = express.Router();

const user = require('./user')
const recruiter = require("./recruiter")
const search = require('./search')
const reports = require('./reports')

router.use('/user', user)
router.use('/recruiter', recruiter)
router.use('/search', search)
router.use('/reports', reports)

module.exports = router;