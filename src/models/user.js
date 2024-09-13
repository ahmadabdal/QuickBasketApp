import mongoose from "mongoose";

// Base Schema
const userSchema= new mongoose.Schema({
    name: {type:String},
    role: {
        type:String,
        enum:["Customer","Admin","DeliveryPartner"],
        required:true,
    },
    isActivated:{type:Boolean, default:false}
})

// Customer Schema

const customerSchema = new mongoose.Schema({
    ...userSchema.obj,
    phone:{
        type:Number,
        required:true
    }
})