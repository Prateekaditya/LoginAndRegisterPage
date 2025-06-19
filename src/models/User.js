import mongoose from "mongoose";

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        
    },
    image:{
        type:String,
        default:"upload image"
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }

},{
    timestamps:true,
})

const User = mongoose.models.User || mongoose.model('User',userSchema)

export default User;
