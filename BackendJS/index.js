// import fs from 'fs';
// import os from 'os';
// import http from 'http';

// console.log(os.arch());
// let time = os.uptime();
// let hours = Math.floor(time/3600);
// let minutes = Math.floor(time%3600/60);
// let seconds = time%60;
// console.log(`Uptime: ${hours}hr - ${minutes}min - ${seconds}sec`);
// console.log(os.cpus()[0].model);
// console.log(os.totalmem()/2**30);
// console.log(os.freemem()/2**30);

// fs.appendFileSync('output.txt', 'Appended text.', 'utf8')
// let data = fs.readFileSync('output.txt')
// console.log (data.toString())
// fs.writeFileSync('output.txt', 'Overwritten text.', 'utf8')
// data = fs.readFileSync('output.txt')
// console.log (data.toString())

// let port = 3000;

// let server = http.createServer((req,res)=>{
//     const url = (req.url);

//     res.end((url == "/") ? "Hello World" : (url == "/about") ? "About Page" : "404 Not Found")
    
// })

// server.listen(port,()=>{
//     console.log(`server is running on port ${port}`)
// })



// app.get ('/new/:id' , (req ,res)=>{
//     let {id} = req.params;

//     res.send(id);
// })

// app.get ('/search' , (req ,res)=>{
//     console.log (req.query, "hehe");
//     res.send(req.body);
// })

// app.post ('/data', (req,res)=>{
//     console.log (req.body);
//     res.send(req.body);

// })


// app.get ('/', (req, res) => {
//     res.send({
//         data:'data'
//     });
// });

// app.use((req,res,next)=>{
//     console.log(`Request URL: ${req.url}`);
//     next();
// });

// app.get ('/about', (req, res) => {
//     res.send({hello: "world"});
// });
// app.post ('/', (req, res) => {
//     res.send('About Page');
// });


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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});