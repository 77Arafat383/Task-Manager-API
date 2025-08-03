const express = require('express');
const router = express.Router();

const {getTasks, createTask, updateTask, deleteTask} = require('../Controllers/taskController');

const authMiddleware = require('../Middleware/authMiddleware');


router.use(authMiddleware);

router.get('/',getTasks);
router.post('/',createTask);
router.put('/:id',updateTask);
router.delete('/:id',deleteTask);

module.exports = router;