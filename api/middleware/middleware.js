const Actions = require('../actions/actions-model'); 
const Projects = require('../projects/projects-model'); 

const actionId = async (req, res, next) => {
    const { id } = req.params; 
    try{
        const action = await Actions.get(id)
        if (!action){
            res.status(404).json({message: "Action with specified ID is not found"}); 
        } else {
            req.action = action; 
            next();
        }
    } catch (error) {
        res.status(500).json(`Server error: ${error.message}`)
    }
};

const projectId = async (req, res, next) => {
    const { id } = req.params; 
    try{
        const project = await Projects.get(id)
        if (!project){
            res.status(404).json({message: "Project with specified ID is not found"}); 
        } else {
            req.project = project; 
            next();
        }
    } catch (error) {
        res.status(500).json(`Server error: ${error.message}`)
    }
};

module.exports = {
    actionId, 
    projectId
}