const db = require('../config/db');

const getTasks = async (req , res) =>{
    try{
        const [tasks] = await db.query('select * from tasks where user_id=?',[req.user.id]);
        res.json(tasks);
    } catch (err){
        res.status(500).json({message: 'Failed to retreive task', error: err.message});
    }
};

const createTask = async (req, res) =>{
    const {title, description, status, priority,due_date} = req.body;
    try{

        await db.query('insert into tasks (user_id,title,description,status,priority,due_date) values (?,?,?,?,?,?)',
            [req.user.id,title,description,status,priority,due_date]
        );

    }catch(err){
        res.status(500).json({message: 'Failed to create task', error: err.message});
    }
};

const updateTask = async (req , res) =>{
    const {title, description, status, priority, due_date} = req.body;

    try{
        await db.query(
            'update tasks set title= ?, description=?, status=?, priority=?, due_date=? where id = ? and user_id=?',
             [title, description, status, priority, due_date, req.params.id, req.user.id]
        );
        res.json({message : 'Task updated'});

    }catch(err){
         res.status(500).json({message:'Failed to update task', error: err.message});
    }
};


const deleteTask = async( req, res) => {
    try {
        await db.query(
            'delete from tasks where id = ? and user_id = ?',
            [req.params.id, req.user.id]
        );
        res.json({message: 'Task deleted'});
    }catch(err){
        res.status(500).json({message:'Failed to delete task', error: err.message});
    }
}

module.exports = {getTasks, createTask, updateTask, deleteTask};