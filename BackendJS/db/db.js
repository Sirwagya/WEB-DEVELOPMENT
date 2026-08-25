import mongoose from 'mongoose';

let user = new mongoose.Schema({
    name: String,
    email:String,
    password:String,
    mobile:Number
})

let userModel = mongoose.model('user', user);

export default userModel;