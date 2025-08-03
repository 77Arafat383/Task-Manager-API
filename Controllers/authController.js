const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db= require('../config/db');


const register = async (req , res )=>{
    const {name, email, password} = req.body;
    try{

        //check kortache ki age theke ai email er kew ache ki na?
        const [result] = await db.query('SELECT * FROM users WHERE email = ?',[email]);
        if(result.length>0) return res.status(400).json({message: 'Email already exist'});
        
         const hash= await bcrypt.hash(password,10);
         await db.query('insert into users (name, email,password) values (?,?,?)',[name,email,hash]);
         res.status(201).json({message: 'User registered successfully!'});
    } catch (err){
        res.status(500).json({message:'Server error', error:err.message});
    }
};

const login = async( req , res )=>{
    const {email, password} = req.body;

    try{
        const [user] = await db.query('select * from users where email=?',[email]);
        if(user.length==0) return res.status(400).json({message : 'Invalid email!'});

        const isMatch = await bcrypt.compare(password,user[0].password);
        if(!isMatch) return res.status(400).json({message:'Invalid password'});

       const token = jwt.sign({ id: user[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({token});
    } catch(err){
        res.status(500).json({message:'Server error',error: err.message});
    }
};

module.exports={register,login};