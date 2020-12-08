const express = require('express')
const router = express.Router()
const connection = require('../conf')

router.post('/', function (req, res) {
    console.log(req.body)
    console.log(req.body.listSteps)

});

module.exports = router;