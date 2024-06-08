    const express = require('express')
    const {postEmail} = require('../controllers/MailController')
    const router = express.Router()

    router.post('/', postEmail)

    module.exports = router;