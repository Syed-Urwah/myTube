import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name:{
    type: String,
    unique: false,
    required: true
   },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
    },
    subscribers:{
        type: Number
    },
    subscribedUsers:{
        type: [String]
    },
    fromGoogle:{
        type: Boolean,
        default: false
    },
    img:{
        type: String,
        default: "default image"
    }
},
{timestamps: true}
)

export default mongoose.model("User", userSchema)