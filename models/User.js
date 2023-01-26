import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please provide name'],
        minlength: 3, 
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'please provide email'],
        unique: true,
        validate:{
            validator: validator.isEmail,
            message: 'Please Provide Valid Email'
        },
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 6,
    },
    lastName: {
        type: String,
        trim: true,
        maxlength:20,
        default: 'lastname'
    },
    location: {
        type: String,
        trim: true,
        maxlength:20,
        default: 'my city'
    }
})

export default mongoose.model('User', UserSchema)