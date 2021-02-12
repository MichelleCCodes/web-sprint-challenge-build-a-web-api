const express = require('express'); 
const Actions = require('./actions-model'); 
const mw = require('../middleware/middleware'); 

const router = express.Router(); 

router.get('/', (req,res) => {
Actions.get()
.then(actions => {
  res.status(200).json(actions)
})
.catch(error => {
  next(error)
})
});

router.get('/:id', mw.actionId, (req, res) => {
    res.status(200).json(req.action)
});

router.post('/', (req, res) => {
  const { project_id, description, notes } = req.body; 
  if(!project_id || !description || !notes){
    res.status(400).json({message:"Needs project id, description and notes"})
  } else {
    Actions.insert(req.body)
    .then(action => {
      res.status(201).json(action)
    })
    .catch(error => {
      next(error);
    })
  }
})

router.put('/:id', mw.actionId, (req, res) => {
const id = req.params.id;
Actions.update(id, req.action)
.then(action => {
  res.status(200).json(action)
})
.catch(error => {
  next(error)
})
})

router.use((err, req, res, next) => {
    res.status(500).json({
      message: "something went wrong!",
      error: err.message, 
    });
  });

module.exports = router; 
