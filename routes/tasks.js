const router = require('express').Router();
const TaskController = require('../Controllers/tasks')

// Find all tasks 
router.get('/',TaskController.index);

// Create 
router.post('/create/', TaskController.create);

// Update 
router.get('/update/:id', TaskController.edit);
router.put('/update/:id', TaskController.update);

// Delete
router.get('/delete/:id', TaskController.delete);


module.exports = router ;