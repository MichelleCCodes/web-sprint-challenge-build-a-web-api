const express = require('express');
const helmet = require('helmet'); 
const server = express();
const actionsRouter = require('./actions/actions-router'); 
const projectsRouter = require('./projects/projects-router'); 

server.use(helmet());
server.use(express.json()); 
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
res.send('<h2>We are sprinting!!!</h2>')
})

module.exports = server;
