const {createTask, fetchAllTask, updateTaskById,deleteTaskById}= require('../Controllers/TaskController.js');
const router =require('express').Router();


router.get('/',fetchAllTask);
//to create a task 
router.post('/',createTask);

//to update task by id
router.put('/:id',updateTaskById);

//to delete 
router.delete('/:id',deleteTaskById);


module.exports = router;