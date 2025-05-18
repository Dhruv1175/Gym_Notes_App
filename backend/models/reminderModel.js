import mongoose from 'mongoose';
import { use } from 'react';

const reminderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    remindAt:{
        type: Date,
        default: Date.now,
    },
    read:{
        type: Boolean,
        default: false,
    },
});
const reminderModel = mongoose.model('Reminder', reminderSchema);
export default reminderModel;