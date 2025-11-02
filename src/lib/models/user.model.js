import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema(

    {
        clerkId:{
            type: String,
            required: true,
            unique:true,
        },
        email:{
             type: String,
        },
        firstName:{
             type: String,
              required: true,
        },
        lastName:{
           type: String,
              required: true,
        },
        userName:{
             type: String,
              required: true,
        },
        avator:{
             type: String,
              required: true,
        },
        followers:{
            type:[{type:mongoose.Schema.Types.ObjectId, ref:'user'}]
        },
        following:{
 type:[{type:mongoose.Schema.Types.ObjectId, ref:'user'}],
default:[],
},

 },
 {Timestamp:true}
);

const user = mongoose.models.user || mongoose.model('user', userSchema);
 
export default user;