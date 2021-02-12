const express = require('express'); 
const Projects = require('./projects-model'); 
const mw = require('../middleware/middleware'); 

const router = express.Router()

router.get('/', (req, res) => {
Projects.get()
.then(projects => {
  res.status(200).json(projects)
})
.catch(error => {
  next(error)
})
})

router.get('/:id', mw.projectId, (req,res) => {
  const { name, description } = req.body;
  if (!name || !description){
    res.status(400).json({message: "Please provide name and description"})
  } else{
    res.status(200).json(req.project)
  }
})

router.post('/', (req, res) => {
  Projects.insert(req.body)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(error => {
    next(error);
  })
})

router.put('/:id', mw.projectId, (req, res) => {
  Projects.update(req.params.id, req.body)
  .then(project=> {
    res.status(201).json(project)
  })
  .catch(error => {
    next(error);
  })
})

router.delete('/:id', mw.projectId, (req,res) => {
  Projects.remove(req.params.id)
  .then(project => {
    res.status(200).json()
  })
  .catch(error => {
    next(error)
  })
})

router.get('/:id/actions', mw.projectId, (req, res) => {
  Projects.getProjectActions(req.params.id)
  .then(actions => {
    res.status(200).json(actions)
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

module.exports= router; 