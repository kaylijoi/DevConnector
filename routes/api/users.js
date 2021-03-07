const express = require('express');
const router = express.Router();

// json requires an object, key/value pairs
// /test to test routes 
router.get('/test', (req, res) => res.json({msg: 'Users works'}));

// pick and choose what functions to export
module.exports = router;