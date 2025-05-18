import mongoose from "mongoose";
import { use } from "react";
const notificationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    messages:{
        type:String
    },
    read:{
        type:Boolean,
        default:false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
const notificationModel = mongoose.model("Notification", notificationSchema);
export default notificationModel;