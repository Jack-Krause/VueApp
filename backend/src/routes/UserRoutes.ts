const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')

router.post("/new", userController.createUser)

module.exports = router