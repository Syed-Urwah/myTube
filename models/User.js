import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true
    },
    userImg:{
        type: String,
    },
    subscribers:{
        type: Number
    },
    subscribedUsers:{
        type: [String]
    }
},
{timestamps: true}
)

export default mongoose.model("User", userSchema)