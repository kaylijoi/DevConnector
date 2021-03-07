const express = require('express');
const router = express.Router();

// json requires an object, key/value pairs
router.get('/test', (req, res) => res.json({msg: 'Profiles works'}));

// pick and choose what functions to export
module.exports = router;