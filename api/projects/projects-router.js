const express = require('express'); 
const Projects = require('./projects-model'); 
const mw = require('../middleware/middleware'); 

const router = express.Router()

router.use((err, req, res, next) => {
    res.status(500).json({
      message: "something went wrong!",
      error: err.message,
    });
  });

module.exports= router; 