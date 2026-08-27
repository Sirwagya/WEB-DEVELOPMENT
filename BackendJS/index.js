import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userModel from './db/db.js';
import bcrypt from 'bcryptjs';

mongoose.connect('mongodb://127.0.0.1:27017/DB').then(()=>{
    console.log('Connected to MongoDB');
})
let app = express();
app.use(express.json());
app.use(cors());

app.post('/signUp', async (req, res)=>{
    let {name, email, password, mobile} = req.body;
    let mail = await userModel.findOne({email})
    password = await bcrypt.hash(password, 10);

    if (mail){
        res.send({message: "Email already exists"});
    }
    else {

        const user = await userModel.create({
            name,
            email,
            password,
            mobile
        });
    
        res.send(user);
    }

    
})
app.post('/signin', async (req, res)=>{
    let {email, password} = req.body;
    let mail = await userModel.findOne({email})

    if (mail){
        await bcrypt.compare(password, mail.password).then((match)=>{
            if(match){
                res.send({
                    msg : "login successful",
                    user : mail
                });
            }
            else{
                res.send({
                    msg : "password incorrect"
                });
            }
    })}
    else {
        res.send({
            msg : "user not found"
        });
    }

    
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});