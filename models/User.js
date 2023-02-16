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
        default: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
    }
},
{timestamps: true}
)

export default mongoose.model("User", userSchema)