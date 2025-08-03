const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/task');

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/tasks',taskRoutes);

app.get('/',(req, res) =>{
    res.send('Task Manager API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);

});