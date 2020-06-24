const mongoose = require("mongoose")

const userSchema = mongoose.Schema({ // schema is data structure
    name: {// need to define data type. this is schema syntax
        type: String,
        required: [true,"Name is required!"]
    },
    email: {
        type: String, 
        required: [true,"Email is required!"],
        trim: true // this means if there's a space in that name, it will cut automatically
    },
    password: {
        type: String,
        required: [true,"Password is required!"],
        trim: true
    }
    
},{
    timestamp: true // mongoose provides this; will show when you created this data
})

const User = mongoose.model("User",userSchema) // name of our model
module.exports = User; // this will make the model